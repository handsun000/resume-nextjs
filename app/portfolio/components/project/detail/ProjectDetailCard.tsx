import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, Content } from "../styles";
import CloseButton from "./CloseButton";
import Overview from "../../../projects/[projectId]/section/overview";
import Implementation from "../../../projects/[projectId]/section/implementation";
import TroubleShooting from "../../../projects/[projectId]/section/troubleShooting";
import ResultReview from "../../../projects/[projectId]/section/resultreview";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectDTO } from "@/types/project";

// --- styled-components (내부에 바로 작성 또는 분리가능) ---
const ArrowBtn = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  z-index: 100;
  transform: translateY(-50%);
  background: #f0f4fa;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 7px rgba(36, 58, 107, 0.09);
  color: #214090;
  font-size: 1.38rem;
  cursor: pointer;
  transition: background 0.16s, box-shadow 0.16s;
  left: ${({ style }) => style?.left};
  right: ${({ style }) => style?.right};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:hover {
    background: #e8ecf8;
    color: #2343b5;
    box-shadow: 0 2px 12px rgba(40,80,188,0.14);
  }
`;

interface ProjectDetailCardProps {
    project?: ProjectDTO;
    section: number;
    setSection: (idx: number) => void;
    onClose: () => void;
}
const sectionLabels = ["개요", "구현", "문제해결", "회고"];

export default function ProjectDetailCard({
    project,
    section,
    setSection,
    onClose,
}: ProjectDetailCardProps) {
    // -- 네비 화살표 핸들러 --
    const handlePrevSection = () => {
        if (section > 0) setSection(section - 1);
    };
    const handleNextSection = () => {
        if (section < sectionLabels.length - 1) setSection(section + 1);
    };

    if (!project) return null;

    return (
        <Content>
            <Card style={{ position: "relative" }}>
                {/* 양옆 화살표 */}
                <ArrowBtn
                    style={{ left: "-64px" }}
                    disabled={section <= 0}
                    aria-label="이전 섹션"
                    onClick={handlePrevSection}
                >
                    <FaChevronLeft />
                </ArrowBtn>
                <ArrowBtn
                    style={{ right: "-64px" }}
                    disabled={section >= sectionLabels.length - 1}
                    aria-label="다음 섹션"
                    onClick={handleNextSection}
                >
                    <FaChevronRight />
                </ArrowBtn>
                <CloseButton onClick={onClose} />
                <CardContent>
                    <AnimatePresence mode="wait">
                        {project && (
                            <motion.div
                                key={section}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4 }}
                            >
                                {section === 0 && <Overview data={project.overview} />}
                                {section === 1 && <Implementation data={project.implementation} />}
                                {section === 2 && <TroubleShooting data={project.troubleshootingList} />}
                                {section === 3 && <ResultReview data={project.resultreview} />}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </Content>
    );
}
