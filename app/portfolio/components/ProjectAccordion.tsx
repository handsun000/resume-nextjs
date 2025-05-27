"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../projects/projects";
import { ProjectDTO } from "@/types/project";

// 프로필과 같은 그라데이션 배경
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem 1rem; /* 상단 padding을 넉넉하게 */
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none; // 명시적으로 border 제거
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  margin-top: 3rem; /* 타이틀 위쪽에 여백 추가 */
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;

const SubTitle = styled.p`
  font-size: 1.13rem;
  color: #e0e7ef;
  margin-bottom: 2.2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 1100px;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(14px);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  gap: 2rem;
  padding: 2rem 2rem 2rem 2rem; /* 상단 padding은 줄이고, 좌우/하단은 유지 */
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 40px 0 rgba(31, 38, 135, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.27rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #3730a3;
`;

const CardDesc = styled.p`
  font-size: 1.02rem;
  color: #333;
  margin-bottom: 1.1rem;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: #b4b8ff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.96rem;
  margin-top: 0.3rem;
`;

const Period = styled.div`
  margin-top: 1rem;
  color: #7f7fd5;
  font-weight: 600;
  font-size: 0.98rem;
`;

const projects: ProjectDTO[] = [
  {
    id: 1,
    title: "중고거래, 경매 시스템",
    summary:
      "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
    overview: {
      image: "/assets/image/project/bidbuy/main.png",
      title: "중고거래, 경매 시스템",
      summary:
        "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
      purpose:
        "경매 기능을 통해 판매자가 최적의 조건에서 거래를 성사시킬 수 있도록 함",
      target:
        "투명하고 공정한 경쟁을 통해 원하는 상품을 합리적인 가격에 구매하고자 하는 사용자",
      features: "게시글 등록, 경매, 채팅, 알림, 결재",
      period: "2025.03 ~ 2025.04",
      members: "5명",
      stack:
        "Java, Kotlin, Spring Boot, MySQL, Redis, WebSocket, AWS, Docker, Swagger, NextJS",
      role: "채팅, 알림",
      link: "https://github.com/handsun000/WEB3_4_JSGYY_BE",
    },
    process: {
      architectureImg: "/assets/image/project/bidbuy/main.png",
      erdImg: "/assets/image/project/bidbuy/erd.png",
      uxImg: "/resume-nextjs/ux.png",
      description:
        "Spring Boot 기반의 REST API, MariaDB, Redis 캐시, AWS EC2 배포, CI/CD 파이프라인 구축 등",
    },
    implementation: {
      features: [
        {
          title: "채팅 기능",
          descriptionSummary:
            "WebSocket 기반의 실시간 채팅 기능을 구현했습니다. 메시지가 즉시 전달되는 것과 확장성을 고려해 설계했습니다.",
          descriptionFull: `채팅 기능은 실시간 양방향 통신과 메시지가 즉시 전달되는 것이 핵심이었기 때문에, Spring Boot 기반의 WebSocket 서버와 STOMP 프로토콜을 활용해 구현했습니다. 
            
            WebSocket을 선택한 이유는, 클라이언트(브라우저)와 서버가 하나의 연결로 직접 실시간으로 메시지를 주고받을 수 있기 때문입니다.
            SSE, HTTP 폴링 방식보다 훨씬 빠르고, 지연 없이 동작하는 점이 큰 장점이었습니다.

            여러 서버 인스턴스 간 메시지 동기화를 위해 메시지 브로커로 Redis Pub/Sub을 도입했습니다. Kafka나 RabbitMQ는 대규모 데이터 스트리밍이나 복잡한 시스템 간 메시지 처리에 더 적합하다고 판단했습니다.
            Redis Pub/Sub은 구조가 단순하면서도 여러 서버에 메시지를 빠르게 전달할 수 있다는 점에서 실시간 채팅에 적합하다고 판단해 선택했습니다.

            이렇게 WebSocket과 Redis Pub/Sub을 활용하여,
            채팅 메시지가 어디서든 빠르고 안정적으로 전달되는 실시간 채팅 서비스를 구축할 수 있었습니다.`,
          archImage: {
            src: "/assets/image/project/bidbuy/chat.png",
            label: "채팅 구조",
          },
          pageImages: [
            {
              src: "/assets/image/project/bidbuy/chatPage.png",
              label: "채팅 페이지",
            },
          ],
        },
        {
          title: "알림 기능",
          descriptionSummary:
            "알림 기능은 기존 채팅 시스템에서 사용한 WebSocket과 Redis Pub/Sub 구조를 그대로 활용해, 실시간성과 효율성을 모두 만족하도록 구현했습니다.",

          descriptionFull: `
            알림 기능은 사용자에게 중요한 이벤트를 실시간으로 빠르게 전달하는 것이 핵심이었습니다.  
            이미 채팅 기능에서 WebSocket과 Redis Pub/Sub 조합을 사용하고 있었기 때문에,  
            알림 기능 역시 동일한 구조를 적용해 개발 효율성과 시스템 일관성을 높였습니다.

            Kafka나 RabbitMQ 같은 메시지 브로커도 고려했지만,  
            복잡도와 운영 비용을 줄이기 위해 기존 인프라를 그대로 활용하는 것이 더 적합하다고 판단했습니다.

            이렇게 WebSocket과 Redis Pub/Sub을 활용하면서,  
            알림 메시지를 빠르고 안정적으로 전달할 수 있었고  
            시스템 구조도 단순하게 유지할 수 있었습니다.
            `,
          archImage: {
            src: "/assets/image/project/bidbuy/alarm.png",
            label: "알림 구조",
          },
          pageImages: [],
        },
        // ...다른 기능도 추가 가능
      ],
    },
    troubleshooting: {
      problem:
        "처음에는 WebSocket만 적용하면 모든 사용자가 실시간으로 채팅할 수 있다고 생각했지만, 메시지 브로커 없이 서버가 다르면 서로 다른 서버에 접속한 사용자끼리는 채팅 메시지가 전달되지 않는다는 구조적 한계를 인지하게 되었습니다.",
      cause:
        "WebSocket 연결은 각 서버 인스턴스에 독립적으로 맺어지기 때문에, 별도의 메시지 브로커 없이 서버 간 메시지 동기화가 불가능하다는 원리를 제대로 이해하지 못했던 것이 원인이었습니다.",
      solution:
        "메시지 브로커의 필요성과 Pub/Sub 구조에 대해 학습한 뒤, Redis Pub/Sub을 도입해 모든 서버가 동일한 채널을 구독하도록 구조를 개선했습니다. 이를 통해 서버가 여러 대여도 모든 사용자가 실시간으로 메시지를 주고받을 수 있게 되었습니다.",
    },
    resultreview: {
      results: [
        "데이터 처리 시간 6시간 → 15분 단축",
        "시스템 안정성 99.9% 달성",
        "운영 효율성 30% 향상",
      ],
      reviews: [
        "데이터 처리 시간 6시간 → 15분 단축",
        "시스템 안정성 99.9% 달성",
        "운영 효율성 30% 향상",
      ],
    },
    review: {
      content:
        "실제 서비스 운영 경험을 통해 문제 해결력과 협업 능력을 키웠습니다.",
      regret: "초기 테스트 자동화가 부족했던 점",
      plan: "차기 프로젝트에서는 CI/CD와 자동화 테스트를 강화할 계획",
    },
  },
  {
    id: 2,
    title: "쇼핑몰 백엔드 개발",
    summary: "대형 쇼핑몰의 주문/결제 시스템 개발 및 마이크로서비스 적용",
    overview: {
      image: "/assets/image/project/bidbuy/main.png",
      title: "중고거래, 경매 시스템",
      summary:
        "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
      purpose:
        "경매 기능을 통해 판매자가 최적의 조건에서 거래를 성사시킬 수 있도록 함",
      target:
        "투명하고 공정한 경쟁을 통해 원하는 상품을 합리적인 가격에 구매하고자 하는 사용자",
      features: "게시글 등록, 경매, 채팅, 알림, 결재",
      period: "2025.03 ~ 2025.04",
      members: "5명",
      stack:
        "Java, Kotlin, Spring Boot, MySQL, Redis, WebSocket, AWS, Docker, Swagger, NextJS",
      role: "채팅, 알림",
      link: "https://github.com/handsun000/WEB3_4_JSGYY_BE",
    },
    process: {
      architectureImg: "/resume-nextjs/shop-architecture.png",
      erdImg: "/assets/image/project/bidbuy/erd.png",
      uxImg: "/resume-nextjs/shop-ux.png",
      description:
        "Node.js 기반의 주문/결제 API, MongoDB, AWS S3, Docker 컨테이너, CI/CD 구축",
    },
    implementation: {
      features: [
        {
          title: "채팅 기능",
          descriptionSummary: "",
          descriptionFull:
            "채팅 기능은 실시간 양방향 통신과 낮은 레이턴시가 핵심이었기 때문에, Spring Boot 기반의 WebSocket 서버와 STOMP 프로토콜을 활용해 구현했습니다. WebSocket을 선택한 이유는, 클라이언트(브라우저)와 서버가 단일 TCP 연결을 통해 직접 실시간으로 메시지를 주고받을 수 있어 HTTP 폴링 방식보다 훨씬 빠르고 효율적이기 때문입니다. Kafka나 RabbitMQ 같은 메시지 브로커도 고려했지만, 이들은 주로 대규모 데이터 스트리밍이나 복잡한 백엔드 시스템 간 메시지 처리에 적합하며, 실제 채팅처럼 클라이언트와 서버가 직접 빠르게 통신해야 하는 경우에는 오히려 아키텍처가 복잡해지고 레이턴시가 증가할 수 있습니다. 실제 구현에서는, STOMP 프로토콜을 통해 채팅방 구독/발행 구조를 간단하게 만들었고, Redis Pub/Sub를 추가해 여러 서버 인스턴스 간에도 메시지 동기화가 가능하도록 설계했습니다. 이 과정에서 동시 접속자 수와 메시지 처리량을 고려해, 구조를 최대한 단순하게 유지하면서도 확장성을 확보할 수 있도록 했습니다. 결론적으로, WebSocket은 실시간 채팅에 필요한 낮은 레이턴시와 직접 통신 구조, 그리고 단순한 아키텍처로 빠른 개발과 안정적인 운영이 가능하다는 점에서 가장 적합한 선택이었습니다.",
          archImage: { src: "/assets/chat-arch.png", label: "채팅 구조" },
          pageImages: [
            { src: "/assets/chat-ui1.png", label: "채팅 페이지" },
            { src: "/assets/chat-ui2.png", label: "채팅 페이지" },
          ],
        },
        {
          title: "알림 기능",
          descriptionSummary: "",
          descriptionFull:
            "알림 기능은 Redis Pub/Sub 구조로 확장성과 속도를 높였습니다. ...",
          archImage: { src: "/assets/chat-arch.png", label: "채팅 구조" },
          pageImages: [
            { src: "/assets/chat-ui1.png", label: "채팅 페이지" },
            { src: "/assets/chat-ui2.png", label: "채팅 페이지" },
          ],
        },
        // ...다른 기능도 추가 가능
      ],
    },
    troubleshooting: {
      problem: "결제 트랜잭션 중 데이터 불일치 문제 발생",
      cause: "",
      solution: "트랜잭션 롤백 및 재처리 로직 도입, 결제 API 이중 검증",
    },
    resultreview: {
      results: [
        "주문 처리 속도 30% 향상",
        "결제 오류율 0.1% 미만 유지",
        "서비스 무중단 배포 성공",
      ],
      reviews: [
        "주문 처리 속도 30% 향상",
        "결제 오류율 0.1% 미만 유지",
        "서비스 무중단 배포 성공",
      ],
    },
    review: {
      content: "마이크로서비스 분리와 트랜잭션 안정성 확보 경험을 쌓았습니다.",
      regret: "초기 설계 단계에서의 요구사항 미흡",
      plan: "앞으로는 요구사항 정의와 설계 문서화에 더 신경 쓸 예정",
    },
  },
  // ... 추가 프로젝트
];

const ProjectAccordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Section>
      <Title>프로젝트</Title>
      <SubTitle>실제 경험과 성과 중심의 대표 프로젝트를 소개합니다.</SubTitle>
      <AnimatePresence>
        {selected === null ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <Grid>
              {projects.map((project) => (
                <Card
                  key={project.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelected(project.id)}
                >
                  <CardTitle>{project.title}</CardTitle>
                  <CardDesc>{project.summary}</CardDesc>
                  <BadgeList>
                    {project.overview.stack.split(",").map((tech, i) => (
                      <Badge key={i}>{tech.trim()}</Badge>
                    ))}
                  </BadgeList>
                  <Period>{project.overview.period}</Period>
                </Card>
              ))}
            </Grid>
          </motion.div>
        ) : (
          <Project
            key="slider"
            project={projects.find((p) => p.id === selected)!}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProjectAccordion;
