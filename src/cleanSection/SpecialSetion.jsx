import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import ex21 from "../images/ex2-1.jpg";
import ex22 from "../images/ex2-2.jpg";
import ex23 from "../images/ex2-3.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const SliderWrapper = styled.div`
  @media (max-width: 1200px) {
    order: 1;
    flex: 1;
  }
`;

const DesTitleR = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
  text-align: right;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DesTextR = styled.div`
  font-size: 20px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  text-align: right;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SpecialSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          특수 <GrayText>청소</GrayText>
        </Title>
        <SubTitle>Specialized Cleaning Service</SubTitle>
      </TitleWrapper>
      <ExWrapper>
        <SliderWrapper>
          <ImageSlider images={[ex21, ex22, ex23]} />
        </SliderWrapper>
        <DescriptionBox>
          <DesTitleR>보이지 않는 위험까지, 안전하게</DesTitleR>
          <DesTextR>
            고독사, 화재, 오염된 공간 등
            <br />
            일반 청소로는 해결할 수 없는 특수
            <br />
            상황에 대응하는 전문 청소입니다.
            <br />
            <br />
            방역, 소독, 폐기물 처리 등
            <br />
            법적 절차와 안전 기준을 준수하여
            <br /> 철저하고 정중하게 작업을 진행합니다.
          </DesTextR>
        </DescriptionBox>
      </ExWrapper>
    </Section>
  );
};

export default SpecialSection;
