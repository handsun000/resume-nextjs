import React from "react";
import { SideNavWrap, SectionLabel, ScrollableProjects, NavItem } from "../styles";
import { ProjectDTO } from "@/types/project";

interface SideNavProps {
    projects: ProjectDTO[];
    currentProjectIdx: number | null;
    setCurrentProjectIdx: (idx: number) => void;
    section: number;
    setSection: (idx: number) => void;
    setSelected: (id: number | null) => void;
}

export default function SideNav({
    projects, currentProjectIdx, setCurrentProjectIdx, section, setSection, setSelected
}: SideNavProps) {
    return (
        <SideNavWrap>
            <SectionLabel>프로젝트 목록</SectionLabel>
            <ScrollableProjects>
                {projects.map((proj, idx) => (
                    <NavItem
                        key={proj.id}
                        active={idx === currentProjectIdx}
                        isProject
                        onClick={() => {
                            setCurrentProjectIdx(idx);
                            setSection(0);
                            setSelected(proj.id);
                        }}>
                        {proj.title}
                    </NavItem>
                ))}
            </ScrollableProjects>
            <SectionLabel>상세 섹션</SectionLabel>
            {["개요", "구현", "문제해결", "회고"].map((label, idx) => (
                <NavItem key={label} active={section === idx} onClick={() => setSection(idx)}>
                    {label}
                </NavItem>
            ))}
        </SideNavWrap>
    );
}
