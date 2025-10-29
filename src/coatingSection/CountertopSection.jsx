import styled from "styled-components";
import countertopImg from "../images/ex1-1.jpg";

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

const Slice = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;

  @media (min-width: 960px) {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 36px;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 14px;
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

const FeatureGrid = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 6px;
`;

const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: 8px 1fr;
  gap: 10px;
  align-items: flex-start;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: ${({ theme }) => theme?.accent || "#0c0c0c"};
    margin-top: 3px;
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

const Media = styled.figure`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: ${({ theme }) => theme?.card || "#f5f6f7"};
  border: 1px solid ${({ theme }) => theme?.border || "rgba(0,0,0,0.08)"};
  aspect-ratio: 16/10;

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

const CoatingSlice = ({ eyebrow, title, desc, features, imgSrc, imgAlt }) => {
  return (
    <Slice>
      <Content>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}

        {features?.length > 0 && (
          <FeatureGrid>
            {features.map((f, i) => (
              <FeatureItem key={i}>
                <span>
                  {f.highlight ? <em>{f.highlight}</em> : null}
                  {f.text ? `: ${f.text}` : null}
                  {!f.highlight && !f.text ? f : null}
                </span>
              </FeatureItem>
            ))}
          </FeatureGrid>
        )}
      </Content>

      <Media aria-hidden="true">
        <img src={imgSrc} alt={imgAlt} />
      </Media>
    </Slice>
  );
};

const CountertopSection = () => {
  const features = [
    { highlight: "오염 방지", text: "음식물·기름때 스며듦 억제" },
    { highlight: "위생 관리", text: "세균·곰팡이 번식 저감" },
    { highlight: "스크래치 방어", text: "생활 스크래치·충격 보호" },
    { highlight: "내구성 강화", text: "장기 관리 비용 절감" },
  ];

  return (
    <Section aria-labelledby="countertop-heading">
      <Wrap>
        <CoatingSlice
          eyebrow="Countertop Coating"
          title="상판 코팅"
          desc="습기·열·음식물 오염에 상시 노출되는 상판을 전문 코팅으로 보호해, 위생과 내구성을 동시에 확보합니다."
          features={features}
          imgSrc={countertopImg}
          imgAlt="상판 코팅 예시 이미지"
        />
      </Wrap>
    </Section>
  );
};

export default CountertopSection;
