import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import main1 from "../images/coating6.png";
import main2 from "../images/coating4.png";
import main3 from "../images/coating5.png";

const Section = styled.section`
  width: 100%;
  padding: 96px 24px 64px;
  background: ${({ theme }) => theme?.background || "#fff"};
  color: ${({ theme }) => theme?.text || "#111"};
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 1100px;
  }
`;

const Eyebrow = styled.div`
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.25;
  margin: 0 0 28px;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: 550px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
    height: 800px;
    margin-top: 50px;
  }
`;

const Card = styled.div`
  position: relative;
  height: 380px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  background: #f5f5f5;
  transform: translateZ(0);
  transition: transform 0.35s ease-out;

  &:hover {
    transform: translateY(-20px);
  }

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Card2 = styled(Card)`
  transform: translateY(-40px);

  &:hover {
    transform: translateY(-50px); /* hover 시에도 -10px 차이 유지 */
  }

  @media (max-width: 1024px) {
    transform: translateY(0px);

    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  transition: filter 0.35s ease;

  ${Card}:hover & {
    filter: brightness(0.6);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  text-align: center;
  color: #000000;
  transition: all 0.35s ease;
`;

const Overlay2 = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  text-align: center;
  color: #ffffff;
  transition: all 0.35s ease;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
`;

const Desc = styled.div`
  font-size: 14px;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.35s ease, max-height 0.35s ease;
  word-break: keep-all; /* 단어 단위로 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어는 영역 안에서만 줄바꿈 */

  ${Card}:hover & {
    opacity: 1;
    max-height: 60px;
  }

  @media (max-width: 768px) {
    opacity: 1;
    max-height: 60px;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const MoreButton = styled.button`
  appearance: none;
  border: none;
  background: #fff;
  color: #000;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(8px);
  }
`;

const CoatingSection = () => {
  const navigate = useNavigate();
  const card1Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let rafId;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const offsetFor = (el, strength = 28) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const delta = (center - vh / 2) / (vh / 2);
      return clamp(delta * strength, -strength, strength);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (card1Ref.current) {
          const y1 = offsetFor(card1Ref.current, 28);
          card1Ref.current.style.transform = `translateY(${y1}px)`;
        }
        if (card3Ref.current) {
          const y3 = offsetFor(card3Ref.current, 28);
          card3Ref.current.style.transform = `translateY(${y3}px)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goDetail = () => navigate("/coating");

  return (
    <Section>
      <Inner>
        <Eyebrow>Differentiate</Eyebrow>
        <Title>코팅 서비스</Title>

        <Grid>
          <Card ref={card1Ref} aria-label="코팅 서비스 카드 1">
            <Img src={main1} alt="" />
            <Overlay2>
              <Name>상판 코팅</Name>
              <Desc>
                주방이나 가구 상판을 보호해 오염과 스크래치를 막아줍니다.
              </Desc>
            </Overlay2>
          </Card>

          <Card2 aria-label="코팅 서비스 카드 2">
            <Img src={main2} alt="" />
            <Overlay2>
              <Name>마루 코팅</Name>
              <Desc>바닥 마루를 코팅해 내구성을 높이고 관리가 쉬워집니다.</Desc>
            </Overlay2>
          </Card2>

          <Card ref={card3Ref} aria-label="코팅 서비스 카드 3">
            <Img src={main3} alt="" />
            <Overlay>
              <Name>왁스 코팅</Name>
              <Desc>
                표면에 윤기를 더해 청결하고 고급스러운 분위기를 유지합니다.
              </Desc>
            </Overlay>
          </Card>
        </Grid>

        <FooterRow>
          <MoreButton onClick={goDetail} aria-label="코팅 서비스 자세히 보기">
            자세히 보기 <span aria-hidden>›</span>
          </MoreButton>
        </FooterRow>
      </Inner>
    </Section>
  );
};

export default CoatingSection;
