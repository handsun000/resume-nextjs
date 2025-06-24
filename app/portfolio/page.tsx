"use client";
import React, { useRef, useEffect, useState } from "react";
import Profile from "./components/profile/profile";
import ProjectAccordion from "./components/ProjectAccordion";
import styled from "styled-components";

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const Portfolio = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectRef.current || hasScrolled) return;

      // 1. 요소 위치 계산
      const rect = projectRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // 2. 화면에 50% 이상 보일 때 실행
      if (
        elementTop < viewportHeight * 0.7 &&
        elementBottom > viewportHeight * 0.7
      ) {
        console.log("트리거 됨!");

        // 3. 0.1초 딜레이 추가
        setTimeout(() => {
          projectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 10);

        setHasScrolled(true);
      }
    };

    // 4. 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 5. 초기 실행
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <Background>
      <Profile />
      {/* 6. ref 위치 확인 */}
      <div ref={projectRef}>
        <ProjectAccordion />
      </div>
    </Background>
  );
};

export default Portfolio;
