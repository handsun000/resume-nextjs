import React from "react";
import styled from "styled-components";
import type { ResultReview } from "@/types/project";

// 부모 Card 내부 컨테이너: 전체 레이아웃과 규칙 맞춤
const Wrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: transparent;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: transparent;
`;

const Th = styled.th`
  width: 120px;
  background: rgba(99, 102, 241, 0.08);
  color: #3730a3;
  font-weight: 800;
  font-size: 1.1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-right: none;
  padding: 1rem 0.8rem;
  text-align: center;
  vertical-align: middle;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Td = styled.td`
  background: transparent;
  color: #444;
  font-size: 1.1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-left: none;
  padding: 1rem 0.8rem;
  vertical-align: top;
  &:last-child {
    border-bottom-right-radius: 8px;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  list-style-type: disc;
`;

const Li = styled.li`
  margin-bottom: 0.7rem;
  line-height: 1.6;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function ResultReview({ data }: { data: ResultReview }) {
  return (
    <Wrap>
      <Title>프로젝트 결과/성과</Title>
      <StyledTable>
        <tbody>
          <tr>
            <Th>결과/성과</Th>
            <Td>
              <Ul>
                {data.results.map((ach, idx) => (
                  <Li key={idx}>{ach}</Li>
                ))}
              </Ul>
            </Td>
          </tr>
          <tr>
            <Th>리뷰</Th>
            <Td>
              <Ul>
                {data.reviews.map((review, idx) => (
                  <Li key={idx}>{review}</Li>
                ))}
              </Ul>
            </Td>
          </tr>
        </tbody>
      </StyledTable>
    </Wrap>
  );
}
