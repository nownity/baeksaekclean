import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImg from "../images/logo_sim.png";

const BASE_HEIGHT = 70;
const SUBITEM_HEIGHT = 36;
const SUBLIST_PADDING = 16;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $expandedHeight }) => `${$expandedHeight}px`};
  background-color: ${({ $scrolled }) => ($scrolled ? "#fff" : "transparent")};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "saturate(120%) blur(14px)" : "none"};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "saturate(120%) blur(14px)" : "none"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none"};
  z-index: 999;
  transition: height 0.22s ease, background-color 0.22s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 1024px) {
    height: ${BASE_HEIGHT}px;
    background-color: transparent;
    align-items: flex-start;
  }
`;

const TopRow = styled.div`
  height: ${BASE_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 0px 100px;
  }
`;

const Logo = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  font-size: 1.4rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    margin-left: 12px;
  }

  img {
    width: 28px;
    height: auto;
    margin-right: 2px;
  }

  span + span {
    margin-left: 8px;
  }

  .white {
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media (max-width: 1024px) {
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
  justify-content: center;
  height: ${BASE_HEIGHT}px;
  flex: 0 0 auto;
  @media (max-width: 1024px) {
    height: auto;
    width: 100%;
    justify-content: center;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 800;
  color: ${({ $active, theme }) => ($active ? theme.text : theme.headertext)};
  border-bottom: ${({ $active, theme }) =>
    $active ? `2px solid ${theme.text}` : "none"};
  transition: transform 0.1s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  padding: 6px 2px;
  min-width: 85px;
  text-align: center;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavItem2 = styled.button`
  background-color: #000;
  border: none;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: #fff;
  border-radius: 100px;
  border-bottom: ${({ $active, theme }) =>
    $active ? `2px solid ${theme.text}` : "none"};
  transition: transform 0.1s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  padding: 6px 2px;
  min-width: 110px;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 1024px) {
    background: none;
    font-weight: ${({ $active }) => ($active ? "800" : "800")};
    color: ${({ $active, theme }) => ($active ? theme.text : theme.headertext)};
    border-radius: 0px;
    margin-bottom: 50px;
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Submenu = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;

  position: absolute;
  top: ${BASE_HEIGHT}px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  min-width: 140px;
  max-width: 260px;
  text-align: center;
  white-space: nowrap;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  background: transparent;
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SubmenuItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  transition: transform 0.12s ease;
  width: 100%;
  &:hover {
    transform: translateX(2px);
  }
`;

const Hamburger = styled.button`
  display: none;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    display: flex;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 13px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

/* 섹션 매핑 */
const HOME_SUB_TO_ID = {
  회사소개: "about",
  청소서비스: "sample",
  코팅서비스: "info",
  청소범위: "contact",
};
const CLEAN_SUB_TO_ID = {
  "입주·이사 청소": "movein",
  "상가·사무실 청소": "office",
  "준공 청소": "post",
  특수청소: "special",
  새집케어: "newcare",
};
const COATING_SUB_TO_ID = {
  "상판 코팅": "countertop",
  마루코팅: "floor",
  "왁스 코팅": "wax",
};

const Header = ({ currentSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [canShowSubmenu, setCanShowSubmenu] = useState(false);
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? window.scrollY > 0 : false
  );

  const headerRef = useRef(null);
  const lastHoverRef = useRef(null);

  const menus = useMemo(
    () => ({
      hero: {
        label: "백앤클린",
        subs: ["회사소개", "청소서비스", "코팅서비스", "청소범위"],
      },
      about: {
        label: "청소서비스",
        subs: [
          "입주·이사 청소",
          "상가·사무실 청소",
          "준공 청소",
          "특수청소",
          "새집케어",
        ],
      },
      sample: {
        label: "코팅서비스",
        subs: ["상판 코팅", "마루코팅", "왁스 코팅"],
      },
      contact: { label: "예약하기", subs: [] },
    }),
    []
  );

  /* 데스크톱 감지 */
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

  /* 확장 높이 계산 */
  const expandedHeight = useMemo(() => {
    if (!isDesktop || !hoveredKey) return BASE_HEIGHT;
    const subCount = menus[hoveredKey]?.subs?.length ?? 0;
    if (subCount <= 0) return BASE_HEIGHT;
    return BASE_HEIGHT + subCount * SUBITEM_HEIGHT + SUBLIST_PADDING + 10;
  }, [hoveredKey, isDesktop, menus]);

  /* 트랜지션 후 서브 표시 */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onEnd = (e) => {
      if (e.target !== el || e.propertyName !== "height") return;
      const key = lastHoverRef.current;
      const hasSubs = key && (menus[key]?.subs?.length ?? 0) > 0;
      setCanShowSubmenu(Boolean(hasSubs));
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [menus]);

  useEffect(() => {
    lastHoverRef.current = hoveredKey;
    setCanShowSubmenu(false);
  }, [hoveredKey]);

  const handleMouseLeave = () => {
    setHoveredKey(null);
    setCanShowSubmenu(false);
  };

  /* 공통 스크롤 유틸 */
  const smoothScrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    if ("scrollMarginTop" in el.style)
      el.style.scrollMarginTop = `${BASE_HEIGHT + 12}px`;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  /* 다른 라우트 → 해시가 있으면 해당 섹션 스크롤 */
  useEffect(() => {
    const hash = decodeURIComponent(location.hash || "").replace(/^#/, "");
    if (hash) {
      const tryScroll = () => smoothScrollToId(hash);
      const t1 = requestAnimationFrame(() => {
        if (!tryScroll()) setTimeout(tryScroll, 50);
      });
      return () => cancelAnimationFrame(t1);
    }
  }, [location.pathname, location.hash]);

  /* 🔹 라우트 변경 시 해시가 없으면 최상단으로 이동 */
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  /* 메뉴명 클릭 → 라우트 이동 + 최상단 */
  const handleParentClick = (key) => {
    const map = {
      hero: "/",
      about: "/clean",
      sample: "/coating",
      contact: "/contact",
    };
    const path = map[key];
    if (!path) return;

    if (location.pathname === path) {
      // 같은 라우트면 스크롤만 맨 위로
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // 다른 라우트면 이동 (위의 pathname effect가 최상단으로 올려줌)
      navigate(path);
    }
    setMenuOpen(false);
  };

  /* 세부메뉴 클릭: 같은 라우트면 스크롤, 다르면 이동 후 스크롤 */
  const goRouteSection = (routePath, sectionId) => {
    if (location.pathname === routePath) {
      requestAnimationFrame(() => {
        if (!smoothScrollToId(sectionId))
          setTimeout(() => smoothScrollToId(sectionId), 0);
      });
    } else {
      navigate(`${routePath}#${sectionId}`);
    }
    setMenuOpen(false);
  };

  const handleSubClick = (parentKey, subLabel) => {
    if (parentKey === "hero") {
      const id = HOME_SUB_TO_ID[subLabel];
      if (id) goRouteSection("/", id);
      return;
    }
    if (parentKey === "about") {
      const id = CLEAN_SUB_TO_ID[subLabel];
      if (id) goRouteSection("/clean", id);
      return;
    }
    if (parentKey === "sample") {
      const id = COATING_SUB_TO_ID[subLabel];
      if (id) goRouteSection("/coating", id);
      return;
    }
  };

  const isExpanded =
    isDesktop && !!hoveredKey && (menus[hoveredKey]?.subs?.length ?? 0) > 0;
  const visibleFor = (key) => isDesktop && hoveredKey === key && canShowSubmenu;

  /* 스크롤 상태 */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderContainer
      ref={headerRef}
      $expandedHeight={expandedHeight}
      $isExpanded={isExpanded}
      onMouseLeave={handleMouseLeave}
      $scrolled={scrolled || hoveredKey !== null}
    >
      <TopRow>
        <Logo
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <img src={logoImg} alt="백앤클린 로고" />
          <span>백앤클린</span>
          <span className="white">BAEK N CLEAN</span>
        </Logo>
        <Hamburger onClick={() => setMenuOpen(true)} $show={!menuOpen}>
          ☰
        </Hamburger>
        <Nav open={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton>
          <MLogo
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            백엔클린
          </MLogo>

          {/* 백엔클린 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("hero")}
            onFocus={() => setHoveredKey("hero")}
          >
            <NavItem
              onClick={() => handleParentClick("hero")}
              $active={currentSection === "hero" || location.pathname === "/"}
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
              $active={location.pathname === "/clean"}
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

          {/* 코팅서비스 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("sample")}
            onFocus={() => setHoveredKey("sample")}
          >
            <NavItem
              onClick={() => handleParentClick("sample")}
              $active={location.pathname === "/coating"}
            >
              {menus.sample.label}
            </NavItem>
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

          {/* 예약하기 */}
          <NavItemWrap
            onMouseEnter={() => setHoveredKey("contact")}
            onFocus={() => setHoveredKey("contact")}
          >
            <NavItem2
              onClick={() => handleParentClick("contact")}
              $active={location.pathname === "/contact"}
            >
              {menus.contact.label}
            </NavItem2>
          </NavItemWrap>

          <TextPhone>010-9508-6626</TextPhone>
          <TextEmail>baeksaekclean@gmail.com</TextEmail>
        </Nav>
      </TopRow>
    </HeaderContainer>
  );
};

export default Header;
