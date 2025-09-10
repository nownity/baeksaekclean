import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";

const BASE_HEIGHT = 70; // 상단바 고정 높이
const SUBITEM_HEIGHT = 36; // 서브메뉴 한 줄 높이
const SUBLIST_PADDING = 16; // 서브메뉴 위/아래 합계 여백

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: ${({ $expandedHeight }) => `${$expandedHeight}px`};

  background-color: ${({ $isExpanded }) =>
    $isExpanded ? "#000" : "transparent"};
  transition: height 0.22s ease, background-color 0.22s ease;

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: ${BASE_HEIGHT}px;
    background-color: transparent;
  }
`;

const TopRow = styled.div`
  height: ${BASE_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 12px;
`;

const Nav = styled.nav`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 220px;
    background-color: ${({ theme }) => theme.herobg};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    z-index: 999;
    padding-top: 13px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavItemWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${BASE_HEIGHT}px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: ${({ $active, theme }) => ($active ? theme.text : theme.headertext)};
  border-bottom: ${({ $active, theme }) =>
    $active ? `2px solid ${theme.text}` : "none"};
  transition: transform 0.1s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  padding: 6px 2px;
  min-width: 85px;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 85%;
    text-align: left;
  }
`;

const Submenu = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;

  position: absolute;
  top: ${BASE_HEIGHT}px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 80px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  background: transparent;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubmenuItem = styled.button`
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 4px 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  transition: transform 0.12s ease;

  &:hover {
    transform: translateX(2px);
  }
`;

/* 모바일 전용 UI (기존 유지) */
const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $show }) => ($show ? "block" : "none")};
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    z-index: 1000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 85%;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    z-index: 1001;
    cursor: pointer;
    margin-bottom: 30px;
  }
`;

const MLogo = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    margin-bottom: 80px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const TextPhone = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 13px;
    font-weight: bold;
    margin-top: 50px;
  }
