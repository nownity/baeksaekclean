import styled from "styled-components";
import main1 from "../images/main1.jpg";
import ContactBtn from "../components/ContactBtn";

const Section = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out; */
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
  width: 80%;
  height: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const WhiteText = styled.span`
  color: ${({ theme }) => theme.textWhite};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const SubTitle = styled.h1`
  font-size: 1rem;
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
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Overlay />
      <TextSection>
        <Title>
          청소는 역시 <WhiteText>백색</WhiteText>클린
        </Title>
        <SubTitle>믿을 수 있는 청소 전문가들이</SubTitle>
        <SubTitle>당신의 공간을 새하얗게 바꿔드립니다.</SubTitle>
      </TextSection>
      <BtnSection>
        <ContactBtn onClick={() => scrollToSection("contact")}>
          간편하게 신청하기
        </ContactBtn>
      </BtnSection>
    </Section>
  );
};

export default HeroSection;
