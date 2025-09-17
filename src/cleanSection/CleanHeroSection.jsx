import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;
`;

const Title = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #cfcfcf;
  position: relative;
`;

const Heading = styled.h1`
  position: relative;
  font-size: 3rem;
  margin-top: 50px;
  font-weight: 500;
  color: #000000;
  text-align: center;
`;

const CleanHeroSection = () => {
  return (
    <Section>
      <Title>
        <Heading>청소서비스</Heading>
      </Title>
    </Section>
  );
};

export default CleanHeroSection;
