import React from "react";
import styled from "styled-components";
import type { Process } from "@/types/project";

const CenterWrap = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const Diagram = styled.img`
  width: 100%;
  border-radius: 14px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.09);
`;

const Desc = styled.p`
  color: #444;
  font-size: 1.07rem;
  margin-top: 0.8rem;
  text-align: center;
`;

export default function Process({ data }: { data: Process }) {
  return (
    <CenterWrap>
      <Card>
        <Title>프로세스</Title>
        <Diagram src={data.architectureImg} alt="시스템 아키텍처" />
        {data.erdImg && <Diagram src={data.erdImg} alt="ERD" />}
        {data.uxImg && <Diagram src={data.uxImg} alt="UX/UI 흐름도" />}
        <Desc>{data.description}</Desc>
      </Card>
    </CenterWrap>
  );
}
