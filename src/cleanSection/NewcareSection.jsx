import styled from "styled-components";
import img1 from "../images/new1.JPEG";
import img2 from "../images/new2.JPEG";
import img3 from "../images/new3.JPEG";

const BG = "#ffffff";
const TEXT = "#0c0c0c";
const SUB = "#4a4a4a";
const ACCENT = "#797979";
const LINE = "#ececec";

const Section = styled.section`
  width: 100%;
  background: radial-gradient(1200px 300px at 50% -50%, #f6f8ff, ${BG});
  padding: 120px 24px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Eyebrow = styled.p`
  text-align: center;
  color: ${ACCENT};
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 50px;
`;

const Title = styled.h2`
  text-align: center;
  color: ${TEXT};
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #fff;
  border: 1px solid ${LINE};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08), 0 4px 14px rgba(0, 0, 0, 0.05);
  }
`;

const ThumbWrap = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 0.6s ease;
  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const Body = styled.div`
  padding: 18px 20px 22px;
`;

const CardTitle = styled.h3`
  color: ${TEXT};
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.01em;
  margin: 0 0 10px;
`;

const Excerpt = styled.p`
  color: ${SUB};
  line-height: 1.7;
  margin: 0;
  word-break: keep-all;
`;

const items = [
  {
    date: "2024-09-17",
    title: "포름알데히드 및 VOC 저감 케어",
    desc: "신축 현장에서 발생하는 포름알데히드와 휘발성 유기화합물(VOC)을 집중 관리해 새집증후군 위험을 낮춥니다.",
    img: img1,
  },
  {
    date: "2024-09-13",
    title: "피부·호흡기 질환 사전 예방",
    desc: "유해물질로 인한 피부 트러블, 비염과 천식, 피로감 유발 요인을 차단하여 건강한 입주 환경을 만듭니다.",
    img: img2,
  },
  {
    date: "2024-09-13",
    title: "백앤클린 프리미엄 새집케어",
    desc: "전문 장비와 절차로 실내 공기질을 개선하고, 오염원 재발을 최소화하는 프리미엄 새집케어 서비스를 제공합니다.",
    img: img3,
  },
];

const NewcareSection = () => {
  return (
    <Section>
      <Inner>
        <Title>새집케어 서비스</Title>
        <Eyebrow>New Home Care</Eyebrow>

        <Grid>
          {items.map((it, i) => (
            <Card key={i}>
              <ThumbWrap>
                <Thumb src={it.img} alt={it.title} />
              </ThumbWrap>
              <Body>
                <CardTitle>{it.title}</CardTitle>
                <Excerpt>{it.desc}</Excerpt>
              </Body>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default NewcareSection;
