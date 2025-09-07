import React from "react";
import styled from "styled-components";
import type { Overview } from "@/types/project";

const OverviewWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* center → flex-start로 변경 */
  justify-content: center;
  background: transparent;
  box-sizing: border-box;
  padding: 4vh 0; /* 상하 여백 추가 */
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(31, 38, 135, 0.09);
  max-width: 1100px;
  width: 100%;
  margin: 0 2vw; /* 6vh 2vw → 0 2vw로 변경 */
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0 2vw; /* 2vw → 0 2vw로 변경 */
  }
`;

const Left = styled.div`
  flex: 1.3;
  background: #f2f4fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  min-width: 380px;
  @media (max-width: 900px) {
    padding: 2rem 1rem;
    min-width: unset;
  }
`;

const Thumb = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.09);
  margin-bottom: 1.5rem;
  background: #fff;
  object-fit: cover;
`;

const LeftTitle = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  color: #2d3559;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const Right = styled.div`
  flex: 1.6;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  min-width: 360px;
  max-height: 100vh; /* 추가: 세로 공간 제한 */
  overflow-y: auto; /* 추가: 내용이 넘칠 때 스크롤 */
  @media (max-width: 900px) {E
    padding: 2rem 1rem;
    max-height: unset; /* 모바일에서는 제한 해제 */
    overflow-y: visible; /* 모바일에서는 스크롤 해제 */
  }
`;

const TableTitle = styled.h2`
  font-size: 1.45rem;
  color: #243a6b;
  font-weight: 800;
  margin-bottom: 1.2rem;
`;

const InfoTableWrap = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.7rem;
  margin-bottom: 1.5rem;
  th,
  td {
    font-size: 1.08rem;
    padding: 0.7rem 1.2rem 0.7rem 0.5rem;
    vertical-align: top;
    word-break: break-word;
    line-height: 1.8;
    background: #f9f9fe;
  }
  th {
    color: #3751a6;
    font-weight: 700;
    text-align: left;
    width: 120px;
    background: #f2f4fa;
    letter-spacing: 0.02em;
    padding-right: 1.2rem;
    white-space: nowrap;
    border-radius: 8px 0 0 8px;
  }
  td {
    color: #333;
    background: #f9f9fe;
    border-radius: 0 8px 8px 0;
    white-space: pre-line;
  }
  ul {
    margin: 0.1rem 0 0 1.1rem;
    padding: 0;
    color: #444;
    font-size: 1.04rem;
    line-height: 1.7;
    list-style: disc outside;
  }
  li {
    margin-bottom: 0.2rem;
  }
`;

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
`;

const Badge = styled.span`
  background: #e3eaff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.97rem;
`;

export default function Overview({ data }: { data: Overview }) {
  return (
    <OverviewWrap>
      <ContentBox>
        <Left>
          <Thumb
            src={`${
              process.env.NODE_ENV === "production" ? "/resume-nextjs" : ""
            }${data.image}`}
            alt="프로젝트 썸네일"
          />
          <LeftTitle>[{data.title} 메인페이지]</LeftTitle>
        </Left>
        <Right>
          <TableTitle>프로젝트 이름: {data.title}</TableTitle>
          <InfoTableWrap>
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
                    <ul>
                      <li>
                        <strong>목적:</strong> {data.purpose}
                      </li>
                      <li>
                        <strong>대상:</strong> {data.target}
                      </li>
                      <li>
                        <strong>핵심기능:</strong> {data.features.map((feature, index) => (
                          <span key={index}>
                            {feature}
                            {index !== data.features.length-1? ", " : ""}
                          </span>
                        ))}
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>사용기술</th>
                  <td colSpan={3}>
                    <BadgeList>
                      {data.stack.map((tech, i) => (
                        <Badge key={i}>{tech.trim()}</Badge>
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
                          wordBreak: "break-all",
                        }}
                      >
                        {data.link}
                      </a>
                    ) : (
                      "없음"
                    )}
                  </td>
                </tr>
              </tbody>
            </InfoTable>
          </InfoTableWrap>
        </Right>
      </ContentBox>
    </OverviewWrap>
  );
}
