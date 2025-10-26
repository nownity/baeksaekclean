import styled from "styled-components";

const BG = "#ffffff";
const TEXT = "#0c0c0c";
const SUB = "#6b6b6b";
const LINE = "#e5e5e5";

const FooterOuter = styled.footer`
  background: ${BG};
  color: ${TEXT};
  padding: 20px 40px 48px;
  border-top: 1px solid ${LINE};
`;

const FooterInner = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  padding-top: 24px;

  @media (min-width: 1250px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    padding-top: 32px;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  display: block;

  @media (min-width: 1250px) {
    width: 40px;
    height: 40px;
  }
`;

const BrandName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0;

  @media (min-width: 1250px) {
    font-size: 22px;
  }
`;

const BrandDesc = styled.p`
  margin: 10px 0 0;
  color: ${SUB};
  line-height: 1.6;
  font-size: 14px;
  word-break: keep-all;
`;

const InfoBlock = styled.div`
  display: grid;
  gap: 12px;

  @media (min-width: 1250px) {
    justify-items: end;
    text-align: right;
    gap: 10px;
  }
`;

const LinkRow = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;

  a {
    color: ${TEXT};
    text-decoration: none;
    font-size: 14px;
    opacity: 0.9;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: nowrap;
  color: ${SUB};
  font-size: 13px;
  line-height: 1.6;

  @media (max-width: 1250px) {
    align-items: flex-start;
  }
`;

const Copyright = styled.div`
  color: ${SUB};
  font-size: 12px;
  margin-top: 28px;

  @media (min-width: 1250px) {
    margin-top: 32px;
    text-align: right;
  }
`;

const Footer = () => {
  return (
    <FooterOuter>
      <FooterInner>
        <FooterGrid>
          <div>
            <BrandBlock>
              <Logo src="/favicon.svg" alt="백앤클린 로고" />
              <BrandName>백앤클린</BrandName>
            </BrandBlock>
            <BrandDesc>
              생활 공간을 더 깨끗하고 완벽하게. 프리미엄 홈·오피스 클리닝과 코팅
              솔루션을 제공합니다.
            </BrandDesc>
          </div>

          <InfoBlock>
            <LinkRow aria-label="푸터 링크">
              <a href="/">백앤클린</a>
              <a href="/clean">청소서비스</a>
              <a href="/coating">코팅서비스</a>
              <a href="/contact">문의하기</a>
            </LinkRow>
            <Meta>
              <span>고객센터 : 10:00–18:00 (주말/공휴일 휴무)</span>
              <span>baeknclean@gmail.com</span>
              <span>Tel : 010-9508-6626</span>
            </Meta>
          </InfoBlock>
        </FooterGrid>

        <Copyright>
          © {new Date().getFullYear()} 백앤클린. All rights reserved.
        </Copyright>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;
