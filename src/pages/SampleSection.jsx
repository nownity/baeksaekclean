import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import { FiChevronDown } from "react-icons/fi";
import ex11 from "../images/ex1-1.jpg";
import ex12 from "../images/ex1-2.jpg";
import ex13 from "../images/ex1-3.jpg";
import ex21 from "../images/ex2-1.jpg";
import ex22 from "../images/ex2-2.jpg";
import ex23 from "../images/ex2-3.jpg";
import ip1 from "../images/ip1.JPEG";
import ip2 from "../images/ip2.JPEG";
import ip3 from "../images/ip3.JPEG";
import is1 from "../images/is1.JPEG";
import is2 from "../images/is2.JPEG";
import is3 from "../images/is3.JPEG";
import is4 from "../images/is4.JPEG";
import jg1 from "../images/jg1.JPEG";
import jg2 from "../images/jg2.JPEG";
import jg3 from "../images/jg3.JPEG";
import useScrollFadeIn from "../hooks/useScrollFadIn";

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  flex-direction: column;
`;

const ImageSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.aboutbg};
  transition: background-color 0.3s ease-in-out;
  @media (max-width: 768px) {
  }
`;

const BtnTitleWrapper = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 150px;
    margin-top: auto;
  }
`;

const BtnTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const BtnGrayText = styled.span`
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
`;

const BtnSubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 150px;
    margin-top: auto;
  }
  @media (max-width: 450px) {
    height: 100px;
  }
`;

const BtnSection = styled.div`
  width: 70%;
  height: auto;
  aspect-ratio: 1550 / 300;
  display: flex;
  justify-content: center;
  gap: 1vw;
  padding: 0.5vw;
  border-radius: 12px;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 95%;
    transform: translateY(0%);
  }
`;

