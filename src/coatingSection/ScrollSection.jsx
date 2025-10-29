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

const MaskBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${({ $sideVW }) => `${$sideVW}vw`};
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

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  text-align: center;
  color: #fff;
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 150px;
  }
`;

const Kicker = styled.p`
  font-size: 14px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const HeroTitle = styled.div`
  font-size: 60px;
  line-height: 1.15;
  letter-spacing: -0.6px;
  margin: 0 0 20px;
  @media (max-width: 1024px) {
    font-size: 44px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  .mobile-br {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const HeroSub = styled.p`
  font-size: 18px;
  line-height: 1.7;
  opacity: 0.95;
  max-width: 860px;
  margin: 0 auto;

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    display: none;
  }
`;

const START_CENTER_VW = 50;
const TRIGGER_START = 0.85;

const ScrollSection = () => {
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

      <HeroContent>
        <Kicker>COATING SERVICE</Kicker>
        <HeroTitle>
          보이지 않는 오염, <br className="mobile-br" />
          스며들기 전에 막아야 합니다
        </HeroTitle>
        <HeroSub>
          코팅은 표면에 <strong>얇은 보호막</strong>을 형성해 오염의{" "}
          <strong>침투를 차단</strong>하고 물·기름 등을{" "}
          <strong>쉽게 제거</strong>할 수 있도록 도와줍니다. 주방과 욕실처럼
          물때·얼룩이 자주 생기는 공간에 <strong>나노코팅</strong>을 적용하면
          일상 관리가 <strong>간편</strong>해지고 <strong>유지보수</strong>가
          쉬워집니다.
        </HeroSub>
      </HeroContent>
    </Section>
  );
};

export default ScrollSection;
