"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Overview from "./[projectId]/section/overview";

import Implementation from "./[projectId]/section/implementation";
import TroubleShooting from "./[projectId]/section/troubleShooting";
import ResultReview from "./[projectId]/section/resultreview";
import { ProjectDTO } from "@/types/project";

// 섹션 스타일
const Section = styled(motion.section)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

// 네비게이션 버튼
const NavButton = styled.button`
  position: fixed;
  top: 50%;
  z-index: 10;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(99, 102, 241, 0.18);
  &:hover {
    background: #3730a3;
  }
`;

interface ProjectProps {
  project: ProjectDTO;
  onClose: () => void;
}

export default function Projects({ project, onClose }: ProjectProps) {
  const [page, setPage] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refCurrent = projectRef.current;
    refCurrent?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (!refCurrent) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% 이상 보이면 NavButton 표시
    );
    observer.observe(refCurrent);

    return () => observer.disconnect();
  }, []);

  // 각 섹션 컴포넌트 배열
  const sections = [
    <Overview data={project.overview} key="overview" />,
    // <Process data={project.process} key="process" />,
    <Implementation data={project.implementation} key="impl" />,
    <TroubleShooting data={project.troubleshootingList} key="trouble" />,
    <ResultReview data={project.resultreview} key="resultreview" />,
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      ref={projectRef}
      tabIndex={-1}
    >
      {showNav && page > 0 && (
        <NavButton style={{ left: "2vw" }} onClick={() => setPage(page - 1)}>
          <FaChevronLeft />
        </NavButton>
      )}
      {showNav && page < sections.length - 1 && (
        <NavButton style={{ right: "2vw" }} onClick={() => setPage(page + 1)}>
          <FaChevronRight />
        </NavButton>
      )}
      {showNav && (
        <NavButton onClick={onClose} style={{ top: "5%", right: "2vw" }}>
          <FaTimes />
        </NavButton>
      )}
      {/* 섹션 전환 */}
      <AnimatePresence mode="wait">
        <Section
          key={page}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {sections[page]}
        </Section>
      </AnimatePresence>
    </div>
  );
}
