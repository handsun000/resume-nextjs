import React from "react";
import styled from "styled-components";
import type { ResultReview } from "@/types/project";

const ReviewWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  color: #253a80;
  font-weight: 900;
  letter-spacing: 1.05px;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const Section = styled.section`
  background: #f5f7fc;
  border-radius: 17px;
  box-shadow: 0 3px 14px rgba(48, 70, 130, 0.10);
  padding: 1.5rem 1.8rem 1.0rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const SubLabel = styled.h3`
  color: #237abb;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.45rem;
`;

const List = styled.ul`
  margin: 0 0 1rem 1rem;
  color: #295457;
  font-size: 1.08rem;
  line-height: 1.7;
  list-style-type: disc;
`;

export default function ResultReview({ data }: { data: ResultReview }) {
  return (
    <ReviewWrap>
      <Title>프로젝트 결과 · 회고</Title>
      <Section>
        <SubLabel>성과/결과</SubLabel>
        <List>
          {data.results.map((result, i) => <li key={i}>{result}</li>)}
        </List>
        <SubLabel>주요 회고</SubLabel>
        <List>
          {data.reviews.map((review, i) => <li key={i}>{review}</li>)}
        </List>
      </Section>
    </ReviewWrap>
  );
}
