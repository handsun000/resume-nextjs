import { ProjectDTO } from "@/types/project";
import React from "react";
import { CardTitle, CardWrap, Description, Img, Period, StackBadge, StackList } from "../styles";

export default function ProjectCard({ project, onClick }: { project: ProjectDTO, onClick: () => void }) {
  return (
    <CardWrap onClick={onClick}>
      {project.overview.image && <Img src={`${process.env.NODE_ENV === "production"
        ? "/resume-nextjs"
        : ""
        }${project.overview.image}`} alt={`${project.overview.title} 대표 이미지`} />}
      <CardTitle>{project.overview.title}</CardTitle>
      <Description>{project.overview.summary}</Description>
      <StackList>
        {project.overview.stack?.map((tech: string, idx: number) => (
          <StackBadge key={idx}>{tech}</StackBadge>
        ))}
      </StackList>
      <Period>{project.overview.period}</Period>
    </CardWrap>
  );
}
