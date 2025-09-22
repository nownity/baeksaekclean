import styled from "styled-components";
import main1 from "../images/main1.jpg";
import ContactBtn from "../components/ContactBtn";
import useScrollFadeIn from "../hooks/useScrollFadIn";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${main1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(0, 0, 0, 0.4)" : "transparent"};
  transition: all 0.3s ease-in-out;
  z-index: 0;
`;

const TextSection = styled.section`
  width: 70%;
  height: 50%;
  padding-bottom: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    height: 40%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  margin-bottom: 20px;
  font-weight: 400;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const WhiteText = styled.span`
  color: ${({ theme }) => theme.textWhite};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const SubTitle = styled.h1`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSub};
  transition: color 0.3s ease-in-out;
  padding-left: 20px;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 15px;
    padding-left: 10px;
  }
`;

const BtnSection = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const HeroSection = ({ sectionRefs }) => {
  const navigate = useNavigate();
  const goDetail = () => navigate("/contact");

  const fadeInTitle = useScrollFadeIn("up", 1, 0);
  const fadeInSubTitle = useScrollFadeIn("up", 1, 0.8);
  const fadeInBtn = useScrollFadeIn("up", 1, 1.5);

  return (
    <Section>
      <Overlay />
      <TextSection>
        <Title {...fadeInTitle}>
          <WhiteText>하얗고</WhiteText> 완벽한 청소
        </Title>
        <SubTitle {...fadeInSubTitle}>믿을 수 있는 청소 전문가들이</SubTitle>
        <SubTitle {...fadeInSubTitle}>
          당신의 공간을 새하얗게 바꿔드립니다.
        </SubTitle>
      </TextSection>
      <BtnSection {...fadeInBtn}>
        <ContactBtn onClick={goDetail}>간편하게 신청하기</ContactBtn>
      </BtnSection>
    </Section>
  );
};

export default HeroSection;
