import React from "react";
import styled from "styled-components";

const Badge = styled.span`
  background: #fff;
  color: #6366f1;
  padding: 0.4rem 1.1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

export default function SkillBadge({ children }: { children: string }) {
    return <Badge>{children}</Badge>;
}
