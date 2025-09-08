"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/types/data";
import Projects from "../../projects/projects";

const AUTO_SCROLL_PADDING = 80;    // 좌우 끝 감지 영역 (px)
const AUTO_SCROLL_SPEED = 30;      // 스크롤 속도(px per tick)

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
  scroll-snap-type: x mandatory;
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
  const ref = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  // 카드 클릭
  const handleCardClick = (id: number) => {
    setSelected(id);
  };
  console.log(ref);

  // 마우스 위치로 자동스크롤
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX } = e;
      const { left, right } = ref.current.getBoundingClientRect();

      // 왼쪽 끝 감지
      if (clientX - left < AUTO_SCROLL_PADDING) {
        if (!autoScrollInterval.current) {
          autoScrollInterval.current = setInterval(() => {
            if (ref.current) {
              ref.current.scrollLeft = Math.max(ref.current.scrollLeft - AUTO_SCROLL_SPEED, 0);
              console.log("scrollLeft:", ref.current.scrollLeft);
            }
          }, 16);
        }
        console.log("left = " + autoScrollInterval.current);
        return;
      }
      // 오른쪽 끝 감지
      if (right - clientX < AUTO_SCROLL_PADDING) {
        if (!autoScrollInterval.current) {
          autoScrollInterval.current = setInterval(() => {
            if (ref.current) {
              const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
              ref.current.scrollLeft = Math.min(ref.current.scrollLeft + AUTO_SCROLL_SPEED, maxScrollLeft);
            }
          }, 16);
        }
        console.log("right = " +autoScrollInterval.current);
        return;
      }
      // 중앙에서는 멈춤
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = null;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = null;
      }
    };
  }, []);

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
            <ScrollContainer ref={ref}>
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
