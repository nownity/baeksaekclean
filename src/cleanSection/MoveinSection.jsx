import styled from "styled-components";
import clean1 from "../images/clean.JPEG";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: pink;
  position: relative;
`;

const Title = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dadada;
  /* background-image: url(${clean1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  position: relative;
`;

const MoveinSection = () => {
  return (
    <Section>
      <Title></Title>
    </Section>
  );
};

export default MoveinSection;
