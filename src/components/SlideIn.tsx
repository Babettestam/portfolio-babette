"use client";

import React, { useRef, useState, useEffect } from "react";

interface SlideInProps {
  children: React.ReactNode;
  threshold?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, threshold = 0.35 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Trigger only once
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`slide-in ${isVisible ? "slide-in-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;
