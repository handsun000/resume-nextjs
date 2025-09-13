// ProjectCard.tsx

"use client";

import React from "react";
import styled from "styled-components";

const Card = styled.div`
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

const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1.18rem;
  margin-bottom: 8px;
  color: #3730a3;
`;

const Description = styled.p`
  opacity: 0.88;
  margin-bottom: 14px;
  font-size: 0.98rem;
  color: #333;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 12px;
  width: 100%;
`;

const StackBadge = styled.span`
  background: #e6ecfa;
  color: #304780;
  border-radius: 18px;
  padding: 5px 13px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Period = styled.div`
  font-size: 0.85rem;
  color: #7292c9;
  margin-bottom: 3px;
  align-self: flex-end;
`;

interface ProjectCardProps {
  project: {
    id: number;
    image?: string;
    title: string;
    summary: string;
    stack: string[];
    period: string;
  };
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card onClick={onClick} role="button" tabIndex={0}>
      {project.image && <Img  src={`${
                            process.env.NODE_ENV === "production"
                              ? "/resume-nextjs"
                              : ""
                          }${project.image}`} alt={`${project.title} 대표 이미지`} />}
      <Title>{project.title}</Title>
      <Description>{project.summary}</Description>
      <StackList>
        {project.stack.map((tech) => (
          <StackBadge key={tech}>{tech}</StackBadge>
        ))}
      </StackList>
      <Period>{project.period}</Period>
    </Card>
  );
};

export default ProjectCard;
