"use client";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../projects/projects";
import { projects } from "@/types/data";

// Threshold 방식으로 드래그/클릭 분리
function useHorizontalDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragThreshold = 5; // 5px 이동하면 드래그로 판단
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
    
    // 5px 이상 이동하면 드래그로 판단
    if (Math.abs(walk) > dragThreshold) {
      isDragging.current = true;
      if (ref.current) ref.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const onMouseUp = () => {
    isDown.current = false;
    document.body.style.cursor = "";
    return isDragging.current; // 드래그였다면 true 반환
  };

  return {
    ref,
    mouseHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
    },
    isDragging: isDragging.current
  };
}

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem 1rem;
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

const Card = styled(motion.div)`
  min-width: 440px;
  max-width: 480px;
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  scroll-snap-align: center;
  margin: 10px;
  z-index: 1;

  &:hover {
    transform: scale(1.06);
    z-index: 10;
    box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.27rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #3730a3;
`;

const CardDesc = styled.p`
  font-size: 1.02rem;
  color: #333;
  margin-bottom: 1.1rem;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: #b4b8ff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.96rem;
  margin-top: 0.3rem;
`;

const Period = styled.div`
  margin-top: 1rem;
  color: #7f7fd5;
  font-weight: 600;
  font-size: 0.98rem;
`;

const ProjectAccordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, mouseHandlers } = useHorizontalDragScroll();
  const clickDisabled = useRef(false);

  const handleCardClick = (id: number) => {
    if (!clickDisabled.current) {
      setSelected(id);
    }
    clickDisabled.current = false;
  };

  const handleMouseUpWrapper = () => {
    const wasDragging = mouseHandlers.onMouseUp();
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
                  <Card
                    key={project.id}
                    onClick={() => handleCardClick(project.id)}
                  >
                    <CardTitle>{project.title}</CardTitle>
                    <CardDesc>{project.summary}</CardDesc>
                    <BadgeList>
                      {project.overview.stack.split(",").map((tech, i) => (
                        <Badge key={i}>{tech.trim()}</Badge>
                      ))}
                    </BadgeList>
                    <Period>{project.overview.period}</Period>
                  </Card>
                ))}
              </CardContainer>
            </ScrollContainer>
          </motion.div>
        ) : (
          <Project
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
