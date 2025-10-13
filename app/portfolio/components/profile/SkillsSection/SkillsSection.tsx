import React from "react";
import styled from "styled-components";
import SkillBadge from "./SkillBadge";

const BadgeList = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const skills = ["JAVA", "Spring", "JPA", "MySQL"];

export default function SkillsSection() {
    return (
        <BadgeList>
            {skills.map(skill => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
        </BadgeList>
    );
}
