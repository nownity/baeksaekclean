import styled from "styled-components";
import sample1 from "../images/sample1.jpg";

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  flex-direction: column;
`;

const ImageSection = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 600;
  object-fit: contain;
`;

const BtnSection = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 1550 / 300;
  display: flex;
  justify-content: center;
  gap: 0.7vw;
  padding: 0.7vw;
  background: #6d6d6d;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: translateY(-60%);
  z-index: 10;
`;

const NavBtn = styled.div`
  width: 287px;
  aspect-ratio: 500 / 300;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
`;

const SampleSection = () => {
  return (
    <Section>
      <ImageSection
        src={sample1}
        alt="배경 이미지"
        loading="eager"
        decoding="async"
      />
      <BtnSection>
        <NavBtn>입주 · 거주 청소</NavBtn>
        <NavBtn>이사 청소</NavBtn>
        <NavBtn>상가 청소</NavBtn>
        <NavBtn>준공 청소</NavBtn>
        <NavBtn>특수 청소</NavBtn>
      </BtnSection>
    </Section>
  );
};

export default SampleSection;
