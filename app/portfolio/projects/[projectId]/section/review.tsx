import React from "react";
import styled from "styled-components";
import type { Review } from "@/types/project";

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
  max-width: 700px;
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

const Content = styled.p`
  color: #444;
  font-size: 1.08rem;
  text-align: center;
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.b`
  color: #6366f1;
  font-weight: 700;
`;

export default function Review({ data }: { data: Review }) {
  return (
    <CenterWrap>
      <Card>
        <Title>리뷰/회고</Title>
        <Content>
          {data.content}
          <br />
          <SubTitle>아쉬운 점:</SubTitle> {data.regret}
          <br />
          <SubTitle>보완 계획:</SubTitle> {data.plan}
        </Content>
      </Card>
    </CenterWrap>
  );
}
