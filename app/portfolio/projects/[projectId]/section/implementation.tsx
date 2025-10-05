import React from "react";
import styled from "styled-components";
import type { Implementation } from "@/types/project";

const CenterWrap = styled.div`
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
  color: #243a6b;
  font-weight: 900;
  margin-bottom: 2.2rem;
  text-align: center;
  letter-spacing: 0.02em;
`;

const FeatureSection = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1.5px dashed #e2e6f4;
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.17rem;
  color: #344269;
  font-weight: 700;
  margin-bottom: 0.7rem;
`;

const DescSummary = styled.span`
  color: #323b4a;
  font-size: 1.09rem;
  line-height: 1.72;
  background: #f4f6fb;
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  display: inline-block;
`;

const ReadMoreLink = styled.button`
  background: none;
  border: none;
  color: #243a6b;
  font-size: 1.01rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0 0.2em;
  margin-left: 0.7em;
  text-decoration: underline;
  vertical-align: baseline;
  display: inline;
  &:hover {
    color: #334587;
    text-decoration: underline;
  }
`;

const DescFull = styled.div<{ open: boolean }>`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.78;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  text-align: left;
  white-space: pre-line;
  background: #f7f9fc;
  border-radius: 8px;
  padding: ${({ open }) => (open ? "0.9rem 1rem" : "0 1rem")};
  max-height: ${({ open }) => (open ? "1200px" : "0")};
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: max-height 0.46s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.34s;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0 2px 14px rgba(36, 58, 107, 0.08);
  background: #fff;
  @media (max-width: 700px) {
    width: 90vw;
    max-width: 98vw;
  }
`;

const ArchLabel = styled.div`
  margin-top: 7px;
  color: #506699;
  font-size: 1.01rem;
  text-align: center;
`;

const PageGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
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
  box-shadow: 0 1px 7px rgba(36,58,107,0.08);
  background: #fff;
  @media (max-width: 700px) {
    width: 90vw;
    max-width: 98vw;
  }
`;

const PageLabel = styled.div`
  margin-top: 5px;
  color: #506699;
  font-size: 0.98rem;
  text-align: center;
`;

export default function Implementation({ data }: { data: Implementation }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <CenterWrap>
      <Title>구현 기능 및 개발과정</Title>
      {data.features.map((feature, idx) => {
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
    </CenterWrap>
  );
}
