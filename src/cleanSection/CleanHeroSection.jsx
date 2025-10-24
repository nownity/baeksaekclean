import { useCallback, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../images/clean.JPEG";

const BG = "#ffffff";
const TEXT = "#0c0c0c";
const SUB = "#4a4a4a";
const LINE = "#efefef";
const TAB_BORDER = "#e2e2e2";
const TAB_BG = "#ffffff";
const TAB_HOVER = "#dcdcdc";

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  background: ${BG};
  color: ${TEXT};
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  border-bottom: 1px solid ${LINE};
  margin-bottom: 150px;
  @media (max-width: 1200px) {
    margin-bottom: 0px;
    min-height: 56vh;
  }
`;

const HeroInner = styled.div`
  width: min(1280px, 94vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(20px, 4vw, 48px);
  align-items: center;
  padding-top: clamp(72px, 10vh, 120px);
  padding-bottom: clamp(20px, 6vh, 40px);

  @media (max-width: 1200px) {
    padding-bottom: 0;
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

const Eyebrow = styled.div`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: clamp(28px, 4.2vw, 52px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 900;
`;

const Desc = styled.p`
  margin-top: 12px;
  font-size: clamp(14px, 2vw, 18px);
  color: ${SUB};
  line-height: 1.6;
`;

const Ctas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  border: 1px solid ${TAB_BORDER};
  color: ${TEXT};
  background: ${TAB_BG};
  transition: transform 0.15s ease, box-shadow 0.2s ease,
    border-color 0.15s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    border-color: ${TAB_HOVER};
  }

  &.primary {
    background: #0c0c0c;
    color: #ffffff;
    border-color: #0c0c0c;
  }
`;

const Visual = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

/* ==== 네비게이션 ==== */
const NavBar = styled.nav`
  width: min(1280px, 94vw);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  border-radius: 16px;

  border: ${({ $elevated }) =>
    $elevated ? `1px solid ${LINE}` : "1px solid transparent"};
  background: ${({ $elevated }) =>
    $elevated ? "rgba(255,255,255,.92)" : "transparent"};
  backdrop-filter: ${({ $elevated }) =>
    $elevated ? "blur(10px) saturate(140%)" : "none"};
  box-shadow: ${({ $elevated }) =>
    $elevated ? "0 10px 24px rgba(0,0,0,.06)" : "none"};
  @media (max-width: 1200px) {
    box-shadow: none;
  }
`;

const NavPlace = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 16px 0 24px;
  position: relative;
`;

const FixedShell = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 990;
  pointer-events: none;
  width: 100%;
  display: grid;
  place-items: center;
  @media (max-width: 1200px) {
    top: 80px;
  }
`;

const FixedInner = styled.div`
  pointer-events: auto;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Spacer = styled.div`
  height: ${({ $h }) => `${$h}px`};
`;

const Tab = styled.button`
  appearance: none;
  border: 1px solid ${TAB_BORDER};
  background: ${TAB_BG};
  color: ${TEXT};
  height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease,
    border-color 0.15s ease, color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    border-color: ${TAB_HOVER};
  }
`;

function scrollToIdWithOffset(id, offsetPx) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top;
  const targetY = Math.max(absoluteY - offsetPx, 0);
  window.history.replaceState(null, "", `#${id}`);
  window.scrollTo({ top: targetY, behavior: "smooth" });
}

const CleanHeroSection = () => {
  const navBoxRef = useRef(null);
  const placeRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [navH, setNavH] = useState(0);

  useLayoutEffect(() => {
    const calc = () => {
      if (!placeRef.current) return;
      const top = placeRef.current.getBoundingClientRect().top;
      setFixed(top <= 100);
      if (navBoxRef.current) setNavH(navBoxRef.current.offsetHeight);
    };
    calc();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        calc();
        ticking = false;
      });
    };
    const onResize = () => {
      calc();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onTabClick = useCallback((id) => {
    const isMobile = window.innerWidth <= 1199;
    const OFFSET_BASE = isMobile ? 170 : 100;

    scrollToIdWithOffset(id, OFFSET_BASE);
  }, []);

  return (
    <Section>
      <HeroInner>
        <div>
          <Eyebrow>SERVICES</Eyebrow>
          <Title>백앤클린 청소 서비스</Title>
          <Desc>아래에서 상세 범위 및 가이드를 확인하세요.</Desc>
          <Ctas>
            <Btn className="primary" href="tel:0000-0000">
              즉시 전화 상담
            </Btn>
            <Btn
              href="#newcare"
              onClick={(e) => {
                e.preventDefault();
                onTabClick("newcare");
              }}
            >
              새집케어 서비스
            </Btn>
          </Ctas>
        </div>

        <Visual>
          <img src={img} alt="청소 서비스 메인 이미지" />
        </Visual>
      </HeroInner>

      <NavPlace ref={placeRef}>
        {fixed ? <Spacer $h={navH} aria-hidden /> : null}

        {!fixed && (
          <NavBar
            ref={navBoxRef}
            $elevated={false}
            aria-label="청소 서비스 내비게이션"
          >
            <Tab onClick={() => onTabClick("movein")}>입주 · 이사</Tab>
            <Tab onClick={() => onTabClick("office")}>상가 · 사무실</Tab>
            <Tab onClick={() => onTabClick("post")}>준공</Tab>
            <Tab onClick={() => onTabClick("special")}>특수</Tab>
            <Tab onClick={() => onTabClick("newcare")}>새집케어</Tab>
          </NavBar>
        )}
      </NavPlace>

      {/* ---- 고정 상태: 화면 상단 100px에 띄우기(테두리/배경/블러/그림자 활성) ---- */}
      {fixed && (
        <FixedShell>
          <FixedInner>
            <NavBar
              ref={navBoxRef}
              $elevated={true}
              aria-label="청소 서비스 내비게이션 (고정)"
            >
              <Tab onClick={() => onTabClick("movein")}>입주 · 이사</Tab>
              <Tab onClick={() => onTabClick("office")}>상가 · 사무실</Tab>
              <Tab onClick={() => onTabClick("post")}>준공</Tab>
              <Tab onClick={() => onTabClick("special")}>특수</Tab>
              <Tab onClick={() => onTabClick("newcare")}>새집케어</Tab>
            </NavBar>
          </FixedInner>
        </FixedShell>
      )}
    </Section>
  );
};

export default CleanHeroSection;
