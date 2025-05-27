import React from "react";
import styled from "styled-components";
import type { Troubleshooting } from "@/types/project";

const CenterWrap = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 1.7rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 1.3rem;
`;

const SubTitle = styled.div`
  color: #6366f1;
  font-weight: 700;
  font-size: 1.09rem;
  margin-bottom: 0.2rem;
`;

const Content = styled.p`
  color: #444;
  font-size: 1.08rem;
  text-align: left;
  margin: 0 0 0.3rem 0;
  line-height: 1.7;
`;

export default function TroubleShooting({ data }: { data: Troubleshooting }) {
  return (
    <CenterWrap>
      <Card>
        <Title>트러블 슈팅</Title>
        <Section>
          <SubTitle>문제 상황</SubTitle>
          <Content>{data.problem}</Content>
        </Section>
        <Section>
          <SubTitle>원인 분석</SubTitle>
          <Content>{data.cause}</Content>
        </Section>
        <Section>
          <SubTitle>해결 방법</SubTitle>
          <Content>{data.solution}</Content>
        </Section>
      </Card>
    </CenterWrap>
  );
}
