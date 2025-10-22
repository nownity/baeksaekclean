import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import main1 from "../images/wax.png";

const Section = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background: #fff;
  isolation: isolate;
  contain: paint;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const ImgLayer = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${main1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  will-change: transform;
  transform: translateZ(0);
`;

/* 좌우 여백(마스크) 레이어: transform만 변경 (레이아웃 불변) */
const MaskBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${({ $sideVW }) => `${$sideVW}vw`}; /* 시작 여백 너비 (고정) */
  background: #fff;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0) scaleX(${({ $scale }) => $scale});
  transition: transform 0.12s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MaskLeft = styled(MaskBase)`
  left: 0;
  transform-origin: left center;
`;

const MaskRight = styled(MaskBase)`
  right: 0;
  transform-origin: right center;
`;

/* 필요하면 가운데에 컨텐츠를 올려도 됨 */
const Content = styled.div`
  position: relative;
  z-index: 2;
  color: #0c0c0c;
`;

const Title = styled.div`
  font-size: 5.5rem;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

/* ===================== React Component ===================== */
/**
 * 옵션:
 * - START_CENTER_VW: 처음에 가운데가 보이는 폭(예: 80이면 양옆 각각 10vw 여백)
 * - TRIGGER_START: 확대(여백 축소) 시작 시점 (뷰포트 높이 비율)
 */
const START_CENTER_VW = 70; // 70~90 사이 취향대로
const TRIGGER_START = 0.85; // 0.9(더 늦게) ~ 0.75(더 일찍) 조정

const CountertopSection = () => {
  const ref = useRef(null);
  const [p, setP] = useState(0); // 0~1, 1이 되면 여백 0
  const sideVW = (100 - START_CENTER_VW) / 2; // 양쪽 시작 여백

  useEffect(() => {
    let ticking = false;

    const calc = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // 섹션 top이 TRIGGER_START * vh 지점에 오면 p 증가 시작
      // top === TRIGGER_START*vh -> p=0, top === 0 -> p=1
      const startY = TRIGGER_START * vh;
      const raw = (startY - rect.top) / startY;
      const progress = Math.max(0, Math.min(1, raw));
      setP(progress);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        calc();
        ticking = false;
      });
    };

    calc(); // 초기 1회
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 마스크 스케일: 1 -> 0 (여백이 점차 사라짐)
  const maskScale = 1 - p;

  return (
    <Section ref={ref}>
      <ImgLayer />
      <MaskLeft $sideVW={sideVW} $scale={maskScale} />
      <MaskRight $sideVW={sideVW} $scale={maskScale} />

      {/* 필요 시: 섹션 위에 텍스트/버튼 등 올리기 */}
      <Content>
        <Title>깨끗하게, 하얗게</Title>
      </Content>
    </Section>
  );
};

export default CountertopSection;
