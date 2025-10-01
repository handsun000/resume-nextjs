"use client";
import React from "react";
import styled from "styled-components";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  padding: 0 1rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10rem;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 85%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  color: #333;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
  text-align: left;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.14);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Slogan = styled.p`
  font-size: 1.13rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #333;
  text-align: left;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

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

const Card = styled.div`
  background: rgba(255, 255, 255, 0.17);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(99, 102, 241, 0.09);
  padding: 1rem 1.5rem;
  flex: 1;
  min-width: 180px;
  color: #333;
  font-size: 1.04rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

const CardTitle = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  background: #fff; // 배경은 흰색
  color: #6366f1; // 글자색은 포인트 보라
  padding: 0.4rem 1.1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-size: 1.07rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #4f46e5;
    text-decoration: underline;
  }
`;

export default function Profile() {
  const skills = ["JAVA", "Spring", "JPA", "MySQL"];

  return (
    <Section>
      <ContentWrapper>
        <Left>
          <div>
            <ProfileImage>
              <Img
                src={`${process.env.NODE_ENV === "production"
                  ? "/resume-nextjs"
                  : ""
                  }/assets/image/profile/resume_photo.jpg`}
              />
            </ProfileImage>
            <Name>SON JIN YEONG</Name>
            <Slogan>끝까지, 함께, 더 나은 답을 찾는 개발자</Slogan>
          </div>
          <div>
            <Description>
              개발 과정에서 마주하는 어려움 앞에서도 포기하지 않고 끝까지
              해내려고 합니다.
              <br />
              문제를 해결하는 과정 하나하나가 저를 더 성장시키는 소중한 경험임을
              믿기에,
              <br />늘 새로운 해답을 찾아 도전하고 배우는 개발자가 되고자
              합니다.
            </Description>
          </div>
        </Left>
        <Right>
          <InfoCards>
            <Card>
              <CardTitle>
                <FaGraduationCap /> 학력
              </CardTitle>
              경성대학교 소프트웨어학과 졸업
            </Card>
            <Card>
              <CardTitle>
                <FaBriefcase /> 경력
              </CardTitle>
              부산보건고등학교 학교기업 백엔드 개발자(2021~2024)
            </Card>
            <Card>
              <CardTitle>
                <FaCertificate /> 자격사항
              </CardTitle>
              정보처리기사 (2021)
            </Card>
          </InfoCards>
          <BadgeList>
            {skills.map((skill, i) => (
              <Badge key={i}>{skill}</Badge>
            ))}
          </BadgeList>
          <SocialLinks>
            <SocialRow
              href="https://github.com/handsun000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> github.com/handsun000
            </SocialRow>
            <SocialRow href="mailto:handsun000@gmail.com">
              <FaEnvelope /> handsun000@gmail.com
            </SocialRow>
          </SocialLinks>
        </Right>
      </ContentWrapper>
    </Section>
  );
}
