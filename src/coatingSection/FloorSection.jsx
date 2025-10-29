// CountertopSectionRight.jsx
import styled from "styled-components";
import countertopImg from "../images/ex1-1.jpg";

/* ===================== styled-components ===================== */
const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme?.background || "#fff"};
  color: ${({ theme }) => theme?.text || "#111"};
  word-break: keep-all;
`;

const Wrap = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 56px 20px;

  @media (min-width: 768px) {
    padding: 72px 24px;
  }
`;

const SliceR = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  grid-template-areas:
    "content"
    "media";

  @media (min-width: 960px) {
    grid-template-columns: 0.95fr 1.05fr;
    gap: 36px;
    grid-template-areas: "media content";
  }
`;

const ContentR = styled.div`
  display: grid;
  gap: 14px;
  text-align: right;
  grid-area: content;
`;

const MediaL = styled.figure`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: ${({ theme }) => theme?.card || "#f5f6f7"};
  border: 1px solid ${({ theme }) => theme?.border || "rgba(0,0,0,0.08)"};
  aspect-ratio: 16/10;
  grid-area: media;

  @media (min-width: 960px) {
    aspect-ratio: 4/3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
  color: ${({ theme }) => theme?.accent || "#0c0c0c"};
`;

const Title = styled.h3`
  font-size: clamp(22px, 3.4vw, 36px);
  line-height: 1.2;
  font-weight: 900;
`;

const Desc = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 1.75;
  color: ${({ theme }) => theme?.mutedText || "rgba(17,17,17,0.8)"};
`;

const FeatureGridR = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 6px;
  justify-items: end;
`;

const FeatureItemR = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  text-align: right;

  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: ${({ theme }) => theme?.accent || "#0c0c0c"};
    margin-top: 3px;
    flex: 0 0 4px;
  }

  span {
    font-size: 14px;
    line-height: 1.65;
    color: ${({ theme }) => theme?.text || "#111"};

    em {
      font-style: normal;
      font-weight: 800;
    }
  }
`;

const CoatingSliceRight = ({
  eyebrow,
  title,
  desc,
  features,
  imgSrc,
  imgAlt,
}) => {
  return (
    <SliceR>
      <MediaL aria-hidden="true">
        <img src={imgSrc} alt={imgAlt} />
      </MediaL>

      <ContentR>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}

        {features?.length > 0 && (
          <FeatureGridR>
            {features.map((f, i) => (
              <FeatureItemR key={i}>
                <span>
                  {f.highlight ? <em>{f.highlight}</em> : null}
                  {f.text ? `: ${f.text}` : null}
                  {!f.highlight && !f.text ? f : null}
                </span>
              </FeatureItemR>
            ))}
          </FeatureGridR>
        )}
      </ContentR>
    </SliceR>
  );
};

const CountertopSectionRight = () => {
  const features = [
    { highlight: "복원", text: "자외선 변색·스크래치·노후화 개선" },
    { highlight: "박리 후 재시공", text: "기존 왁스 제거로 새 마루처럼 복원" },
    { highlight: "불필요한 교체 방지", text: "왁스 성분만 제거해 비용 절감" },
    { highlight: "주의", text: "수세미 문지름은 표면 손상 — 광택기 이용" },
    { highlight: "클리닝", text: "습식청소기로 잔여물 제거" },
  ];

  return (
    <Section aria-labelledby="countertop-right-heading">
      <Wrap>
        <CoatingSliceRight
          eyebrow="Countertop Coating"
          title="마루 · 왁스 코팅"
          desc="이사 또는 입주 시 바닥 얼룩, 스크래치, 자외선 변색 등으로 보기
              싫은 경우가 많습니다. 박리 후 재코팅을 통해 새 마루처럼 복원할 수
              있습니다."
          features={features}
          imgSrc={countertopImg}
          imgAlt="상판 코팅 예시 이미지"
        />
      </Wrap>
    </Section>
  );
};

export default CountertopSectionRight;