`;

const TextEmail = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 13px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

/* ====== 컴포넌트 ====== */
const Header = ({ currentSection, sectionRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴
  const [hoveredKey, setHoveredKey] = useState(null); // PC 호버 중인 메뉴 키
  const [isDesktop, setIsDesktop] = useState(true);
  const [canShowSubmenu, setCanShowSubmenu] = useState(false); // height 트랜지션 완료 후만 true

  const headerRef = useRef(null);
  const lastHoverRef = useRef(null); // transitionend 동기화 시 현재 대상 메뉴 추적

  // 메뉴 구조
  const menus = useMemo(
    () => ({
      hero: { label: "백엔클린", subs: ["이동"] },
      about: { label: "청소서비스", subs: ["입주", "거주", "준공", "특수"] },
      info: { label: "청소범위", subs: ["거실", "주방", "화장실"] },
      sample: { label: "코팅서비스", subs: ["마루", "장판"] },
      contact: { label: "예약신청", subs: [] },
    }),
    []
  );

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // 데스크톱/모바일 전환 감지
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  // 헤더 확장 높이 계산 (PC만)
  const expandedHeight = useMemo(() => {
    if (!isDesktop || !hoveredKey) return BASE_HEIGHT;
    const subCount = menus[hoveredKey]?.subs?.length ?? 0;
    if (subCount <= 0) return BASE_HEIGHT;
    return BASE_HEIGHT + subCount * SUBITEM_HEIGHT + SUBLIST_PADDING + 10;
  }, [hoveredKey, isDesktop, menus]);

  // transitionend: height 트랜지션이 끝났을 때만 서브메뉴 노출 허용
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const onEnd = (e) => {
      if (e.target !== el) return;
      if (e.propertyName !== "height") return;

      // 현재 호버 대상이 있고, 그 대상에 서브가 존재할 때만 표시
      const key = lastHoverRef.current;
      const hasSubs = key && (menus[key]?.subs?.length ?? 0) > 0;
      setCanShowSubmenu(Boolean(hasSubs));
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [menus]);

  // 호버가 바뀌면 먼저 숨김(리셋) → height 트랜지션 완료 시 onEnd가 다시 켜줌
  useEffect(() => {
    lastHoverRef.current = hoveredKey;
    setCanShowSubmenu(false);
  }, [hoveredKey]);

  // 헤더 밖으로 나가면 초기화
  const handleMouseLeave = () => {
    setHoveredKey(null);
    setCanShowSubmenu(false);
  };

  // 서브메뉴/메뉴 클릭 라우팅
  const goCoating = () => {
    if (window && window.location) {
      window.location.href = "/coating";
    }
  };

  const handleParentClick = (key) => {
    if (key === "sample") {
      goCoating();
      return;
    }
    scrollToSection(key);
  };

  const handleSubClick = (parentKey, subLabel) => {
    if (parentKey === "sample") {
      goCoating();
      return;
    }
    if (parentKey === "hero" && subLabel === "이동") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    scrollToSection(parentKey);
  };

  const isExpanded =
    isDesktop && !!hoveredKey && (menus[hoveredKey]?.subs?.length ?? 0) > 0;

  // 서브메뉴 표시 여부는 "현재 호버된 메뉴 & canShowSubmenu" 동시 충족 필요
  const visibleFor = (key) => isDesktop && hoveredKey === key && canShowSubmenu;

  return (
    <HeaderContainer
      ref={headerRef}
      $expandedHeight={expandedHeight}
      $isExpanded={isExpanded}
      onMouseLeave={handleMouseLeave}
    >
      <TopRow>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          백엔클린
        </Logo>
        <Hamburger onClick={() => setMenuOpen(true)} $show={!menuOpen}>
          ☰
        </Hamburger>
        <Nav open={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton>
          <MLogo
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" }) &
              setMenuOpen(false)
            }
          >
            백엔클린
          </MLogo>

          {/* ====== PC 메뉴 + 서브메뉴 ====== */}
          {/* 백엔클린 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("hero")}
            onFocus={() => setHoveredKey("hero")}
          >
            <NavItem
              onClick={() => handleParentClick("hero")}
              $active={currentSection === "hero"}
            >
              {menus.hero.label}
            </NavItem>
            <Submenu $visible={visibleFor("hero")}>
              {menus.hero.subs.map((s) => (
                <li key={`hero-${s}`}>
                  <SubmenuItem onClick={() => handleSubClick("hero", s)}>
                    {s}
                  </SubmenuItem>
                </li>
              ))}
            </Submenu>
          </NavItemWrap>

          {/* 청소서비스 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("about")}
            onFocus={() => setHoveredKey("about")}
          >
            <NavItem
              onClick={() => handleParentClick("about")}
              $active={currentSection === "about"}
            >
              {menus.about.label}
            </NavItem>
            <Submenu $visible={visibleFor("about")}>
              {menus.about.subs.map((s) => (
                <li key={`about-${s}`}>
                  <SubmenuItem onClick={() => handleSubClick("about", s)}>
                    {s}
                  </SubmenuItem>
                </li>
              ))}
            </Submenu>
          </NavItemWrap>

          {/* 청소범위 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("info")}
            onFocus={() => setHoveredKey("info")}
          >
            <NavItem
              onClick={() => handleParentClick("info")}
              $active={currentSection === "info"}
            >
              {menus.info.label}
            </NavItem>
            <Submenu $visible={visibleFor("info")}>
              {menus.info.subs.map((s) => (
                <li key={`info-${s}`}>
                  <SubmenuItem onClick={() => handleSubClick("info", s)}>
                    {s}
                  </SubmenuItem>
                </li>
              ))}
            </Submenu>
          </NavItemWrap>

          {/* 코팅서비스 */}
          <NavItemWrap>
            <NavItem>{menus.sample.label}</NavItem>
            <Submenu $visible={visibleFor("sample")}>
              {menus.sample.subs.map((s) => (
                <li key={`sample-${s}`}>
                  <SubmenuItem onClick={() => handleSubClick("sample", s)}>
                    {s}
                  </SubmenuItem>
                </li>
              ))}
            </Submenu>
          </NavItemWrap>

          {/* 예약신청 (서브 없음) */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("contact")}
            onFocus={() => setHoveredKey("contact")}
          >
            <NavItem
              onClick={() => handleParentClick("contact")}
              $active={currentSection === "contact"}
            >
              {menus.contact.label}
            </NavItem>
          </NavItemWrap>

          {/* 모바일 하단 연락처 (기존 유지) */}
          <TextPhone>010-9508-6626</TextPhone>
          <TextEmail>baeksaekclaen@gmail.com</TextEmail>
        </Nav>
      </TopRow>
    </HeaderContainer>
  );
};

export default Header;
