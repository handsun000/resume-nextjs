"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Overview from "./[projectId]/section/overview";
import Implementation from "./[projectId]/section/implementation";
import TroubleShooting from "./[projectId]/section/troubleShooting";
import ResultReview from "./[projectId]/section/resultreview";
import { ProjectDTO } from "@/types/project";
import { FaTimes } from "react-icons/fa";

// 전체 레이아웃 배경 제거, 포커스용 스타일만 적용
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
  border-right: 1.5px solid #e6edea;
  box-shadow: 1px 0 18px rgb(0 0 0 / 0.05);
`;

const SectionLabel = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #22af6e;
  padding-left: 8px;
  margin-bottom: 8px;
`;

const NavItem = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isProject"
})<{ active: boolean; isProject?: boolean }>`
  border: none;
  background: ${({ active, isProject }) => {
    if (active && isProject) return "#cff5d2";
    if (active) return "#eaf9f2";
    return "transparent";
  }};
  color: ${({ active, isProject }) => (active ? "#22af6e" : isProject ? "#5cae79" : "#7d8b84")};
  font-size: ${({ isProject }) => (isProject ? "1.05rem" : "1.17rem")};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-align: left;
  padding: ${({ isProject }) => (isProject ? "10px 16px" : "17px 0 17px 16px")};
  width: 100%;
  border-radius: ${({ isProject }) => (isProject ? "8px" : "10px 0 0 10px")};
  cursor: pointer;
  box-shadow: ${({ active }) => (active ? "0 2px 8px #c1e7d2 inset" : "none")};
  transition: background 0.16s, color 0.15s;
  letter-spacing: 0.01em;
  &:hover {
    background: ${({ active }) => (active ? null : "#ebf6f2")};
    color: #22af6e;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px 24px 24px;
`;

const Card = styled.div`
  width: 860px;
  height: 100%;
  max-width: 98vw;
  background: #fff;
  border-radius: 17px;
  box-shadow: 0 6px 32px rgba(31, 38, 135, 0.1);
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
  background: #22af6e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(34, 175, 110, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #12955a;
  }
  svg {
    pointer-events: none;
  }
`;

interface ProjectsProps {
  projects: ProjectDTO[];            // 전체 프로젝트 배열
  initialIndex?: number;             // 초기 선택 프로젝트 인덱스 (선택사항)
  onClose: () => void;
}

export default function Projects({ projects, initialIndex = 0, onClose }: ProjectsProps) {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(initialIndex);
  const [section, setSection] = useState(0);
  const layoutRef = useRef<HTMLDivElement>(null);

  // 현재 선택 프로젝트
  const project = projects[currentProjectIdx];

  // 상세 섹션 목록
  const sections = [
    { label: "개요", content: <Overview data={project.overview} /> },
    { label: "구현", content: <Implementation data={project.implementation} /> },
    { label: "문제해결", content: <TroubleShooting data={project.troubleshootingList} /> },
    { label: "회고", content: <ResultReview data={project.resultreview} /> }
  ];

  // 상세로 올 때 포커스 잡기
  useEffect(() => {
    layoutRef.current?.focus();
  }, [currentProjectIdx, section]);

  return (
    <Layout tabIndex={-1} ref={layoutRef}>
      <SideNav>
        <SectionLabel>프로젝트 목록</SectionLabel>
        {projects.map((p, idx) => (
          <NavItem
            key={p.overview.title + idx}
            active={idx === currentProjectIdx}
            isProject
            onClick={() => {
              setCurrentProjectIdx(idx);
              setSection(0);
            }}
          >
            {p.overview.title}
          </NavItem>
        ))}
        <SectionLabel>상세 섹션</SectionLabel>
        {sections.map((item, idx) => (
          <NavItem
            key={item.label}
            active={section === idx}
            onClick={() => setSection(idx)}
          >
            {item.label}
          </NavItem>
        ))}
      </SideNav>
      <Content>
        <Card>
          <CloseButton
            onClick={onClose}
            aria-label="닫기"
            title="닫기"
            type="button"
          >
            <FaTimes />
          </CloseButton>
          {sections[section].content}
        </Card>
      </Content>
    </Layout>
  );
}
