import styled from "styled-components";
import hero1 from "../images/coating4.png";
import hero2 from "../images/coating5.png";
import hero3 from "../images/coating6.png";
import img1 from "../images/ex1-1.jpg";
import img2 from "../images/ex1-2.jpg";
import img3 from "../images/ex1-3.jpg";
import img4 from "../images/ex2-1.jpg";
import img5 from "../images/ex2-2.jpg";
import img6 from "../images/ex2-3.jpg";

/* =========================
   Styled Components
   ========================= */

/* 섹션 래퍼 */
const Section = styled.section`
  width: 100%;
  background: #ffffff;
  color: #0c0c0c;
  word-break: keep-all;
`;

/* 0) 상단 질문형 헤드 — 프리미엄 톤 + 밸런스 래핑 */
const Head = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 112px 24px 40px;

  @media (max-width: 768px) {
    padding: 92px 20px 28px;
  }
`;

const Eyebrow = styled.div`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.2px;
  background: #0c0c0c;
  color: #fff;
  margin-bottom: 12px;
`;

const QTitle = styled.h1`
  font-size: 52px;
  font-weight: 900;
  letter-spacing: -0.6px;
  line-height: 1.18;
  word-break: keep-all;

  strong {
    position: relative;
    white-space: nowrap; /* 단어 쪼개짐 방지 */
    background: linear-gradient(transparent 60%, #fff1a8 60%);
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 1.25;
  }
`;

const QLead = styled.p`
  margin-top: 14px;
  max-width: 820px;
  font-size: 17px;
  color: #333;
  line-height: 1.9;
  opacity: 0.95;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const USPRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const USP = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  background: #f5f5f5;
  border: 1px solid #ededed;
`;

/* 1) 후킹 — 세로 지그재그(좌/우/좌), 사진 속 반투명 오버레이 */
const HookWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px 72px;

  @media (max-width: 768px) {
    padding: 8px 20px 56px;
  }
`;

const HookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HookItem = styled.article`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 6; /* 가로가 긴 직사각형 */
  border-radius: 20px;
  overflow: hidden;
  background: #000; /* 로딩 깜빡임 대비 */
  display: flex;
  justify-content: ${(p) => (p.align === "right" ? "flex-start" : "flex-end")};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4 / 3;
    justify-content: center;
  }
`;

const HookImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
`;

const HookOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 48%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 32px;
  text-align: ${(p) => (p.align === "right" ? "left" : "right")};

  /* 사진 비치는 어두운 글라스 오버레이 */
  background: linear-gradient(
    ${(p) => (p.align === "right" ? "90deg" : "270deg")},
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0.65) 100%
  );
  backdrop-filter: blur(1.2px);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 24px 18px;
    text-align: left;
    justify-content: flex-end;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const HookNo = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 3;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.45);
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 900;
  font-size: 14px;
`;

const HookTitle = styled.h3`
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 10px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HookText = styled.p`
  font-size: 15px;
  line-height: 1.9;
  opacity: 0.92;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

/* 2) 적용 가능한 표면/공간 — 유지 */
const SurfaceWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 24px 80px;

  @media (max-width: 768px) {
    padding: 8px 20px 64px;
  }
`;

const SurfaceHead = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

const SurfaceTitle = styled.h3`
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.2px;
`;

const SurfaceDesc = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #555;
  line-height: 1.8;
`;

const SurfaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SurfaceCard = styled.article`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f7f7f7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 16px 16px 18px;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.8;
`;

/* 3) 실무 콤팩트 바 — 유지 */
const TechBar = styled.section`
  width: 100%;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  background: #fafafa;
`;

const TechInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const TechCol = styled.div`
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 14px;
  padding: 14px 14px;
`;

const ColTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 8px;

  &::before {
    content: "●";
    font-size: 10px;
  }
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  border: 1px solid #e4e4e4;
  background: #fbfbfb;
  color: #222;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
`;

const Note = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  line-height: 1.6;
`;

/* 4) 보증/AS 배너 — 화이트 배경, 버튼 중앙 */
const TrustBanner = styled.section`
  width: 100%;
  background: #ffffff;
  color: #0c0c0c;
  border-top: 1px solid #efefef;
`;

const TrustInner = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 24px 54px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 34px 20px 46px;
  }
