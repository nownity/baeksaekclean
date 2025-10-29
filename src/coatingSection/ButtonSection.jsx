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

  .mobile-br {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const TrustText = styled.p`
  font-size: 15px;
  line-height: 1.8;
  max-width: 720px;
  margin: 10px auto 18px;
  opacity: 0.95;

  .mobile-br {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
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

const ButtonSection = () => {
  return (
    <TrustBanner>
      <TrustInner>
        <TrustTitle>
          우리 집 표면, 지금 상태가 어떤지 <br className="mobile-br" />
          궁금하신가요?
        </TrustTitle>
        <TrustText>
          코팅은 제품만이 아니라 <strong>표준 공정</strong>과{" "}
          <br className="mobile-br" />
          <strong>환경 관리</strong>가 결과를 좌우합니다.
          <br />
          <strong>편안함 중심의 사용성</strong>, <strong>보증기간·A/S</strong>,{" "}
          <br className="mobile-br" />
          그리고 <strong>시공결과 편차·경화기간</strong>까지 비교하고{" "}
          <br className="mobile-br" /> 맞춤 상담을 받아보세요.
        </TrustText>

        <CTAWrap>
          <CTA href="/contact" className="primary">
            맞춤 상담 받기
          </CTA>
          <CTA href="tel:010-9508-6626" className="ghost">
            지금 바로 연결
          </CTA>
        </CTAWrap>
      </TrustInner>
    </TrustBanner>
  );
};

export default ButtonSection;
