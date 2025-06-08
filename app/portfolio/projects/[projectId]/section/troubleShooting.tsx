import React from "react";
import styled from "styled-components";
import type { TroubleshootingList } from "@/types/project";

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
  max-height: 80vh;
  overflow-y: auto;
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
  flex-shrink: 0;
`;

const Item = styled.div`
  margin-bottom: 2.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Feature = styled.div`
  color: #6366f1;
  font-weight: 700;
  font-size: 1.12rem;
  margin-bottom: 0.7rem;
`;

const Section = styled.section`
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.div`
  color: #6366f1;
  font-weight: 700;
  font-size: 1.09rem;
  margin-bottom: 0.15rem;
`;

const Content = styled.p`
  color: #444;
  font-size: 1.08rem;
  text-align: left;
  margin: 0 0 0.15rem 0;
  line-height: 1.7;
`;

export default function TroubleShooting({
  data,
}: {
  data: TroubleshootingList;
}) {
  console.log(data);
  return (
    <CenterWrap>
      <Card>
        <Title>트러블 슈팅</Title>
        {data.map((item, idx) => (
          <Item key={idx}>
            {item.feature && <Feature>{item.feature}</Feature>}
            <Section>
              <SubTitle>문제 상황</SubTitle>
              <Content>{item.problem}</Content>
            </Section>
            <Section>
              <SubTitle>원인 분석</SubTitle>
              <Content>{item.cause}</Content>
            </Section>
            <Section>
              <SubTitle>해결 방법</SubTitle>
              <Content>{item.solution}</Content>
            </Section>
          </Item>
        ))}
      </Card>
    </CenterWrap>
  );
}
