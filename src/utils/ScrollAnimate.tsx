"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollAnimate = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && entry.target.classList.add("animate-all");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.4,
      },
    );
    const targetElement = document.querySelectorAll(".reveal-animate");
    targetElement.forEach((each) => observer.observe(each));
    return () => observer.disconnect();

  }, [pathname]);

  return null;
};

export default ScrollAnimate;