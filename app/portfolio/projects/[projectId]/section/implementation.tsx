import React from "react";
import styled from "styled-components";
import type { Implementation } from "@/types/project";

const CenterWrap = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: transparent;
  overflow-y: auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2.5rem 2.5rem 2.2rem 2.5rem;
  max-width: 950px;
  width: 100%;
  margin: 4vh 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: 90vh;
  overflow-y: auto;
  @media (max-width: 900px) {
    padding: 1.5rem 0.7rem;
    max-height: unset;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 2.2rem;
  text-align: center;
`;

const FeatureSection = styled.section`
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  color: #4f46e5;
  font-weight: 700;
  margin-bottom: 0.6rem;
  text-align: left;
`;

const DescSummary = styled.span`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.8;
`;

const ReadMoreLink = styled.button`
  background: none;
  border: none;
  color: #6366f1;
  font-size: 1.01rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0 0.2em;
  margin-left: 0.2em;
  text-decoration: underline;
  vertical-align: baseline;
  display: inline;
  &:hover {
    color: #3730a3;
    text-decoration: underline;
  }
`;

const DescFull = styled.div<{ open: boolean }>`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.8;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  text-align: left;
  white-space: pre-line;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArchImage = styled.img`
  width: 320px;
  max-width: 90vw;
  border-radius: 14px;
  box-shadow: 0 2px 14px rgba(99, 102, 241, 0.09);
  background: #fff;
  @media (max-width: 700px) {
    width: 90vw;
    max-width: 98vw;
  }
`;

const ArchLabel = styled.div`
  margin-top: 7px;
  color: #6366f1;
  font-size: 1.01rem;
  text-align: center;
`;

const PageGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PageImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageImage = styled.img`
  width: 495px;
  max-width: 95vw;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgba(99, 102, 241, 0.08);
  background: #fff;
  @media (max-width: 700px) {
    width: 90vw;
    max-width: 98vw;
  }
`;

const PageLabel = styled.div`
  margin-top: 5px;
  color: #6366f1;
  font-size: 0.98rem;
  text-align: center;
`;

export default function Implementation({ data }: { data: Implementation }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <CenterWrap>
      <Card>
        <Title>구현 기능 및 개발과정</Title>
        {data.features.map((feature, idx) => {
          // summary가 없으면 description 앞부분 80자 자동 요약
          const summary =
            feature.descriptionSummary ||
            feature.descriptionFull.slice(0, 80) +
              (feature.descriptionFull.length > 80 ? "..." : "");
          const isOpen = openIdx === idx;
          const showToggle = feature.descriptionFull.length > summary.length;

          return (
            <FeatureSection key={idx}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <DescSummary>
                {summary}
                {showToggle && !isOpen && (
                  <ReadMoreLink
                    aria-label="자세히 보기"
                    onClick={() => setOpenIdx(idx)}
                  >
                    자세히 보기 <span aria-hidden="true">▼</span>
                  </ReadMoreLink>
                )}
              </DescSummary>
              <DescFull open={isOpen}>
                {feature.descriptionFull}
                {showToggle && isOpen && (
                  <ReadMoreLink
                    aria-label="간단히"
                    onClick={() => setOpenIdx(null)}
                  >
                    간단히 <span aria-hidden="true">▲</span>
                  </ReadMoreLink>
                )}
              </DescFull>
              <ImageRow>
                {feature.archImage?.src && (
                  <ImageBlock>
                    <ArchImage
                      src={`${
                        process.env.NODE_ENV === "production"
                          ? "/resume-nextjs"
                          : ""
                      }${feature.archImage.src}`}
                      alt={feature.archImage.label || "구조도"}
                    />
                    <ArchLabel>{feature.archImage.label || ""}</ArchLabel>
                  </ImageBlock>
                )}
                {feature.pageImages && feature.pageImages.length > 0 && (
                  <PageGrid>
                    {feature.pageImages.map((img, i) => (
                      <PageImageBlock key={i}>
                        <PageImage
                          src={`${
                            process.env.NODE_ENV === "production"
                              ? "/resume-nextjs"
                              : ""
                          }${img.src}`}
                          alt={img.label || "페이지"}
                        />
                        <PageLabel>{img.label || ""}</PageLabel>
                      </PageImageBlock>
                    ))}
                  </PageGrid>
                )}
              </ImageRow>
            </FeatureSection>
          );
        })}
      </Card>
    </CenterWrap>
  );
}
