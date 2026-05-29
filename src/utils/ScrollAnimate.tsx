"use client";
import { useEffect, useRef, useState } from "react";

const ScrollAnimate = ({ children }: React.PropsWithChildren) => {
  const domRef = useRef(null);
  // const [animateDom, setAnimateDom] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((sections) => {
      sections.forEach(section => {
        if (section.isIntersecting) {
          section.target.classList.add('animate-page');
          // observer.unobserve(section.target);
        }
      })
    }, { threshold: 0.5 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} >
      {children}
    </div>
  );
}

export default ScrollAnimate;