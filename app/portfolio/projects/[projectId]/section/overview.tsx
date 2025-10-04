import React from "react";
import styled from "styled-components";
import type { Overview } from "@/types/project";

const OverviewWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  width: 100%;
`;

const TitleArea = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const TableTitle = styled.h2`
  font-size: 1.7rem;
  color: #243a6b;
  font-weight: 900;
  margin: 0;
  letter-spacing: 0.07em;
`;

const Summary = styled.p`
  color: #556192;
  font-size: 1.07rem;
  margin: 0;
  font-weight: 600;
  line-height: 1.71;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.65rem;
  font-size: 1.07rem;
  th, td {
    padding: 0.6rem 1.1rem 0.6rem 0.7rem;
    vertical-align: top;
    background: #f8f9fc;
  }
  th {
    color: #4466a3;
    font-weight: 700;
    text-align: left;
    width: 106px;
    background: #f3f6fd;
    border-radius: 8px 0 0 8px;
    white-space: nowrap;
    font-size: 1.09rem;
    letter-spacing: 0.03em;
    border-right: 3px solid #d8e1fa;
  }
  td {
    color: #242b36;
    background: #f9f9fe;
    border-radius: 0 11px 11px 0;
    white-space: pre-line;
    font-size: 1.07rem;
  }
  tr:not(:last-child) td, tr:not(:last-child) th {
    border-bottom: 1.5px dashed #e2e8f8;
  }
`;

const FeatureTagList = styled.div`
  display: flex;
  gap: 0.44rem 0.9rem;
  flex-wrap: wrap;
  margin-top: 0.1rem;
`;

const FeatureTag = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #f3eefd 60%, #e8f8fa 100%);
  color: #5f38d6;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.04rem;
  padding: 0.38rem 1.18rem;
  box-shadow: 0 1px 5px #ece8fd44;
  border: 1.5px solid #cbc6f7;
  letter-spacing: 0.01em;
`;

const ListLabel = styled.span`
  color: #38a190;
  font-weight: 700;
`;

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0.75rem;
`;

const Badge = styled.span`
  background: #e3eaff;
  color: #495bea;
  padding: 0.36rem 1rem;
  border-radius: 13px;
  font-weight: 700;
  font-size: 0.99rem;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 6px #d5dbfa66;
`;

const Url = styled.a`
  color: #3659ad;
  font-size: 1.03rem;
  word-break: break-all;
  text-decoration: underline dotted;
  font-weight: 600;
  &:hover {
    color: #296cbd;
    text-decoration: underline solid;
  }
`;

export default function Overview({ data }: { data: Overview }) {
  return (
    <OverviewWrap>
      <ContentBox>
        <TitleArea>
          <TableTitle>{data.title}</TableTitle>
          {data.summary && <Summary>{data.summary}</Summary>}
        </TitleArea>
        <InfoTable>
          <tbody>
            <tr>
              <th>기간</th>
              <td>{data.period}</td>
              <th>참여인원</th>
              <td>{data.members}</td>
            </tr>
            <tr>
              <th>목적</th>
              <td colSpan={3}>{data.purpose}</td>
            </tr>
            <tr>
              <th>대상</th>
              <td colSpan={3}>{data.target}</td>
            </tr>
<tr>
  <th>주요 기능</th>
  <td colSpan={3}>
    <FeatureTagList>
      {data.features.map((feature, i) => (
        <FeatureTag key={i}>{feature}</FeatureTag>
      ))}
    </FeatureTagList>
  </td>
</tr>
            <tr>
              <th>사용기술</th>
              <td colSpan={3}>
                <BadgeList>
                  {data.stack.map((tech, i) => (
                    <Badge key={tech + i}>{tech}</Badge>
                  ))}
                </BadgeList>
              </td>
            </tr>
            <tr>
              <th>역할</th>
              <td colSpan={3}>{data.role}</td>
            </tr>
            <tr>
              <th>링크</th>
              <td colSpan={3}>
                {data.link
                  ? <Url href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</Url>
                  : "없음"}
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </ContentBox>
    </OverviewWrap>
  );
}
