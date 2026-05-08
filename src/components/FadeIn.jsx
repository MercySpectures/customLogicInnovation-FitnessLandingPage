import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

// eslint-disable-next-line react/prop-types
export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, inView] = useInView();
  const transforms = { 
    up: "translateY(32px)", 
    down: "translateY(-32px)", 
    left: "translateX(-32px)", 
    right: "translateX(32px)", 
    none: "none" 
  };
  
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
};
