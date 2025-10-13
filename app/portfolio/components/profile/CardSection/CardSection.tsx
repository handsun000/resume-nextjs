import React from "react";
import InfoCard from "./InfoCard";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";
import styled from "styled-components";

const InfoCards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  width: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const cardData = [
    {
        icon: <FaGraduationCap />,
        title: "학력",
        desc: "경성대학교 소프트웨어학과 졸업",
    },
    {
        icon: <FaBriefcase />,
        title: "경력",
        desc: "부산보건고등학교 학교기업 백엔드 개발자(2021~2024)",
    },
    {
        icon: <FaCertificate />,
        title: "자격사항",
        desc: "정보처리기사 (2021)",
    },
];

export default function CardSection() {
    return (
        <InfoCards>
            {cardData.map((card) => (
                <InfoCard key={card.title} icon={card.icon} title={card.title}>
                    {card.desc}
                </InfoCard>
            ))}
        </InfoCards>
    );
}
