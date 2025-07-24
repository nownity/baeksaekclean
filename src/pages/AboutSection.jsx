import styled from "styled-components";
import main from "../images/main3.JPEG";
import useScrollFadeIn from "../hooks/useScrollFadIn";

const Section = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1600px) {
    height: 820px;
  }
`;

const HalfSection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 1600px) {
    width: 45%;
    min-width: 650px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

const HalfSection2 = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 1600px) {
    padding: 0;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const WhiteText = styled.span`
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  margin-top: 40px;
  padding-left: 30px;
  @media (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    padding-left: 0px;
  }
`;

const SubText = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 15px;
    padding-left: 0px;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
  gap: 50px;
  @media (max-width: 1600px) {
    justify-content: flex-start;
    gap: 30px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const LinkBtn = styled.a`
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.textWhite};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    color: #a39da8;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    height: 40px;
  }
`;

const ImageWrapper = styled.div`
  width: 550px;
  aspect-ratio: 550 / 650;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 8px;
  background-image: url(${main});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 1600px) {
    width: 500px;
  }
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

const AboutSection = () => {
  const fadeInAbout = useScrollFadeIn("up", 0.8, 0);
  const fadeInTitle = useScrollFadeIn("up", 0.8, 0.5);
  const fadeInText = useScrollFadeIn("up", 0.8, 0.5);
  const fadeInText2 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeInText3 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeInBtn = useScrollFadeIn("up", 0.8, 0.5);
  return (
    <Section>
      <HalfSection>
        <Title {...fadeInAbout}>ABOUT</Title>
        <SubTitle {...fadeInTitle}>
          <WhiteText>백색</WhiteText>클린
        </SubTitle>
        <Text {...fadeInText}>
          안녕하세요 종합 청소 전문 업체 백색클린 입니다.
        </Text>
        <SubText {...fadeInText}>
          오늘도, 청소 때문에 고민하고 계신가요?
        </SubText>
        <Text {...fadeInText2}>
          백색클린은 입주 / 거주 / 이사 / 상가 / 준공 / 특수청소까지
        </Text>
        <SubText {...fadeInText2}>모두 한 번에 해결해드립니다.</SubText>
        <Text {...fadeInText3}>믿을 수 있는 청소 전문가가</Text>
        <SubText {...fadeInText3}>당신의 공간을 새하얗게 바꿔드립니다.</SubText>
        <BtnWrapper {...fadeInBtn}>
          <LinkBtn>인스타그램</LinkBtn>
          <LinkBtn>블로그</LinkBtn>
          <LinkBtn>카카오톡</LinkBtn>
        </BtnWrapper>
      </HalfSection>
      <HalfSection2>
        <ImageWrapper>
          <Overlay />
        </ImageWrapper>
      </HalfSection2>
    </Section>
  );
};

export default AboutSection;
