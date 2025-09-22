import styled from "styled-components";
import { useEffect, useMemo, useRef } from "react";

/* ===== 이미지 교체 ===== */
import hero from "../images/main3.JPEG";
import reasonImg1 from "../images/main.JPEG";
import reasonImg2 from "../images/jg3.JPEG";
import reasonImg3 from "../images/jg1.JPEG";
import reasonImg4 from "../images/is4.JPEG";

import GalleryCarousel from "../hooks/GalleryCarousel";

/* ================= Styled ================= */
const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.herobg};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  min-height: 88vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  padding: 120px 7vw 80px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    padding: 100px 6vw 60px;
  }
`;

const HeroLeft = styled.div`
  display: grid;
  gap: 18px;
`;

const Eyebrow = styled.div`
  font-size: 14px;
  letter-spacing: 0.12em;
  opacity: 0.7;
`;

const Headline = styled.h1`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
`;

const Subline = styled.p`
  font-size: clamp(15px, 1.4vw, 20px);
  line-height: 1.7;
  opacity: 0.95;
  margin: 10px 0 0;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 26px;
  flex-wrap: wrap;
`;

const CTA = styled.a`
  height: 48px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.textWhite};
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

const GhostCTA = styled(CTA)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
`;

const HeroRight = styled.div`
  perspective: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TiltCard = styled.div`
  width: min(560px, 90%);
  aspect-ratio: 4 / 5;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  transform: rotateX(0deg) rotateY(0deg) translateZ(0);
  transition: transform 0.08s ease-out;
  position: relative;
  overflow: hidden;
  will-change: transform;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(0,0,0,.25)" : "rgba(0,0,0,.12)"};
  }
`;

/* ===== Sticky Why ===== */
const StickyWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  padding: 120px 7vw;
  align-items: start;

  background: #ffffff;
  color: #111;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 100px 6vw;
  }
`;

const StickyLeft = styled.div`
  position: sticky;
  top: 90px;
  display: grid;
  gap: 14px;
  align-self: start;
`;

const StickyTitle = styled.h2`
  font-size: clamp(26px, 3.2vw, 42px);
  margin: 0;
  margin-top: 30px;
`;

const StickyDesc = styled.p`
  opacity: 0.95;
  line-height: 1.75;
  margin: 4px 0 0;
`;

/* ===== KPI (카운트업) ===== */
const KPIWrap = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const KPI = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px 18px;
`;

const KPINum = styled.div`
  font-size: clamp(24px, 3.2vw, 36px);
  font-weight: 800;
  line-height: 1.1;
`;

const KPILabel = styled.div`
  margin-top: 8px;
  font-size: 14px;
  opacity: 0.8;
`;

/* 오른쪽 Reason 그리드 */
const ReasonsGrid = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 680px) {
    gap: 8px;
  }
`;

/* PC/모바일 모두 '이미지 위, 텍스트 아래' */
const ReasonCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 16px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #eee;
  will-change: transform;
`;

const ReasonImage = styled.img`
  width: 100%;
  max-height: 550px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 980px) {
    height: 200px;
  }
  @media (max-width: 680px) {
    height: 180px;
  }
`;

const ReasonText = styled.div`
  display: grid;
  align-content: center;
  gap: 6px;
`;

const ReasonTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

const ReasonDesc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.95;
`;

/* ===== 후킹 문구 ===== */
const HookSection = styled.div`
  width: 100%;
  padding: 80px 7vw;
  text-align: center;
  background: #fff;
  @media (max-width: 680px) {
    padding: 20px 7vw;
  }
`;

const HookText = styled.h2`
  font-size: clamp(20px, 3vw, 36px);
  font-weight: 800;
  margin: 0 0 16px;
  color: #111;
`;

const HookSub = styled.p`
  font-size: clamp(14px, 1.4vw, 20px);
  line-height: 1.6;
  margin: 0;
  color: #333;
  opacity: 0.9;
