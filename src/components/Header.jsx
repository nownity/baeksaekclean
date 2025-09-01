import styled from "styled-components";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 220px;
    background-color: ${({ theme }) => theme.herobg};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform, background-color 0.3s ease-in-out;
    z-index: 999;
    padding-top: 13px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: ${({ $active, theme }) => ($active ? theme.text : theme.headertext)};
  border-bottom: ${({ $active, theme }) =>
    $active ? `2px solid ${theme.text}` : "none"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.1s ease-in-out;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $show }) => ($show ? "block" : "none")};
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    z-index: 999;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 85%;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    z-index: 1001;
    cursor: pointer;
    margin-bottom: 30px;
  }
`;

const MLogo = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    margin-bottom: 80px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const TextPhone = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 13px;
    font-weight: bold;
    margin-top: 50px;
  }
`;

const TextEmail = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out;
    font-size: 13px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

const Header = ({ currentSection, sectionRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        백엔클린
      </Logo>

      <Hamburger onClick={() => setMenuOpen(true)} $show={!menuOpen}>
        ☰
      </Hamburger>
      <Nav open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton>
        <MLogo
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" }) & setMenuOpen(false)
          }
        >
          백엔클린
        </MLogo>
        <NavItem
          onClick={() => scrollToSection("hero")}
          $active={currentSection === "hero"}
        >
          백엔클린
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("about")}
          $active={currentSection === "about"}
        >
          청소서비스
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          $active={currentSection === "sample"}
        >
          코팅서비스
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("info")}
          $active={currentSection === "info"}
        >
          청소범위
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("contact")}
          $active={currentSection === "contact"}
        >
          예약신청
        </NavItem>
        <TextPhone>010-9508-6626</TextPhone>
        <TextEmail>baeksaekclaen@gmail.com</TextEmail>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
