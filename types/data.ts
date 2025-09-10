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
            "네이버, 카카오, 구글 소셜 로그인을 도입해 별도의 회원가입 없이 간편하게 서비스에 접근할 수 있도록 구현했습니다.",
          descriptionFull:
            "간단한 로그인 API를 개발하고, 네이버, 카카오, 구글 계정을 통한 소셜 로그인을 지원했습니다. 사용자는 별도의 회원가입 절차 없이 각 소셜 계정으로 로그인할 수 있으며, 로그인 시 제공되는 사용자 정보를 활용해 회원가입 과정을 자동화했습니다. 이를 통해 접근성을 높였습니다.",
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
            "관리자가 챌린지를 생성하고, 사용자는 예치금 등록으로 참여할 수 있는 도서 목표 챌린지 기능을 구현했습니다.",
          descriptionFull:
            "관리자가 새로운 챌린지를 생성하면, 사용자는 예치금을 등록해 해당 챌린지에 참여할 수 있습니다. 챌린지 인증은 당일 댓글 또는 리뷰 작성 여부로 자동 확인되며, 챌린지 기간 동안의 참여 횟수에 따라 상금, 환급, 미환급 등 결과가 자동으로 분배됩니다. 이 과정을 통해 사용자들이 자연스럽게 독서 습관을 형성할 수 있도록 설계했습니다.",
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
          "일부 사용자가 네이버/카카오/구글 소셜 로그인 시 인증에 실패하거나, 사용자 정보가 정상적으로 수집되지 않는 문제가 발생했습니다.",
        cause:
          "각 소셜 플랫폼의 OAuth 인증 방식과 사용자 정보 제공 정책 차이, 콜백 URL 설정 오류, 토큰 만료, 또는 필수 정보(이메일 등) 미동의 시 회원가입 자동화가 정상적으로 동작하지 않았습니다.",
        solution:
          "각 소셜 로그인 API의 공식 문서를 참고해 콜백 URL 및 권한 요청 범위를 명확히 설정하고, 사용자 정보가 불완전한 경우 추가 정보 입력을 유도하는 예외 처리와 안내 메시지를 추가하여 원인별로 빠르게 대응할 수 있도록 개선했습니다.",
      },
      {
        feature: "챌린지 시스템",
        problem:
          "일부 사용자가 예치금을 등록했음에도 챌린지 참여가 정상적으로 반영되지 않거나, 챌린지 인증(댓글/리뷰 작성)이 누락되는 사례가 있었습니다.",
        cause:
          "챌린지 참여와 인증 로직이 비동기적으로 처리되는 과정에서 데이터베이스 트랜잭션 처리가 미흡해 예치금 등록과 챌린지 참여 상태가 불일치하는 경우가 있었고, 인증 기준(댓글/리뷰 작성 시간 등)이 명확하지 않아 당일 인증이 누락되는 경우도 있었습니다.",
        solution:
          "예치금 등록과 챌린지 참여 상태 변경을 하나의 트랜잭션으로 묶어 데이터 정합성을 보장하고, 인증 로직을 개선해 댓글/리뷰 작성 시간을 기준으로 인증 여부를 정확히 판단하도록 했습니다.",
      },
    ],
    resultreview: {
results: [
        "네이버, 카카오, 구글 소셜 로그인 도입으로 회원가입 절차를 간소화하고, 사용자 접근성을 향상시킴",
        "SSE + Redis Pub/Sub 적용으로 알림 기능의 실시간성 및 안정성 확보",
        "사용자 간 팔로우/팔로워, 추천 시스템을 통해 활발한 독서 커뮤니티 형성",
      ],
      reviews: [
        "소셜 로그인, 챌린지 등 다양한 기능을 서비스에 적용하면서, 예상치 못한 예외 상황과 장애를 직접 경험하고 해결하는 과정에서 문제 해결 역량이 향상되었습니다.",
        "깃허브 협업, 코드 리뷰 등 팀 프로젝트에서 직접 소통하고 협업하는 과정을 경험하면서, 혼자 개발할 때와는 다르게 팀워크와 커뮤니케이션의 중요성을 실감했습니다.",
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
            "사용자가 장바구니에 담은 커피 제품을 이메일과 주소 입력 후 결제할 수 있도록 구현했습니다.",
          descriptionFull:
            "메인 화면에서 사용자가 원하는 커피 제품을 장바구니에 담고, 이메일과 주소(상세주소 포함)를 입력한 뒤 결제까지 완료할 수 있는 기능을 개발했습니다. 결제 완료 후에는 주문 정보가 서버에 안전하게 저장되며, 결제 과정에서 입력값 검증과 예외 처리를 통해 사용자 경험을 개선했습니다.",
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
            "사용자가 자신의 주문 내역을 한눈에 확인할 수 있는 주문 조회 화면을 구현했습니다.",
          descriptionFull:
            `결제 완료 후 사용자는 주문 조회 화면에서 본인의 주문 내역을 확인할 수 있습니다. 주문 번호, 주문 일시, 주문한 제품, 배송 상태 등 상세 정보를 제공하여, 사용자가 주문 진행 상황을 쉽게 파악할 수 있도록 했습니다.`,
          archImage: { src: "", label: "" },
          pageImages: [
            {
              src: "/assets/image/project/cafe/order-list.png",
              label: "주문 내역 페이지",
            },
          ],
        },
      ],
    },
    troubleshootingList: [
      {
        feature: "결제 기능",
        problem:
          "결제 과정에서 입력값 누락이나 잘못된 정보로 인해 결제가 정상적으로 처리되지 않는 사례가 있었습니다.",
        cause:
          "입력값 검증 로직이 미흡해, 필수 정보(이메일, 주소 등) 누락 시에도 결제 요청이 서버로 전달되는 문제가 있었습니다.",
        solution:
          "프론트엔드와 백엔드 모두에서 입력값 검증을 강화하고, 누락된 정보가 있을 경우 결제 프로세스를 중단하고 사용자에게 명확한 안내 메시지를 제공하도록 개선했습니다.",
      },
      {
        feature: "배송 상태 관리",
        problem:
          "관리자가 배송 상태를 변경해도 사용자 화면에 실시간으로 반영되지 않는 문제가 있었습니다.",
        cause:
          "배송 상태 변경 이벤트를 사용자에게 실시간으로 전달하는 로직이 누락되어, 상태 변경 후 새로고침을 해야만 최신 정보를 확인할 수 있었습니다.",
        solution:
          "배송 상태 변경 시 서버에서 실시간 알림(웹소켓/이메일 등)을 발송하도록 로직을 추가해, 사용자가 별도의 새로고침 없이도 즉시 변경 사항을 확인할 수 있도록 개선했습니다.",
      },
    ],
    resultreview: {
      results: [
        "결제, 주문 내역, 배송 상태 관리 등 핵심 기능을 안정적으로 구현하여 사용자 편의성 향상",
        "입력값 검증과 실시간 알림 적용으로 결제 오류 및 배송 정보 누락 사례를 크게 줄임",
        "관리자와 일반 사용자 권한 분리로 운영 효율성과 보안성 강화",
      ],
      reviews: [
        "결제와 주문, 배송 상태 관리 등 실제 서비스 운영에 필요한 전 과정을 직접 경험하며, 실무적인 문제 해결 능력이 크게 향상되었습니다.",
        "입력값 검증, 실시간 알림, 관리자 권한 분리 등 실제 사용자와 운영자를 모두 고려한 설계와 구현의 중요성을 배웠습니다.",
        "프로젝트를 통해 사용자 경험을 개선하고, 서비스의 신뢰성을 높이는 다양한 방법을 고민해볼 수 있었습니다.",
      ],
    },
  },
  // 추가 프로젝트 작성 가능
];