`;

/* ============== 성능 유틸 ============== */
function useMouseTiltRef(cardRef, maxDeg = 8) {
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let raf;

    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = ((e.clientX - cx) / rect.width) * 2;
        const dy = ((e.clientY - cy) / rect.height) * 2;
        el.style.transform = `rotateX(${dy * maxDeg}deg) rotateY(${
          dx * maxDeg
        }deg)`;
      });
    };

    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("mouseleave", leave, { passive: true });
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, [cardRef, maxDeg]);
}

function useIOTranslateUp(listRef) {
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-reason]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            el.style.transform = "translateY(0px)";
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    items.forEach((it) => {
      it.style.transform = "translateY(16px)";
      io.observe(it);
    });
    return () => io.disconnect();
  }, [listRef]);
}

/* ===== CountUp Hook =====
   - StickyLeft 내부에서 data-kpi="count" 요소들을 찾아 카운트업
   - data-target 속성이 있으면 그 값을, 없으면 현재 텍스트를 파싱하여 목표값으로 사용
   - 접미사(%/분/팀 등)와 쉼표 표기 유지
*/
function useCountUpInView(containerRef, { duration = 1200, once = true } = {}) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const $nums = Array.from(root.querySelectorAll('[data-kpi="count"]'));
    if ($nums.length === 0) return;

    // 이미 실행했는지 플래그
    let played = false;

    // 텍스트에서 숫자/접미사를 분리
    const parseText = (txt) => {
      const trimmed = String(txt).trim();
      const numPart = trimmed.replace(/[^\d.]/g, ""); // 숫자/소수점만
      const suffix = trimmed.replace(/[\d.,\s]/g, ""); // 나머지(%, 분, 팀 등)
      const target = Number(numPart || 0);
      return { target, suffix };
    };

    // 포매팅: 천단위 콤마 + 소수 없음(필요시 확장 가능)
    const fmt = (n) => Math.round(n).toLocaleString();

    const animate = () => {
      const startTime = performance.now();

      const metas = $nums.map((el) => {
        const attrTarget = Number(el.getAttribute("data-target"));
        const { target: parsed, suffix } = parseText(el.textContent);
        const target = Number.isFinite(attrTarget) ? attrTarget : parsed;
        return { el, target, suffix, done: false };
      });

      // 모션 축소 선호 → 즉시 목표값 표시
      if (prefersReduced) {
        metas.forEach(({ el, target, suffix }) => {
          el.textContent = `${fmt(target)}${suffix || ""}`;
        });
        return;
      }

      const raf = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        // 이징: easeOutCubic
        const ease = 1 - Math.pow(1 - t, 3);

        metas.forEach((m) => {
          if (m.done) return;
          const val = m.target * ease;
          if (t >= 1) {
            m.el.textContent = `${fmt(m.target)}${m.suffix || ""}`;
            m.done = true;
          } else {
            m.el.textContent = `${fmt(val)}${m.suffix || ""}`;
          }
        });

        if (metas.some((m) => !m.done)) {
          requestAnimationFrame(raf);
        }
      };

      requestAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (once && played) return;
          played = true;
          animate();
        });
      },
      { threshold: 0.3 }
    );

    // StickyLeft가 뷰에 들어오면 실행
    io.observe(root);

    return () => io.disconnect();
  }, [containerRef, duration, once]);
}

/* ================= Component ================= */
const CleanWhySection_Pro_v2 = () => {
  // 히어로 틸트
  const tiltRef = useRef(null);
  useMouseTiltRef(tiltRef, 8);

  // 이유 카드
  const reasonsRef = useRef(null);
  useIOTranslateUp(reasonsRef);

  // KPI 카운트업 (StickyLeft 기준)
  const kpiContainerRef = useRef(null);
  useCountUpInView(kpiContainerRef, { duration: 1200, once: true });

  const reasons = useMemo(
    () => [
      {
        t: "시간과 체력의 확실한 절약",
        d: "전문 장비 + 팀 운영으로 작업 시간을 단축하고, 사용자는 일상에 집중합니다.",
        img: reasonImg1,
      },
      {
        t: "눈에 보이는 결과, 맡길수록 깔끔",
        d: "생활 얼룩·먼지·물때·곰팡이까지 맞춤 솔루션으로 마무리합니다.",
        img: reasonImg2,
      },
      {
        t: "안전한 약제와 표면별 관리",
        d: "재질 손상을 막기 위한 농도·도포·헹굼 프로토콜을 준수합니다.",
        img: reasonImg3,
      },
      {
        t: "사후 케어 가이드 제공",
        d: "관리 체크리스트와 주기 안내로 깨끗함을 더 오래 유지하세요.",
        img: reasonImg4,
      },
    ],
    []
  );

  return (
    <Section>
      {/* HERO */}
      <Hero>
        <HeroLeft>
          <Eyebrow>백앤클린</Eyebrow>
          <Headline>
            하얗게, 완벽하게.
            <br />
            전문가의 청소는 다릅니다.
          </Headline>
          <Subline>
            입주 · 거주 · 이사 · 상가 · 준공 · 특수청소까지 <b>한 번에</b>.
            바쁘다면, 맡기면 됩니다.
          </Subline>
          <CTAGroup>
            <CTA href="#reserve">청소 예약하기</CTA>
            <GhostCTA href="#consult">무료 상담</GhostCTA>
          </CTAGroup>
        </HeroLeft>

        <HeroRight>
          <TiltCard ref={tiltRef} />
        </HeroRight>
      </Hero>

      <StickyWrap>
        <StickyLeft ref={kpiContainerRef}>
          <StickyTitle>왜, 업체에 맡겨야 할까요?</StickyTitle>
          <StickyDesc>
            “빨라야 잘한 청소”가 아닙니다. 표면과 오염의 종류, 순서와 도구,
            건조와 마감까지 <b>체계</b>가 결과를 바꿉니다.
          </StickyDesc>

          {/* ✅ KPI: 뷰 진입 시 카운트업 */}
          <KPIWrap>
            <KPI>
              <KPINum data-kpi="count" data-target="1270">
                1,200+
              </KPINum>
              <KPILabel>누적 현장</KPILabel>
            </KPI>
            <KPI>
              <KPINum data-kpi="count" data-target="98">
                98%
              </KPINum>
              <KPILabel>재의뢰율</KPILabel>
            </KPI>
            <KPI>
              <KPINum data-kpi="count" data-target="72">
                72분
              </KPINum>
              <KPILabel>평균 소요 (주요 구역)</KPILabel>
            </KPI>
            <KPI>
              <KPINum data-kpi="count" data-target="4">
                4팀
              </KPINum>
              <KPILabel>전담 운영</KPILabel>
            </KPI>
          </KPIWrap>
        </StickyLeft>

        {/* Sticky 우측: 이유 카드 */}
        <ReasonsGrid ref={reasonsRef}>
          {reasons.map((r, i) => (
            <ReasonCard key={i} data-reason>
              <ReasonImage src={r.img} alt={r.t} loading="lazy" />
              <ReasonText>
                <ReasonTitle>{r.t}</ReasonTitle>
                <ReasonDesc>{r.d}</ReasonDesc>
              </ReasonText>
            </ReasonCard>
          ))}
        </ReasonsGrid>
      </StickyWrap>

      <HookSection>
        <HookText>백앤클린이 만든 변화를 직접 보세요</HookText>
        <HookSub>깨끗하게 청소된 실제 공간 사진들입니다</HookSub>
      </HookSection>

      {/* GALLERY 캐러셀 */}
      <GalleryCarousel />

      {/* GALLERY 아래 후킹 문구 */}
      <HookSection>
        <HookText>당신의 공간도 이렇게 달라질 수 있습니다</HookText>
        <HookSub>지금 바로 백앤클린과 함께 깨끗한 일상을 시작하세요</HookSub>
      </HookSection>
    </Section>
  );
};

export default CleanWhySection_Pro_v2;
