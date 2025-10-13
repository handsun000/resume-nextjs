import React, { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.17);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(99, 102, 241, 0.09);
  padding: 1rem 1.5rem;
  flex: 1;
  min-width: 180px;
  color: #333;
  font-size: 1.04rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;
const CardTitle = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
`;

export default function InfoCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
    return (
        <Card>
            <CardTitle>
                {icon} {title}
            </CardTitle>
            {children}
        </Card>
    );
}
