// GalleryCarousel.jsx — 무한루프(Loop) + 좌우 버튼 + 반응형(5/4/3/1)
// - 중앙 세트 유지(3배 렌더)로 완전 매끄러운 루프
// - transitionend 누락 대비 세이프가드 타이머
// - ResizeObserver는 마운트 1회만: 전환 끊김 방지

import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";

/* 실제 이미지로 교체하세요 */
import g1 from "../images/ip1.JPEG";
import g2 from "../images/ip2.JPEG";
import g3 from "../images/ip3.JPEG";
import g4 from "../images/is1.JPEG";
import g5 from "../images/is2.JPEG";
import g6 from "../images/is3.JPEG";

/* ===== Styled ===== */
const GalleryWrap = styled.div`
  width: 100%;
  padding: 40px 0 90px;
  background: #fff;
  position: relative;
  @media (max-width: 680px) {
    padding: 40px 20px 90px;
  }
`;

const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: 12px;
  will-change: transform;
  transition: transform 0.45s ease;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: calc((100% - 12px * 4) / 5); /* 기본 5장 */
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: calc((100% - 12px * 3) / 4);
  }
  @media (max-width: 980px) {
    width: calc((100% - 12px * 2) / 3);
  }
  @media (max-width: 680px) {
    width: 100%; /* 모바일 1장 */
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  box-shadow: none;
  user-select: none;

  /* 모바일에서 높이 확보 */
  min-height: 220px;
  @media (max-width: 768px) {
    min-height: 280px;
  }
  @media (max-width: 480px) {
    min-height: 320px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.92);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #fff;
  }

  ${({ $left }) => ($left ? `left: 16px;` : `right: 16px;`)}

  @media (max-width: 680px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
    ${({ $left }) => ($left ? `left: 8px;` : `right: 8px;`)}
  }
`;

/* ===== Component ===== */
const GalleryCarousel = () => {
  const baseImages = useMemo(() => [g1, g2, g3, g4, g5, g6], []);
  const tripleImages = useMemo(
    () => [...baseImages, ...baseImages, ...baseImages],
    [baseImages]
  );

  const trackRef = useRef(null);
  const firstSlideRef = useRef(null);

  const MIDDLE_START = baseImages.length;
  const MIDDLE_END = baseImages.length * 2 - 1;

  const [index, setIndex] = useState(MIDDLE_START);
  const [useTransition, setUseTransition] = useState(true);
  const [canTransit, setCanTransit] = useState(true);

  const TRANSITION_MS = 450; // Track CSS와 동일
  const stepRef = useRef(0);
  const guardTimerRef = useRef(null);

  const clearGuard = () => {
    if (guardTimerRef.current) {
      clearTimeout(guardTimerRef.current);
      guardTimerRef.current = null;
    }
  };

  const getGap = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const cs = getComputedStyle(track);
    const gap = parseFloat(cs.gap || "0");
    return Number.isFinite(gap) ? gap : 0;
  };

  const measureStep = () => {
    if (!trackRef.current || !firstSlideRef.current) return 0;
    const rect = firstSlideRef.current.getBoundingClientRect();
    return rect.width + getGap();
  };

  const applyTransform = (instant = false) => {
    if (!trackRef.current) return;
    const x = -index * stepRef.current;

    if (instant) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      // 강제 리플로우
      // eslint-disable-next-line no-unused-expressions
      trackRef.current.offsetHeight;
      trackRef.current.style.transition = useTransition
        ? "transform 0.45s ease"
        : "none";
    } else {
      trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }
  };

  // 마운트 시 1회만: step 계산 + 리사이즈 대응(전환 끊김 방지)
  useEffect(() => {
    const update = () => {
      const newStep = measureStep();
      if (Math.abs(newStep - stepRef.current) > 0.5) {
        stepRef.current = newStep;
        // 전환 중에는 위치를 강제로 재적용하지 않음
        if (!useTransition) {
          applyTransform(true);
        } else if (canTransit) {
          // 전환 중이 아니면 즉시 보정
          const prevUseTrans = useTransition;
          setUseTransition(false);
          requestAnimationFrame(() => {
            applyTransform(true);
            requestAnimationFrame(() => setUseTransition(prevUseTrans));
          });
        }
      }
    };

    // 초기 계산
    stepRef.current = measureStep();
    applyTransform(true);

    // 리사이즈 옵저버
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      clearGuard();
    };
    // 의도적으로 의존성 없음(마운트 1회)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // index 변경 시 이동
  useEffect(() => {
    applyTransform(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // 전환 종료 처리 + 경계 점프
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onEnd = () => {
      clearGuard();
      setCanTransit(true);

      if (index > MIDDLE_END) {
        setUseTransition(false);
        setIndex((prev) => prev - baseImages.length);
        requestAnimationFrame(() => {
          applyTransform(true);
          requestAnimationFrame(() => setUseTransition(true));
        });
      } else if (index < MIDDLE_START) {
        setUseTransition(false);
        setIndex((prev) => prev + baseImages.length);
        requestAnimationFrame(() => {
          applyTransform(true);
          requestAnimationFrame(() => setUseTransition(true));
        });
      }
    };

    track.addEventListener("transitionend", onEnd);
    // 일부 브라우저 보호: transitioncancel(지원 제한) 대신 타이머 가드
    return () => {
      track.removeEventListener("transitionend", onEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, baseImages.length]);

  const armGuard = () => {
    clearGuard();
    guardTimerRef.current = setTimeout(() => {
      // fallback: 전환이 취소/누락되어도 잠금 해제
      setCanTransit(true);
    }, TRANSITION_MS + 120);
  };

  const handlePrev = () => {
    if (!canTransit) return;
    setCanTransit(false);
    setIndex((i) => i - 1);
    armGuard();
  };

  const handleNext = () => {
    if (!canTransit) return;
    setCanTransit(false);
    setIndex((i) => i + 1);
    armGuard();
  };

  return (
    <GalleryWrap>
      <Carousel>
        <Track
          ref={trackRef}
          style={{ transition: useTransition ? undefined : "none" }}
        >
          {tripleImages.map((src, i) => (
            <Slide key={i} data-slide={i}>
              <SlideImg
                ref={i === 0 ? firstSlideRef : undefined}
                src={src}
                alt={`gallery-${i}`}
                loading="lazy"
                draggable={false}
              />
            </Slide>
          ))}
        </Track>

        <ArrowButton $left onClick={handlePrev} aria-label="이전">
          ◀
        </ArrowButton>
        <ArrowButton onClick={handleNext} aria-label="다음">
          ▶
        </ArrowButton>
      </Carousel>
    </GalleryWrap>
  );
};

export default GalleryCarousel;
