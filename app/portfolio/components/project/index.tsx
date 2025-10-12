"use client";
import React, { useState } from "react";
import { projects } from "@/types/data";
import ProjectList from "./list/ProjectList";
import SideNav from "./sideNav/SideNav";
import ProjectDetailCard from "./detail/ProjectDetailCard";
import { Layout, Section } from "./styles";

export default function Project() {
    const [selected, setSelected] = useState<number | null>(null);
    const [currentProjectIdx, setCurrentProjectIdx] = useState<number | null>(null);
    const [section, setSection] = useState(0);

    if (selected === null) {
        return (
            <Section>
                <ProjectList
                    projects={projects}
                    onSelect={(id, idx) => {
                        setSelected(id);
                        setCurrentProjectIdx(idx);
                        setSection(0);
                    }}
                />
            </Section>
        );
    }

    const currentProject = projects.find((p) => p.id === selected);

    return (
        <Layout>
            <SideNav
                projects={projects}
                currentProjectIdx={currentProjectIdx}
                setCurrentProjectIdx={setCurrentProjectIdx}
                section={section}
                setSection={setSection}
                setSelected={setSelected}
            />
            <ProjectDetailCard
                project={currentProject}
                section={section}
                onClose={() => setSelected(null)}
            />
        </Layout>
    );
}
