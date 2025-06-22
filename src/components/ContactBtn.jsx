import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // 👈 추천 아이콘

const blinkDown = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(5px);
  }
`;

const StyledBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.contactBtn};
  color: ${({ theme }) => theme.textWhite};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    padding: 12px 45px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 45%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.text};
  animation: ${blinkDown} 1.2s infinite;
  pointer-events: none;
`;

const ContactBtn = ({ onClick, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StyledBtn
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <IconWrapper>
          <FiChevronDown size={25} />
        </IconWrapper>
      )}
    </StyledBtn>
  );
};

export default ContactBtn;
