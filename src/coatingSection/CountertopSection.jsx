import styled from "styled-components";
import main1 from "../images/coating4.png";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${main1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
const CountertopSection = () => {
  return <Section></Section>;
};

export default CountertopSection;
