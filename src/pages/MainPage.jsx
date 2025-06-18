import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SampleSection from "../components/SampleSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 19px;
  right: 20px;
  padding: 8px 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.togglebtn};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    right: auto;
    left: 20px;
  }
`;

const MainPage = ({ toggleTheme, isDarkMode }) => {
  const [currentSection, setCurrentSection] = useState("hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const sampleRef = useRef(null);
  const infoRef = useRef(null);
  const footerRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    sample: sampleRef,
    info: infoRef,
    contact: contactRef,
    footer: footerRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    [heroRef, aboutRef, sampleRef, infoRef, contactRef, footerRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Header currentSection={currentSection} sectionRefs={sectionRefs} />
      <MainWrapper>
        <section id="hero" ref={sectionRefs.hero}>
          <HeroSection />
        </section>
        <section id="about" ref={sectionRefs.about}>
          <AboutSection />
        </section>
        <section id="sample" ref={sectionRefs.sample}>
          <SampleSection />
        </section>
        <section id="info" ref={sectionRefs.info}>
          <InfoSection />
        </section>
        <section id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </section>
        <Footer />
      </MainWrapper>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? "Light" : "Dark"}
      </ThemeToggle>
    </Container>
  );
};

export default MainPage;
