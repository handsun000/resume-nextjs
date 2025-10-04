import React from "react";
import styled from "styled-components";
import type { Overview } from "@/types/project";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.7rem;
  font-weight: 900;
  color: #243a6b;
  letter-spacing: 0.07em;
`;

const Description = styled.p`
  margin: 0;
  color: #556192;
  font-size: 1.07rem;
  font-weight: 600;
  line-height: 1.7;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.65rem;
  font-size: 1.05rem;

  th,
  td {
    padding: 0.6rem 1rem;
    vertical-align: top;
    background: #f9f9fe;
  }

  th {
    width: 110px;
    color: #4466a3;
    font-weight: 700;
    text-align: left;
    background: #f3f6fd;
    border-radius: 8px 0 0 8px;
    border-right: 3px solid #d8e1fa;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }

  td {
    color: #242b36;
    background: #f9f9fe;
    border-radius: 0 10px 10px 0;
    white-space: pre-line;
  }

  tr:not(:last-child) td,
  tr:not(:last-child) th {
    border-bottom: 1.5px dashed #e2e8f8;
  }
`;

const FeatureList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-weight: 600;
  font-size: 1.04rem;
  color: #3a2d9e;
`;

const FeatureItem = styled.span`
  &:not(:last-child)::after {
    content: "·";
    color: #888;
    margin-left: 12px;
  }
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
  font-size: 0.98rem;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 6px rgba(213, 219, 250, 0.4);
`;

const Url = styled.a`
  color: #3659ad;
  font-size: 1.03rem;
  word-break: break-all;
  font-weight: 600;
  text-decoration: underline dotted;
  transition: color 0.2s ease, text-decoration 0.2s ease;

  &:hover {
    color: #296cbd;
    text-decoration: underline solid;
  }
`;

interface OverviewProps {
  data: Overview;
}

export default function Overview({ data }: OverviewProps) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>{data.title}</Title>
          {data.summary && <Description>{data.summary}</Description>}
        </Header>

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
                <FeatureList>
                  {data.features.map((feature, i) => (
                    <FeatureItem key={i}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </td>
            </tr>

            <tr>
              <th>사용 기술</th>
              <td colSpan={3}>
                <BadgeList>
                  {data.stack.map((tech, idx) => (
                    <Badge key={`${tech}-${idx}`}>{tech}</Badge>
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
                  <Url
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.link}
                  </Url>
                ) : (
                  "없음"
                )}
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </Container>
    </Wrapper>
  );
}
