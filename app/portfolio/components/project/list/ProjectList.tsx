import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ScrollContainer, CardContainer, ListTitle, SubTitle } from "../styles";
import { ProjectDTO } from "@/types/project";

interface ProjectListProps {
    projects: ProjectDTO[];
    onSelect: (id: number, idx: number) => void;
}

const AUTO_SCROLL_PADDING = 180;
const AUTO_SCROLL_SPEED = 20;

export default function ProjectList({ projects, onSelect }: ProjectListProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    // 가로 오토 스크롤 등 필요시 구현

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

    return (
        <>
            <ListTitle>프로젝트</ListTitle>
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
                                    project={project}
                                    onClick={() => onSelect(project.id, idx)}
                                />
                            ))}
                        </CardContainer>
                    </ScrollContainer>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
