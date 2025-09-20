import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SpecialSection from "../cleanSection/SpecialSetion";
import MoveinSection from "../cleanSection/MoveinSection";
import OfficeSection from "../cleanSection/OfficeSection";
import PostSection from "../cleanSection/PostSection";
import NewcareSection from "../cleanSection/NewcareSection";
import CleanHeroSection from "../cleanSection/CleanHeroSection";

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

const CleanPage = ({ toggleTheme, isDarkMode }) => {
  const [currentSection, setCurrentSection] = useState("movein");

  const heroRef = useRef(null);
  const moveinRef = useRef(null);
  const officeRef = useRef(null);
  const postRef = useRef(null);
  const specialRef = useRef(null);
  const newcareRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { threshold: 0.18 }
    );

    [heroRef, moveinRef, officeRef, postRef, specialRef, newcareRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <MainWrapper>
        <section id="hero" ref={heroRef}>
          <CleanHeroSection currentSection={currentSection} />
        </section>

        {/* “입주·이사 청소” → office */}
        <section id="movein" ref={moveinRef}>
          <MoveinSection currentSection={currentSection} />
        </section>

        {/* “상가·사무실 청소” → office */}
        <section id="office" ref={officeRef}>
          <OfficeSection />
        </section>

        {/* “준공 청소” → post */}
        <section id="post" ref={postRef}>
          <PostSection />
        </section>

        {/* “특수청소” → special */}
        <section id="special" ref={specialRef}>
          <SpecialSection />
        </section>

        {/* “새집케어” → newcare */}
        <section id="newcare" ref={newcareRef}>
          <NewcareSection />
        </section>
      </MainWrapper>
    </Container>
  );
};

export default CleanPage;
