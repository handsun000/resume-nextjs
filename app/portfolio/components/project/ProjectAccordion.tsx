"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/types/data";
import Projects from "../../projects/projects";

const AUTO_SCROLL_PADDING = 180;
const AUTO_SCROLL_SPEED = 20;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  margin-top: 3rem;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;

const SubTitle = styled.p`
  font-size: 1.13rem;
  color: #e0e7ef;
  margin-bottom: 2.2rem;
  text-align: center;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  width: 100vw;
  max-width: none;
  padding: 0 5vw 2rem 5vw;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2.2rem;
  padding: 20px 0;
  min-width: max-content;
  overflow-y: visible;
`;

const ProjectAccordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (id: number) => {
    setSelected(id);
  };

  // CardContainer 내부에 마우스가 위치할 시 자동 스크롤 시작
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const rect = scrollRef.current.getBoundingClientRect();
    const mouseX = e.clientX;

    if (mouseX - rect.left < AUTO_SCROLL_PADDING) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollLeft = Math.max(
              scrollRef.current.scrollLeft - AUTO_SCROLL_SPEED,
              0
            );
          }
        }, 16);
      }
      return;
    }

    if (rect.right - mouseX < AUTO_SCROLL_PADDING) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          if (scrollRef.current) {
            const maxScroll =
              scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            scrollRef.current.scrollLeft = Math.min(
              scrollRef.current.scrollLeft + AUTO_SCROLL_SPEED,
              maxScroll
            );
          }
        }, 16);
      }
      return;
    }

    // 중앙 영역에서 마우스가 있을 땐 스크롤 멈춤
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // CardContainer를 벗어나면 자동 스크롤 중지
  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <Section>
      <Title>프로젝트</Title>
      <SubTitle>프로젝트를 소개합니다.</SubTitle>
      <AnimatePresence>
        {selected === null ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <ScrollContainer
                            ref={scrollRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                >
              <CardContainer>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={{
                      id: project.id,
                      image: project.overview.image,
                      title: project.title,
                      summary: project.summary,
                      stack: project.overview.stack,
                      period: project.overview.period,
                    }}
                    onClick={() => handleCardClick(project.id)}
                  />
                ))}
              </CardContainer>
            </ScrollContainer>
          </motion.div>
        ) : (
          <Projects
            key="slider"
            project={projects.find((p) => p.id === selected)!}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProjectAccordion;
