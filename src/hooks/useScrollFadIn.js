import { useEffect, useRef, useState } from "react";

const useScrollFadeIn = (direction = "up", duration = 0.7, delay = 0) => {
  const [visible, setVisible] = useState(false);
  const dom = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(dom.current);
        }
      },
      { threshold: 0.2 }
    );

    if (dom.current) observer.observe(dom.current);

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 50px, 0)";
      case "down":
        return "translate3d(0, -20px, 0)";
      case "left":
        return "translate3d(20px, 0, 0)";
      case "right":
        return "translate3d(-20px, 0, 0)";
      default:
        return;
    }
  };

  return {
    ref: dom,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translate3d(0, 0, 0)" : getTransform(),
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    },
  };
};

export default useScrollFadeIn;
