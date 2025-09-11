"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Overview from "./[projectId]/section/overview";
import Implementation from "./[projectId]/section/implementation";
import TroubleShooting from "./[projectId]/section/troubleShooting";
import ResultReview from "./[projectId]/section/resultreview";
import { ProjectDTO } from "@/types/project";
import { FaTimes } from "react-icons/fa";  // react-icons 설치되어 있어야 함

// 스타일 예시
const CloseButton = styled.button`
  position: fixed;
  top: 28px;
  right: 40px;
  z-index: 20;
  background: #207b1e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(20,110,38,0.15);
  &:hover {
    background: #299b28;
  }
`;

interface ProjectsProps {
  project: ProjectDTO;
  onClose: () => void;
}
const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #faf9ee;
`;

const SideNav = styled.nav`
  width: 234px;
  background: #147824;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 68px;
  gap: 8px;
`;

const NavItem = styled.button<{active:boolean}>`
  border: none;
  background: ${({active}) => (active ? "#fffdeb" : "#147824")};
  color: ${({active}) => (active ? "#177510" : "#fff")};
  font-size: 1.22rem;
  padding: 24px 0;
  width: 100%;
  font-weight: ${({active}) => (active ? 700 : 400)};
  cursor: pointer;
  &:hover {
    background: ${({active}) => (active ? "#fffdeb" : "#2f9442")};
    color: #fff;
  }
`;

// 여기서 바로 카드 역할!
const Content = styled.div`
  flex: 1;
  background: #faf9ee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
`;

const Card = styled.div`
  width: 860px;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 27px rgba(31, 38, 135, 0.08);
  display: flex;
  flex-direction: column;
`;

export default function Projects({ project, onClose }: ProjectsProps) {
  const [section, setSection] = useState(0);
  const sections = [
    { label: "개요", content: <Overview data={project.overview} /> },
    { label: "구현", content: <Implementation data={project.implementation} /> },
    { label: "문제해결", content: <TroubleShooting data={project.troubleshootingList} /> },
    { label: "회고", content: <ResultReview data={project.resultreview} /> }
  ];

  return (
    <Layout>
      <SideNav>
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
        <CloseButton onClick={onClose} aria-label="닫기">
          <FaTimes />
        </CloseButton>
        <Card>
          {sections[section].content}
        </Card>
      </Content>
    </Layout>
  );
}
