import styled from "styled-components";
import UserSlider from "../components/UserSlider";
import ex11 from "../images/ex1-1.jpg";
import ex12 from "../images/ex1-2.jpg";
import ex13 from "../images/ex1-3.jpg";

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
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1600px) {
    height: 400px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
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
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  @media (max-width: 768px) {
  }
`;

const InfoSection = () => {
  const reviews = [
    {
      image: ex11,
      name: "김지현",
      review: "정말 깔끔하게 청소해주셨어요! 다음에도 또 이용할게요 😊",
    },
    {
      image: ex12,
      name: "박민수",
      review: "이사 청소 맡겼는데 너무 만족했어요. 감사합니다!",
    },
    {
      image: ex13,
      name: "이영은",
      review: "힘든 부분까지 꼼꼼하게 해주셔서 감동했어요.",
    },
    {
      image: ex11,
      name: "김지현",
      review: "정말 깔끔하게 청소해주셨어요! 다음에도 또 이용할게요 😊",
    },
    {
      image: ex12,
      name: "박민수",
      review: "이사 청소 맡겼는데 너무 만족했어요. 감사합니다!",
    },
    {
      image: ex13,
      name: "이영은",
      review: "힘든 부분까지 꼼꼼하게 해주셔서 감동했어요.",
    },
  ];
  return (
    <Section>
      <TitleWrapper>
        <SubTitle>customers messages</SubTitle>
        <Title>
          고객 <GrayText>후기</GrayText>
        </Title>
      </TitleWrapper>
      <ExWrapper>
        <UserSlider reviews={reviews} />
      </ExWrapper>
    </Section>
  );
};

export default InfoSection;
