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
            영업 중이거나 새로 오픈한 매장의 번거로운 청소,
            <br />
            백앤클린이 대신 깔끔하게 해결합니다.
            <br />
            <br />
            사무실, 카페, 상가 등 주기적인 방문 청소로
            <br />
            먼지와 오염을 관리해 쾌적한 환경을 유지하세요.
          </DesTextR>
        </DescriptionBox>
      </ExWrapper>
    </Section>
  );
};

export default OfficeSection;
