"use client";

import React, { useState, useRef} from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/types/data";
import Overview from "../../projects/[projectId]/section/overview";
import Implementation from "../../projects/[projectId]/section/implementation";
import TroubleShooting from "../../projects/[projectId]/section/troubleShooting";
import ResultReview from "../../projects/[projectId]/section/resultreview";
import { FaTimes } from "react-icons/fa";

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

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  outline: none;
`;

const SideNav = styled.nav`
  width: 240px;
  min-width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 68px 16px 32px 24px;
  gap: 16px;
  border-right: 1.5px solid #e2e6ee;
  box-shadow: 1px 0 18px rgba(36, 58, 107, 0.04); /* 네이비 그림자 */
  background: #f7f8fa; /* 아주 밝은 네이비 라이트톤 */
`;

const SectionLabel = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #243a6b; /* 네이비 블루 */
  padding-left: 8px;
  margin-bottom: 8px;
`;

const NavItem = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isProject"
})<{ active: boolean; isProject?: boolean }>`
  border: none;
  background: ${({ active, isProject }) => {
    if (active && isProject) return "#e7eaf3"; // 연한 블루그레이
    if (active) return "#f1f3fa";
    return "transparent";
  }};
  color: ${({ active, isProject }) =>
    active ? "#213e75" : isProject ? "#354979" : "#6a728c"};
  font-size: ${({ isProject }) => (isProject ? "1.05rem" : "1.17rem")};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-align: left;
  padding: ${({ isProject }) => (isProject ? "10px 16px" : "17px 0 17px 16px")};
  width: 100%;
  border-radius: ${({ isProject }) => (isProject ? "8px" : "10px 0 0 10px")};
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active ? "0 2px 7px #e4e8f5cc inset" : "none"};
  transition: background 0.17s, color 0.15s;
  letter-spacing: 0.01em;
  &:hover {
    background: ${({ active }) => (active ? null : "#f1f3fa")};
    color: #213e75;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 38px 24px 24px 24px;
  
`;

const Card = styled.div`
  width: 860px;
  height: 100%;
  max-width: 98vw;
  background: #fff;
  border-radius: 17px;
  box-shadow: 0 6px 32px rgba(36, 58, 107, 0.08); /* 네이비 그림자 */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 52px 44px 44px 48px;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 36px;
  z-index: 100;
  background: #243a6b; /* 네이비 */
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(36, 58, 107, 0.11);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #1d284d;
  }
  svg {
    pointer-events: none;
  }
`;


export default function ProjectAccordion() {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 프로젝트 및 상세 섹션 상태
  const [currentProjectIdx, setCurrentProjectIdx] = useState<number | null>(null);
  const [section, setSection] = useState(0);

  // 자동 스크롤 처리 (이전 코드 유지)
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

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 프로젝트 찾기 (선택된 경우)
  const currentProject = selected !== null ? projects.find((p) => p.id === selected) : null;

  if (selected === null) {
    // 프로젝트 리스트 뷰
    return (
      <Section>
        <Title>프로젝트</Title>
        <SubTitle>프로젝트를 소개합니다.</SubTitle>
        <AnimatePresence>
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <ScrollContainer ref={scrollRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <CardContainer>
                {projects.map((project, idx) => (
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
                    onClick={() => {
                      setCurrentProjectIdx(idx);
                      setSection(0);
                      setSelected(project.id);
                    }}
                  />
                ))}
              </CardContainer>
            </ScrollContainer>
          </motion.div>
        </AnimatePresence>
      </Section>
    );
  }

  return (
    <Layout>
      <SideNav>
        <SectionLabel>프로젝트 목록</SectionLabel>
        {projects.map((proj, idx) => (
          <NavItem
            key={proj.id}
            active={idx === currentProjectIdx}
            isProject
            onClick={() => {
              setCurrentProjectIdx(idx);
              setSection(0);
              setSelected(proj.id);
            }}
          >
            {proj.title}
          </NavItem>
        ))}
        <SectionLabel>상세 섹션</SectionLabel>
        {[
          { label: "개요" },
          { label: "구현" },
          { label: "문제해결" },
          { label: "회고" },
        ].map((item, idx) => (
          <NavItem key={item.label} active={section === idx} onClick={() => setSection(idx)}>
            {item.label}
          </NavItem>
        ))}
      </SideNav>
      <Content>
        <Card>
          <CloseButton onClick={() => setSelected(null)}>
            <FaTimes />
          </CloseButton>
          <AnimatePresence mode="wait">
            {currentProject && (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                {section === 0 && <Overview data={currentProject.overview} />}
                {section === 1 && <Implementation data={currentProject.implementation} />}
                {section === 2 && <TroubleShooting data={currentProject.troubleshootingList} />}
                {section === 3 && <ResultReview data={currentProject.resultreview} />}
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Content>
    </Layout>
  );
}
