// CleanSection.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import main1 from "../images/ip4.jpg";
import main2 from "../images/office2.jpg";
import main3 from "../images/post1.JPEG";
import main4 from "../images/spe1.JPEG";

/* ========== Styled Components (상단 우선) ========== */
const Section = styled.section`
  width: 100%;
  padding: 96px 24px 64px;
  background: ${({ theme }) => theme?.background || "#fff"};
  color: ${({ theme }) => theme?.text || "#111"};
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 60px;
  height: 1500px;
  margin-top: 250px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 1500px;
    margin-top: 100px;
  }
`;

/* 카드 한 세트(이미지 + 아래 텍스트영역). 카드 전체가 움직임 */
const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 700px;
  gap: 14px;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.35s ease;
  padding: 10px;

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    gap: 12px;
    height: 400px;
    &:hover {
      transform: none;
    }
  }
`;

/* 이미지 박스(위) */
const ImageBox = styled.div`
  height: 500px;
  border-radius: 8px;
  background: #f2f3f5;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 필요에 따라 contain으로 변경 가능 */
  display: block;
`;

/* 텍스트 영역(아래) — 이미지와 완전히 분리된 블록 */
const Info = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 16px 18px 18px;
`;

const CardTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  margin: 0 0 8px;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 1.55;
  margin: 0 0 12px;
  color: #333;
  opacity: 0.95;
  word-break: keep-all; /* 단어 단위로 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어는 영역 안에서만 줄바꿈 */

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const MoreRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MoreButton = styled.button`
  appearance: none;
  border: none;
  background: #111;
  color: #fff;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(6px);
  }
`;

/* ========== React Component ========== */
const CleanSection = () => {
  const navigate = useNavigate();

  // 좌상(L1), 좌하(L2), 우상(R1), 우하(R2)
  const L1 = useRef(null);
  const L2 = useRef(null);
  const R1 = useRef(null);
  const R2 = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let rafId;
    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    // 카드 중심의 뷰포트 중앙 대비 오프셋을 이동값으로 환산
    const offsetFor = (el, strength) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const delta = (center - vh / 2) / (vh / 2); // -1 ~ 1 근사
      return clamp(delta * strength, -strength, strength);
    };

    // 초기: 좌측 두 카드는 살짝 위로
    const applyInitial = () => {
      const base = isMobile() ? -30 : -200;
      if (L1.current) L1.current.style.transform = `translateY(${base}px)`;
      if (L2.current) L2.current.style.transform = `translateY(${base}px)`;
      if (R1.current) R1.current.style.transform = `translateY(0px)`;
      if (R2.current) R2.current.style.transform = `translateY(0px)`;
    };

    applyInitial();

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const strength = isMobile() ? 12 : 26;

        // 좌측: 스크롤 내릴수록 위로(음수 방향)
        if (L1.current) {
          const y = offsetFor(L1.current, strength);
          const base = isMobile() ? -30 : -200;
          L1.current.style.transform = `translateY(${y + base}px)`;
        }
        if (L2.current) {
          const y = offsetFor(L2.current, strength);
          const base = isMobile() ? -30 : -200;
          L2.current.style.transform = `translateY(${y + base}px)`;
        }

        // 우측: 스크롤 내릴수록 아래로(양수 방향)
        if (R1.current) {
          const y = Math.abs(offsetFor(R1.current, strength));
          R1.current.style.transform = `translateY(${y}px)`;
        }
        if (R2.current) {
          const y = Math.abs(offsetFor(R2.current, strength));
          R2.current.style.transform = `translateY(${y}px)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      applyInitial();
      onScroll();
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goDetail = () => navigate("/clean#movein");
  const goDetail2 = () => navigate("/clean#office");
  const goDetail3 = () => navigate("/clean#post");
  const goDetail4 = () => navigate("/clean#special");

  return (
    <Section>
      <Inner>
        <Eyebrow>Our Services</Eyebrow>
        <Title>청소 서비스</Title>

        <Grid>
          {/* 좌측 위: 입주·이사 청소 */}
          <Card ref={L1} aria-label="입주·이사 청소">
            <ImageBox>
              <Thumb src={main1} alt="" />
            </ImageBox>
            <Info>
              <CardTitle>입주·이사 청소</CardTitle>
              <CardDesc>
                새 집 입주·이사 전후 전 공간을 깊이 청소하여 숨은 먼지와 오염을
                제거, 쾌적한 시작을 돕습니다.
              </CardDesc>
              <MoreRow>
                <MoreButton onClick={goDetail}>
                  자세히 보기 <span aria-hidden>›</span>{" "}
                </MoreButton>
              </MoreRow>
            </Info>
          </Card>

          {/* 우측 위: 상가·사무실 청소 */}
          <Card ref={R1} aria-label="상가·사무실 청소">
            <ImageBox>
              <Thumb src={main2} alt="" />
            </ImageBox>
            <Info>
              <CardTitle>상가·사무실 청소</CardTitle>
              <CardDesc>
                이용 동선과 업무 환경을 고려한 존(Zone)별 관리로 위생과 이미지를
                동시에 개선합니다.
              </CardDesc>
              <MoreRow>
                <MoreButton onClick={goDetail2}>
                  자세히 보기 <span aria-hidden>›</span>{" "}
                </MoreButton>
              </MoreRow>
            </Info>
          </Card>

          {/* 좌측 아래: 준공 청소 */}
          <Card ref={L2} aria-label="준공 청소">
            <ImageBox>
              <Thumb src={main3} alt="" />
            </ImageBox>
            <Info>
              <CardTitle>준공 청소</CardTitle>
              <CardDesc>
                공사 뒤 남은 분진·자재 잔여물 제거부터 마감 광택까지, 오픈 전
                최적의 컨디션을 완성합니다.
              </CardDesc>
              <MoreRow>
                <MoreButton onClick={goDetail3}>
                  자세히 보기 <span aria-hidden>›</span>{" "}
                </MoreButton>
              </MoreRow>
            </Info>
          </Card>

          {/* 우측 아래: 특수청소 */}
          <Card ref={R2} aria-label="특수청소">
            <ImageBox>
              <Thumb src={main4} alt="" />
            </ImageBox>
            <Info>
              <CardTitle>특수청소</CardTitle>
              <CardDesc>
                고난도 오염·악취·장기 방치 공간을 전문 장비와 공정으로 안전하게
                복구/정리합니다.
              </CardDesc>
              <MoreRow>
                <MoreButton onClick={goDetail4}>
                  자세히 보기 <span aria-hidden>›</span>{" "}
                </MoreButton>
              </MoreRow>
            </Info>
          </Card>
        </Grid>
      </Inner>
    </Section>
  );
};

export default CleanSection;
