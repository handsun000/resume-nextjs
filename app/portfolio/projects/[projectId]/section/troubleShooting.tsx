import React from "react";
import styled from "styled-components";
import type { TroubleshootingList } from "@/types/project";

const TroubleWrap = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #35499a;
  font-weight: 800;
  margin-bottom: 1.6rem;
  letter-spacing: 1px;
  text-align: center;
`;

const Item = styled.section`
  background: #f6f8fc;
  border-radius: 16px;
  box-shadow: 0 2px 14px rgba(60, 110, 150, 0.08);
  padding: 1.8rem 1.5rem 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: box-shadow 0.22s;
  &:hover {
    box-shadow: 0 4px 24px rgba(60,110,150,0.13);
    background: #f2f6ff;
  }
`;

const Feature = styled.div`
  color: #27b67a;
  font-weight: 700;
  font-size: 1.18rem;
  margin-bottom: 0.3rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const SubTitle = styled.div`
  color: #308ce8;
  font-weight: 700;
  font-size: 1.03rem;
  margin-bottom: 0.15rem;
`;

const Content = styled.p`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.68;
  margin: 0;
  word-break: keep-all;
`;

export default function TroubleShooting({ data }: { data: TroubleshootingList }) {
  return (
    <TroubleWrap>
      <Title>트러블 슈팅</Title>
      {data.map((item, idx) => (
        <Item key={idx}>
          {item.feature && <Feature>{item.feature}</Feature>}
          <Row>
            <Section>
              <SubTitle>문제 상황</SubTitle>
              <Content>{item.problem}</Content>
            </Section>
            <Section>
              <SubTitle>원인 분석</SubTitle>
              <Content>{item.cause}</Content>
            </Section>
          </Row>
          <Section>
            <SubTitle>해결 방법</SubTitle>
            <Content>{item.solution}</Content>
          </Section>
        </Item>
      ))}
    </TroubleWrap>
  );
}
