import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import jg1 from "../images/jg1.JPEG";
import jg2 from "../images/jg2.JPEG";
import jg3 from "../images/jg3.JPEG";

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

const PostSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title>
          준공 <GrayText>청소</GrayText>
        </Title>
        <SubTitle>Post-Construction Cleaning</SubTitle>
      </TitleWrapper>
      <ExWrapper>
        <DescriptionBox>
          <DesTitle>완공 후 마지막 터치, 청결</DesTitle>
          <DesText>
            공사 후 남은 먼지, 시멘트가루, 도장자국 등은
            <br />
            일반 청소로는 처리하기 어렵습니다.
            <br />
            <br />
            준공 청소는 공사 현장을 실제
            <br /> 사용 가능한 공간으로 바꾸는 마무리 작업입니다.
            <br />
            전문 장비와 약제를 사용해 세밀하게 마무리해드립니다.
          </DesText>
        </DescriptionBox>
        <ImageSlider images={[jg1, jg2, jg3]} />
      </ExWrapper>
    </Section>
  );
};

export default PostSection;