`;

const TrustTitle = styled.h4`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.2px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TrustText = styled.p`
  font-size: 15px;
  line-height: 1.8;
  max-width: 720px;
  margin: 10px auto 18px;
  opacity: 0.95;
`;

const CTAWrap = styled.div`
  display: inline-flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 148px;
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease, background 0.15s ease,
    color 0.15s ease;
  border: 1px solid transparent;

  &.primary {
    background: #0c0c0c;
    color: #ffffff;
    &:hover {
      transform: translateY(-1px);
    }
  }

  &.ghost {
    background: transparent;
    color: #0c0c0c;
    border-color: #d8d8d8;
    &:hover {
      transform: translateY(-1px);
      border-color: #bdbdbd;
    }
  }
`;
const images = [img1, img2, img3, img4, img5, img6];

/* =========================
   React Component
   ========================= */
const CountertopSection = () => {
  const surfaces = [
    { t: "주방 상판", d: "기름자국/착색 방지, 손쉬운 닦임" },
    { t: "욕실(욕조/타일)", d: "물때·비누찌꺼기 감소, 관리 편의" },
    { t: "포세린 타일", d: "오염 침투 차단, 결·광택 보호" },
    { t: "원목/강화마루", d: "생활 스크래치·변색 예방" },
    { t: "거울/유리", d: "지문·물자국 감소, 선명한 표면" },
    { t: "전자제품 외관", d: "먼지·지문 덜 타고 닦임성 개선" },
  ];

  return (
    <Section>
      {/* 0) 질문형 헤드 */}
      <Head>
        <Eyebrow>표면 코팅, 지금 필요한가요?</Eyebrow>
        <QTitle>
          왜 <strong>코팅</strong>을 해야 할까요?
        </QTitle>
        <QLead>
          코팅은 표면에 얇은 보호막을 만들어 오염의 ‘스며듦’을 차단합니다.
          물·기름 등 이물질이 쉽게 닦여 나가고, 주방·욕실처럼 오염이 잦은
          공간에서는 관리 난이도와 시간이 확 줄어듭니다.
        </QLead>
        <USPRow>
          <USP>침투 차단</USP>
          <USP>닦임성 개선</USP>
          <USP>스크래치 예방</USP>
          <USP>광택/결 유지</USP>
        </USPRow>
      </Head>

      {/* 1) 후킹 — 세로 지그재그(좌/우/좌) */}
      <HookWrap>
        <HookList>
          <HookItem
            align="left"
            style={{ width: "82%", marginLeft: 0 }}
            aria-label="핵심 포인트 1"
          >
            <HookImage src={hero1} alt="코팅 이미지 1" />
            <HookNo>1</HookNo>
            <HookOverlay align="left">
              <div>
                <HookTitle>닦아도 남는 얼룩의 원인</HookTitle>
                <HookText>
                  표면 아래로 스며든 오염은 반복 청소로도 지우기 어렵습니다.
                  코팅으로 침투 자체를 막으면 얼룩이 훨씬 쉽게 제거됩니다.
                </HookText>
              </div>
            </HookOverlay>
          </HookItem>
          <HookItem
            align="left"
            style={{ width: "82%", marginLeft: "auto" }}
            aria-label="핵심 포인트 2"
          >
            <HookImage src={hero2} alt="코팅 이미지 2" />
            <HookNo>2</HookNo>
            <HookOverlay align="left">
              <div>
                <HookTitle>주방·욕실 관리 피로 줄이기</HookTitle>
                <HookText>
                  물때·기름때가 쌓이는 동선일수록 닦임성이 중요합니다. 코팅 후엔
                  청소 주기와 시간이 눈에 띄게 줄어듭니다.
                </HookText>
              </div>
            </HookOverlay>
          </HookItem>
          <HookItem
            align="left"
            style={{ width: "82%", marginLeft: 0 }}
            aria-label="핵심 포인트 3"
          >
            <HookImage src={hero3} alt="코팅 이미지 3" />
            <HookNo>3</HookNo>
            <HookOverlay align="left">
              <div>
                <HookTitle>마감 보호 & 수명 연장</HookTitle>
                <HookText>
                  생활 스크래치·변색을 사전에 예방해 외관을 오래 유지합니다.
                  소재 본연의 결과 광택 역시 지켜냅니다.
                </HookText>
              </div>
            </HookOverlay>
          </HookItem>
        </HookList>
      </HookWrap>

      {/* 2) 적용 가능한 표면/공간 – 유지 */}
      <SurfaceWrap>
        <SurfaceHead>
          <SurfaceTitle>적용 가능한 공간과 소재</SurfaceTitle>
          <SurfaceDesc>
            싱크대·주방 상판·욕실(욕조/타일)·포세린
            타일·원목/강화마루·거울·전자제품 외관 등 다양한 표면에 사용
            가능합니다.
          </SurfaceDesc>
        </SurfaceHead>

        <SurfaceGrid>
          {surfaces.map((v, i) => (
            <SurfaceCard key={i}>
              <CardImage>
                <img
                  src={images[i % images.length]}
                  alt={`${v.t} 코팅 예시 이미지`}
                />
              </CardImage>
              <CardBody>
                <CardTitle>{v.t}</CardTitle>
                <CardText>{v.d}</CardText>
              </CardBody>
            </SurfaceCard>
          ))}
        </SurfaceGrid>
      </SurfaceWrap>

      {/* 3) 실무 콤팩트 바 — 유지 */}
      <TechBar>
        <TechInner>
          <TechCol>
            <ColTitle>토출 방식</ColTitle>
            <ChipWrap>
              <Chip>스포이드형</Chip>
              <Chip>스프레이형</Chip>
            </ChipWrap>
            <Note>면적·형상·난이도에 맞춰 선택합니다.</Note>
          </TechCol>

          <TechCol>
            <ColTitle>도포 방식</ColTitle>
            <ChipWrap>
              <Chip>사각블럭형(평면)</Chip>
              <Chip>타월형(곡면/혼합)</Chip>
            </ChipWrap>
            <Note>흡수율·표면결·동선 기준으로 공정 설계.</Note>
          </TechCol>

          <TechCol>
            <ColTitle>경화 방식</ColTitle>
            <ChipWrap>
              <Chip>경화 필요(시간·온습도 관리)</Chip>
              <Chip>경화 불필요</Chip>
            </ChipWrap>
            <Note>품질 좌우 포인트: 온도·습도·시간 표준화.</Note>
          </TechCol>
        </TechInner>
      </TechBar>

      {/* 4) 보증/AS 배너 — 화이트 + 버튼 중앙 */}
      <TrustBanner>
        <TrustInner>
          <TrustTitle>
            우리 집 표면, 지금 상태가 어떤지 궁금하신가요?
          </TrustTitle>
          <TrustText>
            코팅은 제품만이 아니라 <strong>표준 공정</strong>과{" "}
            <strong>환경 관리</strong>가 결과를 좌우합니다.
            <br />
            <strong>편안함 중심의 사용성</strong>, <strong>보증기간·A/S</strong>
            , 그리고 <strong>시공결과 편차·경화기간</strong>까지 비교하고 맞춤
            상담을 받아보세요.
          </TrustText>

          <CTAWrap>
            <CTA href="/contact" className="primary">
              맞춤 상담 받기
            </CTA>
            <CTA href="tel:010-9508-6626" className="ghost">
              지금 바로 연결
            </CTA>
          </CTAWrap>
        </TrustInner>
      </TrustBanner>
    </Section>
  );
};

export default CountertopSection;
