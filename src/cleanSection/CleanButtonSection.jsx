import styled from "styled-components";

const TrustBanner = styled.section`
  width: 100%;
  background: #ffffff;
  color: #0c0c0c;
  border-top: 1px solid #efefef;
`;

const TrustInner = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 50px 24px 64px;
  text-align: center;
`;

const TrustTitle = styled.h4`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.2px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TrustText = styled.p`
  font-size: 15px;
  line-height: 1.8;
  max-width: 720px;
  margin: 10px auto 18px;
  opacity: 0.95;
`;

const CTAWrap = styled.div`
  display: inline-flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 148px;
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease, color 0.15s ease;
  border: 1px solid transparent;

  &.primary {
    background: #0c0c0c;
    color: #ffffff;
    &:hover {
      transform: translateY(-1px);
    }
  }

  &.ghost {
    background: transparent;
    color: #0c0c0c;
    border-color: #d8d8d8;
    &:hover {
      transform: translateY(-1px);
      border-color: #bdbdbd;
    }
  }
`;

const CleanButtonSection = () => {
  return (
    <TrustBanner>
      <TrustInner>
        <TrustTitle>우리 집, 정말 깨끗하게 청소된 걸까요?</TrustTitle>
        <TrustText>
          청소는 눈에 보이는 먼지뿐 아니라 <br className="mobile-br" />
          <strong>숨은 오염과 세균</strong>까지 관리해야 합니다.
          <br />
          <strong>전문 장비와 친환경 약제</strong>,{" "}
          <strong>숙련된 인력의 시공력</strong>, 그리고{" "}
          <strong>안전한 공정 관리</strong>까지 꼼꼼히 비교하고
          <strong>맞춤 상담</strong>으로 가장 효율적인 청소 서비스를 받아보세요.
        </TrustText>

        <CTAWrap>
          <CTA href="/contact" className="primary">
            청소 상담 신청하기
          </CTA>
          <CTA href="tel:010-9508-6626" className="ghost">
            지금 바로 문의
          </CTA>
        </CTAWrap>
      </TrustInner>
    </TrustBanner>
  );
};

export default CleanButtonSection;
