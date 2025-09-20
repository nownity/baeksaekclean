import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import ex11 from "../images/ex1-1.jpg";
import ex12 from "../images/ex1-2.jpg";
import ex13 from "../images/ex1-3.jpg";

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

const OfficeSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          상가·사무실 <GrayText>청소</GrayText>
        </Title>
        <SubTitle>Commercial Space Cleaning</SubTitle>
      </TitleWrapper>
      <ExWrapper>
        <SliderWrapper>
          <ImageSlider images={[ex11, ex12, ex13]} />
        </SliderWrapper>
        <DescriptionBox>
          <DesTitleR>첫인상은 공간이 말합니다</DesTitleR>
          <DesTextR>
            매장, 사무실, 카페 등 고객과 직원이 오가는 공간은
            <br />늘 깔끔하고 쾌적해야 합니다.
            <br />
            <br />
            상가 청소는 바닥의 오염, 유리창의 지문,
            <br />
            화장실 위생까지 전반적으로 관리하여
            <br /> 고객에게 신뢰를 주는 공간으로 만들어드립니다.
          </DesTextR>
        </DescriptionBox>
      </ExWrapper>
    </Section>
  );
};

export default OfficeSection;
