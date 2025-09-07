import { ProjectDTO } from "@/types/project";

export const projects: ProjectDTO[] = [
  {
    id: 1,
    title: "중고거래, 경매 시스템",
    summary:
      "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공합니다",
    overview: {
      image: "/assets/image/project/bidbuy/main.png",
      title: "중고거래, 경매 시스템",
      summary:
        "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공합니다",
      purpose:
        "경매 기능을 통해 판매자가 최적의 조건에서 거래를 성사시킬 수 있도록 함",
      target:
        "투명하고 공정한 경쟁을 통해 원하는 상품을 합리적인 가격에 구매하고자 하는 사용자",
      features: ["게시글 등록", "경매", "채팅", "알림", "결재"],
      period: "2025.03 ~ 2025.04",
      members: "5명",
      stack: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "MySQL",
        "Redis",
        "WebSocket",
        "AWS",
        "Docker",
        "Swagger",
        "NextJS",
      ],
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
            "기존 채팅 시스템에서 사용한 WebSocket과 Redis Pub/Sub 구조를 그대로 활용해, 실시간성과 효율성을 모두 만족하도록 구현했습니다.",
          descriptionFull:
            `알림 기능은 사용자에게 중요한 이벤트를 실시간으로 빠르게 전달하는 것이 핵심이었습니다.
이미 채팅 기능에서 WebSocket과 Redis Pub/Sub 조합을 사용하고 있었기 때문에,
알림 기능 역시 동일한 구조를 적용해 개발 효율성과 시스템 일관성을 높였습니다.

Kafka나 RabbitMQ 같은 메시지 브로커도 고려했지만,
복잡도와 운영 비용을 줄이기 위해 기존 인프라를 그대로 활용하는 것이 더 적합하다고 판단했습니다.

이렇게 WebSocket과 Redis Pub/Sub을 활용하면서,
알림 메시지를 빠르고 안정적으로 전달할 수 있었고
시스템 구조도 단순하게 유지할 수 있었습니다.`,
          archImage: {
            src: "/assets/image/project/bidbuy/alarm.png",
            label: "알림 구조",
          },
          pageImages: [],
        },
      ],
    },
    troubleshootingList: [
      {
        feature: "채팅, 알람",
        problem:
          "처음에는 WebSocket만 적용하면 모든 사용자가 실시간으로 채팅할 수 있다고 생각했지만, 메시지 브로커 없이 서버가 다르면 서로 다른 서버에 접속한 사용자끼리는 채팅 메시지가 전달되지 않는다는 구조적 한계를 인지하게 되었습니다.",
        cause:
          "WebSocket 연결은 각 서버 인스턴스에 독립적으로 맺어지기 때문에, 별도의 메시지 브로커 없이 서버 간 메시지 동기화가 불가능하다는 원리를 제대로 이해하지 못했던 것이 원인이었습니다.",
        solution:
          "메시지 브로커의 필요성과 Pub/Sub 구조에 대해 학습한 뒤, Redis Pub/Sub을 도입해 모든 서버가 동일한 채널을 구독하도록 구조를 개선했습니다. 이를 통해 서버가 여러 대여도 모든 사용자가 실시간으로 메시지를 주고받을 수 있게 되었습니다.",
      },
    ],
    resultreview: {
      results: [
        "채팅방 목록 조회 및 알림 전송을 비동기로 처리하여, 메시지 전송 시 평균 응답 속도개선",
        "Redis를 도입해 다중 서버 환경에서도 채팅 메시지, 알림이 안정적으로 전달되도록 구현",
        "메시지 전달 실패 시 지수 백오프 방식으로 재전송 로직을 적용",
      ],
      reviews: [
        "비동기 처리와 메시지 브로커 도입 과정을 통해 실시간 시스템의 구조와 동작 원리를 이해할 수 있었습니다.",
        "지수 백오프 재전송 로직을 구현하며, 장애 상황에서도 서비스 신뢰성을 높이는 방법을 배웠습니다.",
      ],
    },
  },
  {
    id: 2,
    title: "도서 추천 및 리뷰 서비스",
    summary:
      "책을 쉽고 재미있게 경험할 수 있도록 신뢰할 수 있는 도서 추천 및 리뷰, 소통 커뮤니티를 제공합니다",
    overview: {
      image: "/assets/image/project/book/main.png",
      title: "도서 추천 및 리뷰 서비스",
      summary:
        "책을 쉽고 재미있게 경험하도록 신뢰할 수 있는 추천과 리뷰, 소통 환경을 제공합니다",
      purpose:
        "사용자 간 자연스러운 독서 습관 형성과 참여 촉진에 중점",
      target:
        "신뢰도 높은 리뷰를 기반으로 책 선택을 원하는 독자",
      features: [
        "로그인",
        "도서 검색",
        "리뷰 작성",
        "팔로우",
        "찜",
        "랭킹",
        "챌린지",
        "알림",
        "챗봇",
      ],
      period: "2025.01 ~ 2025.03",
      members: "6명",
      stack: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Coroutine",
        "Jsoup",
        "MySQL",
        "Redis",
        "SSE",
        "Swagger",
        "NextJS",
      ],
      role: "로그인, 스웨거, 깃허브 관리, 챌린지",
      link: "https://github.com/handsun000/NBE3-4-3-Team15",
    },
    process: {
      architectureImg: "/resume-nextjs/shop-architecture.png",
      erdImg: "/assets/image/project/bidbuy/erd.png",
      uxImg: "/resume-nextjs/shop-ux.png",
      description:
        "Node.js 기반 주문/결제 API, MongoDB, AWS S3, Docker 컨테이너, CI/CD 구축",
    },
    implementation: {
      features: [
        {
          title: "로그인 기능",
          descriptionSummary:
            "네이버, 카카오, 구글 소셜 로그인으로 별도 회원가입 없이 진입 가능",
          descriptionFull:
            "소셜 로그인 API 활용, 사용자 자동 회원가입 처리로 접근성 개선",
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/book/login.png",
              label: "로그인 페이지",
            },
          ],
        },
        {
          title: "도서 목표 챌린지 기능",
          descriptionSummary:
            "관리자가 챌린지를 생성하고 사용자가 예치금 등록으로 참여하도록 구현",
          descriptionFull:
            "챌린지 기간 동안 댓글/리뷰 작성 인증, 상금 분배 자동화",
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/book/challenge1.png",
              label: "챌린지 목록 페이지",
            },
            {
              src: "/assets/image/project/book/challenge2.png",
              label: "내 챌린지 페이지",
            },
          ],
        },
      ],
    },
    troubleshootingList: [
      {
        feature: "로그인 기능",
        problem:
          "소셜 로그인 인증 실패 및 일부 사용자 정보 미수집",
        cause:
          "OAuth 설정 오류, 콜백 URL 문제, 토큰 만료, 필수 정보 미동의",
        solution:
          "API 문서 재검토, 예외처리 및 안내 메시지 강화",
      },
      {
        feature: "챌린지 시스템",
        problem:
          "예치금 등록 후 참여 상태 불일치, 인증 누락",
        cause:
          "비동기 트랜잭션 처리 미흡, 인증 시간 기준 부정확",
        solution:
          "트랜잭션 일원화, 인증 기준 시간 명확화",
      },
    ],
    resultreview: {
      results: [
        "소셜 로그인 도입으로 접근성 향상",
        "SSE+Redis Pub/Sub으로 알림 실시간성 강화",
        "활발한 독서 커뮤니티 형성 유도",
      ],
      reviews: [
        "예외 및 장애 직접 해결 경험 강화",
        "팀 협업과 소통 능력 증진",
      ],
    },
  },
  {
    id: 3,
    title: "Cafe Management 서비스",
    summary:
      "커피 주문/배송 상태 확인 가능, 사용자와 관리자 역할 분리 시스템",
    overview: {
      image: "/assets/image/project/cafe/main.png",
      title: "Cafe Management 서비스",
      summary:
        "사용자 편의성과 운영 효율성을 모두 고려한 주문/배송 관리 서비스",
      purpose:
        "사용자는 주문 및 배송 확인, 관리자는 제품 및 배송 관리 강화",
      target:
        "온라인 주문 및 배송 상태 확인 및 관리 사용자 대상",
      features: [
        "제품 주문",
        "결제",
        "주문 내역 조회",
        "배송 상태 확인",
        "제품 관리(추가/삭제/활성화)",
      ],
      period: "2025.01 ~ 2025.01",
      members: "5명",
      stack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JPA",
        "Thymeleaf",
      ],
      role: "결제 기능 개발, 주문 내역 조회, 관리자 배송 상태 관리",
      link: "https://github.com/handsun000/NBE3-4-1-Team09",
    },
    process: {
      architectureImg: "/assets/image/project/cafe/architecture.png",
      erdImg: "/assets/image/project/cafe/erd.png",
      uxImg: "/assets/image/project/cafe/ux.png",
      description: "Spring Boot 기반 주문/결제/배송 API, MySQL",
    },
    implementation: {
      features: [
        {
          title: "결제 기능",
          descriptionSummary:
            "장바구니 담기부터 이메일, 주소 입력 후 주문까지 구현",
          descriptionFull:
            "사용자가 원하는 커피 제품을 장바구니에 담고 주문을 완료하는 기능",
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/cafe/order.png",
              label: "주문/결제 페이지",
            },
          ],
        },
        {
          title: "주문 내역 조회",
          descriptionSummary:
            "사용자가 주문 내역을 한눈에 볼 수 있는 화면 구현",
          descriptionFull:
            "결제 완료 후 상세 주문 내역 확인 가능",
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/cafe/order-list.png",
              label: "주문 내역 페이지",
            },
          ],
        },
        {
          title: "배송 상태 관리 로직",
          descriptionSummary:
            "관리자가 주문 배송 상태를 실시간 확인/변경 가능하도록 구현",
          descriptionFull:
            "배송 상태 변경시 실시간 알림 연동 가능하도록 설계",
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/cafe/admin-delivery.png",
              label: "관리자 배송 상태 관리 페이지",
            },
          ],
        },
      ],
    },
    troubleshootingList: [
      {
        feature: "결제 기능",
        problem:
          "입력값 누락 등으로 결제 실패 사례",
        cause:
          "프론트·백엔드 입력값 검증 미흡",
        solution:
          "입력값 검증 강화, 안내 메시지 개선",
      },
      {
        feature: "배송 상태 관리",
        problem:
          "상태 변경 실시간 반영 미흡",
        cause:
          "실시간 알림 이벤트 누락",
        solution:
          "웹소켓/이메일 알림 연동 추가",
      },
    ],
    resultreview: {
      results: [
        "주문/결제/배송 핵심 기능 안정화",
        "결제 오류 및 배송 누락 감소",
        "운영 효율성 및 보안성 강화",
      ],
      reviews: [
        "실무 문제 해결 능력 향상",
        "사용자 및 운영자 관점 고려 설계 중요성 체감",
        "서비스 신뢰성 및 UX 개선 고민",
      ],
    },
  },
  // 추가 프로젝트 작성 가능
];
