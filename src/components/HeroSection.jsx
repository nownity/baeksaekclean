import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
`;

const HeroSection = () => {
  return (
    <Section>
      <Title>백색클린</Title>
    </Section>
  );
};

export default HeroSection;
