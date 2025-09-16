import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "../mainSection/HeroSection";
import AboutSection from "../mainSection/AboutSection";
import SampleSection from "../mainSection/SampleSection";
import InfoSection from "../mainSection/InfoSection";
import ContactSection from "../mainSection/ContactSection";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease-in-out;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainPage = ({ toggleTheme, isDarkMode }) => {
  const [currentSection, setCurrentSection] = useState("hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const sampleRef = useRef(null);
  const infoRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { threshold: 0.18 }
    );
    [heroRef, aboutRef, sampleRef, infoRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <MainWrapper>
        <section id="hero" ref={heroRef}>
          <HeroSection currentSection={currentSection} />
        </section>

        {/* “회사소개” → about */}
        <section id="about" ref={aboutRef}>
          <AboutSection />
        </section>

        {/* “청소서비스” → sample */}
        <section id="sample" ref={sampleRef}>
          <SampleSection />
        </section>

        {/* “코팅서비스” → info */}
        <section id="info" ref={infoRef}>
          <InfoSection />
        </section>

        {/* “청소범위” → contact */}
        <section id="contact" ref={contactRef}>
          <ContactSection />
        </section>
      </MainWrapper>
    </Container>
  );
};

export default MainPage;
