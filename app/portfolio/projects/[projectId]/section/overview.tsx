import React from "react";
import styled from "styled-components";
import type { Overview } from "@/types/project";

const OverviewWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: flex-start; /* 필요 시 flex-start 혹은 center */
  justify-content: flex-start; /* 콘텐츠 정렬 조정 */
  background: transparent;
  box-sizing: border-box;
  padding: 0; /* 부모 카드가 이미 패딩 있음 */
`;


const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableTitle = styled.h2`
  font-size: 1.5rem;
  color: #243a6b;
  font-weight: 800;
  margin-bottom: 1.1rem;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.7rem;
  th, td {
    font-size: 1.07rem;
    padding: 0.6rem 1.05rem 0.6rem 0.5rem;
    vertical-align: top;
    word-break: break-word;
    line-height: 1.8;
    background: #f8f9fc;
  }
  th {
    color: #3751a6;
    font-weight: 600;
    text-align: left;
    width: 108px;
    background: #f2f4fa;
    border-radius: 8px 0 0 8px;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }
  td {
    color: #333;
    background: #f9f9fe;
    border-radius: 0 8px 8px 0;
    white-space: pre-line;
  }
`;

const FeatureList = styled.span`
  color: #3a2d9e;
  font-weight: 600;
`;

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
`;

const Badge = styled.span`
  background: #e3eaff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.97rem;
`;

export default function Overview({ data }: { data: Overview }) {
  return (
    <OverviewWrap>
      <ContentBox>
        <TableTitle>{data.title}</TableTitle>
        <InfoTable>
          <tbody>
            <tr>
              <th>기간</th>
              <td>{data.period}</td>
              <th>참여인원</th>
              <td>{data.members}</td>
            </tr>
            <tr>
              <th>프로젝트 소개</th>
              <td colSpan={3}>{data.summary}</td>
            </tr>
            <tr>
              <th>주요 내용</th>
              <td colSpan={3}>
                <ul style={{
                  paddingLeft: "1.1rem",
                  margin: "0",
                  color: "#444",
                  fontSize: "1.04rem",
                  lineHeight: "1.7",
                  listStyle: "disc outside"
                }}>
                  <li><strong>목적:</strong> {data.purpose}</li>
                  <li><strong>대상:</strong> {data.target}</li>
                  <li>
                    <strong>핵심기능: </strong>
                    <FeatureList>
                      {data.features.map((feature, index) => (
                        <span key={index}>
                          {feature}
                          {index !== data.features.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </FeatureList>
                  </li>
                </ul>
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
                {data.link ? (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#3751a6",
                      textDecoration: "underline",
                      wordBreak: "break-all"
                    }}
                  >
                    {data.link}
                  </a>
                ) : "없음"}
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </ContentBox>
    </OverviewWrap>
  );
}
