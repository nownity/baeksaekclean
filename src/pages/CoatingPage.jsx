import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CountertopSection from "../coatingSection/CountertopSection";
import FloorSection from "../coatingSection/FloorSection";
import WaxSection from "../coatingSection/WaxSection";

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

const CoatingPage = ({ toggleTheme, isDarkMode }) => {
  const [currentSection, setCurrentSection] = useState("countertop");

  const countertopRef = useRef(null);
  const floorRef = useRef(null);
  const waxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { threshold: 0.18 }
    );

    [countertopRef, floorRef, waxRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <MainWrapper>
        <section id="countertop" ref={countertopRef}>
          <CountertopSection currentSection={currentSection} />
        </section>

        {/* “상가·사무실 청소” → floor */}
        <section id="floor" ref={floorRef}>
          <FloorSection />
        </section>

        {/* “준공 청소” → wax */}
        <section id="wax" ref={waxRef}>
          <WaxSection />
        </section>
      </MainWrapper>
    </Container>
  );
};

export default CoatingPage;
