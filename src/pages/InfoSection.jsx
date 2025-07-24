import styled from "styled-components";
import UserSlider from "../components/UserSlider";
import ip1 from "../images/ip1.JPEG";
import ip2 from "../images/ip2.JPEG";
import ip3 from "../images/ip3.JPEG";
import is1 from "../images/is1.JPEG";
import is2 from "../images/is2.JPEG";
import is3 from "../images/is3.JPEG";
import useScrollFadeIn from "../hooks/useScrollFadIn";

const Section = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    #cccccc 0%,
    #cccccc 50%,
    white 50%,
    white 100%
  );
  transition: background-color 0.3s ease-in-out;
  flex-direction: column;
  @media (max-width: 1600px) {
    height: 500px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 150px;
    justify-content: center;
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
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoSection = () => {
  const fadeInTitle = useScrollFadeIn("up", 0.8, 0);
  const fadeInSubTitle = useScrollFadeIn("up", 0.8, 0.3);
  const fadeInBtn = useScrollFadeIn("up", 0.8, 0.5);

  const reviews = [
    {
      image: ip1,
      name: "김모씨",
      review: "이사할때 청소 처음 맡기는데 너무 깨끗해요!",
    },
    {
      image: ip2,
      name: "박모씨",
      review: "이사 청소 맡겼는데 너무 만족했어요. 감사합니다!",
    },
    {
      image: ip3,
      name: "이모씨",
      review: "힘든 부분까지 꼼꼼하게 해주셔서 감동했어요ㅎㅎ",
    },
    {
      image: is1,
      name: "최모씨",
      review: "이사전에 완전 새집처럼 변했네요ㅎ 대박",
    },
    {
      image: is2,
      name: "박모씨",
      review: "역시 직접하는거랑 다르게 진짜 깨끗하네요.",
    },
    {
      image: is3,
      name: "한모씨",
      review: "지인이 추천해줘서 맡겨봤는데 너무 깨끗해요!",
    },
  ];
  return (
    <Section>
      <TitleWrapper>
        <SubTitle {...fadeInTitle}>customers messages</SubTitle>
        <Title {...fadeInSubTitle}>
          고객 <GrayText>후기</GrayText>
        </Title>
      </TitleWrapper>
      <ExWrapper {...fadeInBtn}>
        <UserSlider reviews={reviews} />
      </ExWrapper>
    </Section>
  );
};

export default InfoSection;
