import { useEffect, useState } from "react";
import styled from "styled-components";
import { PiPhoneCall } from "react-icons/pi";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";

const Wrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  z-index: 998;
  @media (max-width: 768px) {
    right: 20px;
    bottom: 70px;
  }
`;

const ItemWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const CircleButton = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.iconColor || "#fff"};
  background-color: ${(p) => p.bg};
  font-size: 26px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, opacity 0.25s ease;
  outline: none;
  border: none;
  text-decoration: none;

  &:hover {
    transform: scale(1.08);
  }

  &:focus-visible {
    transform: scale(1.08);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.08);
  }
`;

const SlideLabel = styled.span`
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: ${(p) => p.bg || "#0c0c0c"};
  color: ${(p) => p.fg || "#ffffff"};
  border-radius: 999px;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  opacity: 0;
  max-width: 0;
  overflow: hidden;
  pointer-events: none;
  transition: max-width 0.35s ease, opacity 0.2s ease, transform 0.35s ease;

  ${ItemWrap}:hover &,
  ${ItemWrap}:focus-within & {
    opacity: 1;
    max-width: 200px;
    transform: translateY(-50%) translateX(0);
  }
`;

const TopButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 40px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: #0c0c0c;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 998;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(12, 12, 12, 0.2);
  }
  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
`;

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Wrapper>
        <ItemWrap>
          <CircleButton
            href="tel:010-9508-6626"
            bg="#000000"
            iconColor="#FFFFFF"
            aria-label="전화 연결하기"
          >
            <PiPhoneCall />
          </CircleButton>
          <SlideLabel bg="#000000" fg="#FFFFFF">
            전화 연결하기
          </SlideLabel>
        </ItemWrap>

        {/* 네이버 */}
        <ItemWrap>
          <CircleButton
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            bg="#03C75A"
            iconColor="#FFFFFF"
            aria-label="블로그 이동하기"
          >
            <SiNaver size={20} />
          </CircleButton>
          <SlideLabel bg="#03C75A" fg="#FFFFFF">
            블로그 이동하기
          </SlideLabel>
        </ItemWrap>

        {/* 카카오톡 */}
        <ItemWrap>
          <CircleButton
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            bg="#FEE500"
            iconColor="#3A1D1D"
            aria-label="카카오톡 문의하기"
          >
            <RiKakaoTalkFill size={28} />
          </CircleButton>
          <SlideLabel bg="#FEE500" fg="#191919">
            카카오톡 문의하기
          </SlideLabel>
        </ItemWrap>
      </Wrapper>

      <TopButton
        visible={showTop}
        onClick={handleTopClick}
        aria-label="맨 위로"
      >
        <FaAngleUp />
      </TopButton>
    </>
  );
};

export default FloatingButtons;
