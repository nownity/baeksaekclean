import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import ip1 from "../images/ip1.JPEG";
import ip2 from "../images/ip2.JPEG";
import ip3 from "../images/ip3.JPEG";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const GrayText = styled.span`
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ExWrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 100px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  @media (max-width: 768px) {
  }
`;

const DescriptionBox = styled.div`
  flex: 1;
  max-width: 600px;
  @media (max-width: 1200px) {
    order: 2;
    margin-top: 20px;
  }
`;

const DesTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DesText = styled.div`
  font-size: 20px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const MoveinSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          입주 · 이사 <GrayText>청소</GrayText>
        </Title>
        <SubTitle>cleaning of the house</SubTitle>
      </TitleWrapper>
      <ExWrapper>
        <DescriptionBox>
          <DesTitle>입주 전, 새집의 첫인상을 책임집니다</DesTitle>
          <DesText>
            입주 · 이사 청소는 새로 이사 들어가기 전, <br />
            혹은 지금 살고 있는 집의 먼지, 곰팡이, 기름때 등 <br />
            눈에 보이지 않는 오염까지 제거하는
            <br />
            프리미엄 서비스입니다.
            <br />
            <br />
            주방, 욕실, 창틀, 몰딩, 바닥 등 각 공간별로
            <br />
            전문가가 꼼꼼히 청소하며, 살균과 탈취까지
            <br /> 함께 진행되어 안심하고 거주하실 수 있습니다.
          </DesText>
        </DescriptionBox>
        <ImageSlider images={[ip1, ip2, ip3]} />
      </ExWrapper>
    </Section>
  );
};

export default MoveinSection;
