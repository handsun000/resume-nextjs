// ProjectAccordion.tsx

"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/types/data";
import Projects from "../../projects/projects";

function useHorizontalDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragThreshold = 5; // 5px 이상 이동하면 드래그로 판단
  const isDragging = useRef(false);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
    isDragging.current = false;
    document.body.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - (ref.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;

    if (Math.abs(walk) > dragThreshold) {
      isDragging.current = true;
      if (ref.current) ref.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const onMouseUp = () => {
    isDown.current = false;
    document.body.style.cursor = "";
    return isDragging.current;
  };

  return {
    ref,
    mouseHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
    },
    onMouseUpHandler: onMouseUp,
    isDragging: isDragging.current,
  };
}

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
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
  cursor: grab;
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
  overflow-y: visible;
`;

const ProjectAccordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, mouseHandlers, onMouseUpHandler } = useHorizontalDragScroll();
  const clickDisabled = useRef(false);

  const handleCardClick = (id: number) => {
    if (!clickDisabled.current) {
      setSelected(id);
    }
    clickDisabled.current = false;
  };

  const handleMouseUpWrapper = () => {
    const wasDragging = onMouseUpHandler();
    clickDisabled.current = wasDragging;
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
              ref={ref}
              {...mouseHandlers}
              onMouseUp={handleMouseUpWrapper}
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
                      stack: project.overview.stack.map((s) => s.trim()),
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
