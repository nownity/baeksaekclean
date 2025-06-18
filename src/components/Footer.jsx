import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.footerbg};
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.text};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 NOWMAKES. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