const NavBtn = styled.div`
  width: 287px;
  aspect-ratio: 500 / 500;
  background-image: ${({ $imageurl }) => `url(${$imageurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ theme }) => theme.textWhite};
  transition: color 0.3s ease-in-out;
  border: 1px solid #000000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  .pc-space {
    display: inline;
  }
  .mobile-br {
    display: none;
  }

  @media (max-width: 1200px) {
    aspect-ratio: 600 / 400;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    .pc-space {
      display: none;
    }
    .mobile-br {
      display: block;
    }
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
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

const FirstSection = styled.div`
  width: 100%;
`;

const SecondSection = styled.div`
  width: 100%;
`;

const ThirdSection = styled.div`
  width: 100%;
`;

const FourthSection = styled.div`
  width: 100%;
`;

const FifthSection = styled.div`
  width: 100%;
`;

const DownBtn = styled.button`
  width: 100%;
  margin-top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  animation: bounce 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 36px;
    height: 36px;
    stroke: ${({ theme }) => theme.text};
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(15px);
    opacity: 0.8;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }
`;

const TopSection = styled.div`
  width: 100%;
  height: 70px;
`;

const SampleSection = () => {
  const fadeInTitle = useScrollFadeIn("up", 0.8, 0);
  const fadeInSubTitle = useScrollFadeIn("up", 0.8, 0.3);
  const fadeInBtn = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn11 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn12 = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn13 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn14 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn21 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn22 = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn23 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn24 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn31 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn32 = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn33 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn34 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn41 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn42 = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn43 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn44 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn51 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn52 = useScrollFadeIn("up", 0.8, 0.3);
  const fadeIn53 = useScrollFadeIn("up", 0.8, 0.5);
  const fadeIn54 = useScrollFadeIn("up", 0.8, 0.5);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="sample">
      <TopSection />
      <ImageSection>
        <BtnTitleWrapper>
          <BtnTitle {...fadeInTitle}>
            청소 <BtnGrayText>사례</BtnGrayText>
          </BtnTitle>
          <BtnSubTitle {...fadeInSubTitle}>
            아래 청소 업무를 클릭하면 이동합니다.
          </BtnSubTitle>
        </BtnTitleWrapper>
        <BtnWrapper>
          <BtnSection {...fadeInBtn}>
            <NavBtn onClick={() => scrollToSection("section1")} $imageurl={ip2}>
              입주 · 거주
              <span className="pc-space">&nbsp;</span>
              <br className="mobile-br" />
              청소
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("section2")} $imageurl={is3}>
              이사
              <span className="pc-space">&nbsp;</span>
              <br className="mobile-br" />
              청소
            </NavBtn>
            <NavBtn
              onClick={() => scrollToSection("section3")}
              $imageurl={ex13}
            >
              상가
              <span className="pc-space">&nbsp;</span>
              <br className="mobile-br" />
              청소
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("section4")} $imageurl={jg2}>
              준공
              <span className="pc-space">&nbsp;</span>
              <br className="mobile-br" />
              청소
            </NavBtn>
            <NavBtn
              onClick={() => scrollToSection("section5")}
              $imageurl={ex21}
            >
              특수
              <span className="pc-space">&nbsp;</span>
              <br className="mobile-br" />
              청소
            </NavBtn>
          </BtnSection>
        </BtnWrapper>
      </ImageSection>

      <FirstSection id="section1">
        <TitleWrapper>
          <Title {...fadeIn11}>
            입주 · 거주 <GrayText>청소</GrayText>
          </Title>
          <SubTitle {...fadeIn12}>cleaning of the house</SubTitle>
        </TitleWrapper>
        <ExWrapper>
          <DescriptionBox {...fadeIn13}>
            <DesTitle>입주 전, 새집의 첫인상을 책임집니다</DesTitle>
            <DesText>
              입주 · 거주 청소는 새로 이사 들어가기 전, <br />
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
          <SliderWrapper {...fadeIn14}>
            <ImageSlider images={[ip1, ip2, ip3]} />
          </SliderWrapper>
        </ExWrapper>
        <DownBtn onClick={() => scrollToSection("section2")}>
          <FiChevronDown />
        </DownBtn>
      </FirstSection>

      <SecondSection id="section2">
        <TitleWrapper>
          <Title {...fadeIn21}>
            이사 <GrayText>청소</GrayText>
          </Title>
          <SubTitle {...fadeIn22}>Moving Day Cleaning</SubTitle>
        </TitleWrapper>
        <ExWrapper>
          <SliderWrapper {...fadeIn23}>
            <ImageSlider images={[is1, is2, is3, is4]} />
          </SliderWrapper>
          <DescriptionBox {...fadeIn24}>
            <DesTitleR>완벽한 이사, 깔끔한 시작으로부터</DesTitleR>
            <DesTextR>
              이사 전후의 청소는 단순한 정리가 아니라,
              <br /> 새 출발을 위한 준비입니다. 새 집을 맞이하기 전,
              <br /> 또는 떠나기 전 공간을 정성껏 청소해드려요.
              <br />
              <br />
              주방의 기름때, 욕실의 곰팡이, 바닥의 먼지까지
              <br />
              꼼꼼하게 제거하여 다음 사람을 위한 배려이자
              <br /> 나를 위한 시작을 함께합니다.
            </DesTextR>
          </DescriptionBox>
        </ExWrapper>
        <DownBtn onClick={() => scrollToSection("section3")}>
          <FiChevronDown />
        </DownBtn>
      </SecondSection>

      <ThirdSection id="section3">
        <TitleWrapper>
          <Title {...fadeIn31}>
            상가 <GrayText>청소</GrayText>
          </Title>
          <SubTitle {...fadeIn32}>Commercial Space Cleaning</SubTitle>
        </TitleWrapper>
        <ExWrapper>
          <DescriptionBox {...fadeIn33}>
            <DesTitle>첫인상은 공간이 말합니다</DesTitle>
            <DesText>
              매장, 사무실, 카페 등 고객과 직원이 오가는 공간은
              <br />늘 깔끔하고 쾌적해야 합니다.
              <br />
              <br />
              상가 청소는 바닥의 오염, 유리창의 지문,
              <br />
              화장실 위생까지 전반적으로 관리하여
              <br /> 고객에게 신뢰를 주는 공간으로 만들어드립니다.
            </DesText>
          </DescriptionBox>
          <SliderWrapper {...fadeIn34}>
            <ImageSlider images={[ex11, ex12, ex13]} />
          </SliderWrapper>
        </ExWrapper>
        <DownBtn onClick={() => scrollToSection("section4")}>
          <FiChevronDown />
        </DownBtn>
      </ThirdSection>

      <FourthSection id="section4">
        <TitleWrapper>
          <Title {...fadeIn41}>
            준공 <GrayText>청소</GrayText>
          </Title>
          <SubTitle {...fadeIn42}>Post-Construction Cleaning</SubTitle>
        </TitleWrapper>
        <ExWrapper>
          <SliderWrapper {...fadeIn43}>
            <ImageSlider images={[jg1, jg2, jg3]} />
          </SliderWrapper>
          <DescriptionBox {...fadeIn44}>
            <DesTitleR>완공 후 마지막 터치, 청결</DesTitleR>
            <DesTextR>
              공사 후 남은 먼지, 시멘트가루, 도장자국 등은
              <br />
              일반 청소로는 처리하기 어렵습니다.
              <br />
              <br />
              준공 청소는 공사 현장을 실제
              <br /> 사용 가능한 공간으로 바꾸는 마무리 작업입니다.
              <br />
              전문 장비와 약제를 사용해 세밀하게 마무리해드립니다.
            </DesTextR>
          </DescriptionBox>
        </ExWrapper>
        <DownBtn onClick={() => scrollToSection("section5")}>
          <FiChevronDown />
        </DownBtn>
      </FourthSection>

      <FifthSection id="section5">
        <TitleWrapper>
          <Title {...fadeIn51}>
            특수 <GrayText>청소</GrayText>
          </Title>
          <SubTitle {...fadeIn52}>Specialized Cleaning Service</SubTitle>
        </TitleWrapper>
        <ExWrapper>
          <DescriptionBox {...fadeIn53}>
            <DesTitle>보이지 않는 위험까지, 안전하게</DesTitle>
            <DesText>
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
            </DesText>
          </DescriptionBox>
          <SliderWrapper {...fadeIn54}>
            <ImageSlider images={[ex21, ex22, ex23]} />
          </SliderWrapper>
        </ExWrapper>
      </FifthSection>
    </Section>
  );
};

export default SampleSection;
