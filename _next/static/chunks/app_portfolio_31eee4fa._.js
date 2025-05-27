(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/portfolio/components/profile/profile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Profile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  min-height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
_c = Section;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c1 = ContentWrapper;
const Left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c2 = Left;
const Right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
_c3 = Right;
const ProfileImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.14);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #bdbdbd;
  font-weight: 600;
`;
_c4 = ProfileImage;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1`
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
_c5 = Name;
const Slogan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 1.13rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
_c6 = Slogan;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 1.08rem;
  color: #333;
  text-align: left;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
_c7 = Description;
const InfoCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c8 = InfoCards;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c9 = Card;
const CardTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
`;
_c10 = CardTitle;
const BadgeList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
_c11 = BadgeList;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  background: #fff; // 배경은 흰색
  color: #6366f1; // 글자색은 포인트 보라
  padding: 0.4rem 1.1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;
_c12 = Badge;
const SocialLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
_c13 = SocialLinks;
const SocialRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a`
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
_c14 = SocialRow;
function Profile() {
    const skills = [
        "JAVA",
        "Spring",
        "JPA",
        "MySQL"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Left, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileImage, {
                                    children: "프로필 이미지"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Name, {
                                    children: "SON JIN YEONG"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slogan, {
                                    children: "끝까지, 함께, 더 나은 답을 찾는 개발자"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
                                children: [
                                    "개발 과정에서 마주하는 어려움 앞에서도 포기하지 않고 끝까지 해내려고 합니다.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    "문제를 해결하는 과정 하나하나가 저를 더 성장시키는 소중한 경험임을 믿기에,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    "늘 새로운 해답을 찾아 도전하고 배우는 개발자가 되고자 합니다."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Right, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCards, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGraduationCap"], {}, void 0, false, {
                                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                " 학력"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        "경성대학교 소프트웨어학과 졸업"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {}, void 0, false, {
                                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this),
                                                " 경력"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        "부산보건고등학교 학교기업 백엔드 개발자(2021~2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCertificate"], {}, void 0, false, {
                                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                " 자격사항"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        "정보처리기사 (2021)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeList, {
                            children: skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    children: skill
                                }, i, false, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLinks, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialRow, {
                                    href: "https://github.com/handsun000",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        " github.com/handsun000"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialRow, {
                                    href: "mailto:handsun000@gmail.com",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        " handsun000@gmail.com"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/components/profile/profile.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/components/profile/profile.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/components/profile/profile.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_c15 = Profile;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "ContentWrapper");
__turbopack_context__.k.register(_c2, "Left");
__turbopack_context__.k.register(_c3, "Right");
__turbopack_context__.k.register(_c4, "ProfileImage");
__turbopack_context__.k.register(_c5, "Name");
__turbopack_context__.k.register(_c6, "Slogan");
__turbopack_context__.k.register(_c7, "Description");
__turbopack_context__.k.register(_c8, "InfoCards");
__turbopack_context__.k.register(_c9, "Card");
__turbopack_context__.k.register(_c10, "CardTitle");
__turbopack_context__.k.register(_c11, "BadgeList");
__turbopack_context__.k.register(_c12, "Badge");
__turbopack_context__.k.register(_c13, "SocialLinks");
__turbopack_context__.k.register(_c14, "SocialRow");
__turbopack_context__.k.register(_c15, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/projects/[projectId]/section/overview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Overview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
const OverviewWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-sizing: border-box;
`;
_c = OverviewWrap;
const ContentBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(31, 38, 135, 0.09);
  max-width: 1100px;
  width: 100%;
  margin: 6vh 2vw;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 2vw;
  }
`;
_c1 = ContentBox;
const Left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1.3; // 기존보다 더 넓게
  background: #f2f4fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2.5rem;
  min-width: 380px;
  @media (max-width: 900px) {
    padding: 2rem 1rem;
    min-width: unset;
  }
`;
_c2 = Left;
const Thumb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 100%;
  max-width: 420px; // 기존보다 크게
  height: auto;
  aspect-ratio: 16/9; // 세로 비율 고정(지원 브라우저만)
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.09);
  margin-bottom: 1.5rem;
  background: #fff;
  object-fit: cover;
`;
_c3 = Thumb;
const LeftTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-size: 1.18rem;
  font-weight: 700;
  color: #2d3559;
  margin-bottom: 1.2rem;
  text-align: center;
`;
_c4 = LeftTitle;
const Right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1.6;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  min-width: 360px;
  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;
_c5 = Right;
const TableTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 1.45rem;
  color: #243a6b;
  font-weight: 800;
  margin-bottom: 1.2rem;
`;
_c6 = TableTitle;
const InfoTableWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 100%;
  overflow-x: auto;
`;
_c7 = InfoTableWrap;
const InfoTable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.7rem; /* 행 간격 */
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
    /* 긴 내용은 줄바꿈 */
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
_c8 = InfoTable;
const BadgeList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
`;
_c9 = BadgeList;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  background: #e3eaff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.97rem;
`;
_c10 = Badge;
function Overview({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewWrap, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBox, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Left, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Thumb, {
                            src: `${("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ""}${data.image}`,
                            alt: "프로젝트 썸네일"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftTitle, {
                            children: [
                                "[",
                                data.title,
                                " 메인페이지]"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Right, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableTitle, {
                            children: [
                                "프로젝트 이름: ",
                                data.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoTableWrap, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoTable, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "기간"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: data.period
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "참여인원"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: data.members
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "프로젝트 소개"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 3,
                                                    children: data.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "주요 내용"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 3,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "목적:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    data.purpose
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "대상:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    data.target
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "핵심기능:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    data.features
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "사용기술"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 3,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeList, {
                                                        children: data.stack.split(",").map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                children: tech.trim()
                                                            }, i, false, {
                                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "역할"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 3,
                                                    children: data.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "링크"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 3,
                                                    children: data.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: data.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: "#3751a6",
                                                            textDecoration: "underline",
                                                            wordBreak: "break-all"
                                                        },
                                                        children: data.link
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this) : "없음"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/projects/[projectId]/section/overview.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_c11 = Overview;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "OverviewWrap");
__turbopack_context__.k.register(_c1, "ContentBox");
__turbopack_context__.k.register(_c2, "Left");
__turbopack_context__.k.register(_c3, "Thumb");
__turbopack_context__.k.register(_c4, "LeftTitle");
__turbopack_context__.k.register(_c5, "Right");
__turbopack_context__.k.register(_c6, "TableTitle");
__turbopack_context__.k.register(_c7, "InfoTableWrap");
__turbopack_context__.k.register(_c8, "InfoTable");
__turbopack_context__.k.register(_c9, "BadgeList");
__turbopack_context__.k.register(_c10, "Badge");
__turbopack_context__.k.register(_c11, "Overview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/projects/[projectId]/section/implementation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Implementation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CenterWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: transparent;
  overflow-y: auto;
`;
_c = CenterWrap;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c1 = Card;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 2.2rem;
  text-align: center;
`;
_c2 = Title;
const FeatureSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
_c3 = FeatureSection;
const FeatureTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-size: 1.15rem;
  color: #4f46e5;
  font-weight: 700;
  margin-bottom: 0.6rem;
  text-align: left;
`;
_c4 = FeatureTitle;
const DescSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.8;
`;
_c5 = DescSummary;
const ReadMoreLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
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
_c6 = ReadMoreLink;
const DescFull = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  color: #444;
  font-size: 1.09rem;
  line-height: 1.8;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  text-align: left;
  white-space: pre-line;
  max-height: ${({ open })=>open ? "1000px" : "0"};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  opacity: ${({ open })=>open ? 1 : 0};
  pointer-events: ${({ open })=>open ? "auto" : "none"};
`;
_c7 = DescFull;
const ImageRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
_c8 = ImageRow;
const ImageBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
_c9 = ImageBlock;
const ArchImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
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
_c10 = ArchImage;
const ArchLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 7px;
  color: #6366f1;
  font-size: 1.01rem;
  text-align: center;
`;
_c11 = ArchLabel;
const PageGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
_c12 = PageGrid;
const PageImageBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
_c13 = PageImageBlock;
const PageImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
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
_c14 = PageImage;
const PageLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 5px;
  color: #6366f1;
  font-size: 0.98rem;
  text-align: center;
`;
_c15 = PageLabel;
function Implementation({ data }) {
    _s();
    const [openIdx, setOpenIdx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterWrap, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    children: "구현 기능 및 개발과정"
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                data.features.map((feature, idx)=>{
                    // summary가 없으면 description 앞부분 80자 자동 요약
                    const summary = feature.descriptionSummary || feature.descriptionFull.slice(0, 80) + (feature.descriptionFull.length > 80 ? "..." : "");
                    const isOpen = openIdx === idx;
                    const showToggle = feature.descriptionFull.length > summary.length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureTitle, {
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DescSummary, {
                                children: [
                                    summary,
                                    showToggle && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReadMoreLink, {
                                        "aria-label": "자세히 보기",
                                        onClick: ()=>setOpenIdx(idx),
                                        children: [
                                            "자세히 보기 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                lineNumber: 193,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DescFull, {
                                open: isOpen,
                                children: [
                                    feature.descriptionFull,
                                    showToggle && isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReadMoreLink, {
                                        "aria-label": "간단히",
                                        onClick: ()=>setOpenIdx(null),
                                        children: [
                                            "간단히 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▲"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                lineNumber: 204,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageRow, {
                                children: [
                                    feature.archImage?.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageBlock, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchImage, {
                                                src: `${("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ""}${feature.archImage.src}`,
                                                alt: feature.archImage.label || "구조도"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchLabel, {
                                                children: feature.archImage.label || ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this),
                                    feature.pageImages && feature.pageImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageGrid, {
                                        children: feature.pageImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageImageBlock, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageImage, {
                                                        src: `${("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ""}${img.src}`,
                                                        alt: img.label || "페이지"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLabel, {
                                                        children: img.label || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/projects/[projectId]/section/implementation.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(Implementation, "JHeU1KdNesf9XDvPtRBg+hOAqPM=");
_c16 = Implementation;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "CenterWrap");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Title");
__turbopack_context__.k.register(_c3, "FeatureSection");
__turbopack_context__.k.register(_c4, "FeatureTitle");
__turbopack_context__.k.register(_c5, "DescSummary");
__turbopack_context__.k.register(_c6, "ReadMoreLink");
__turbopack_context__.k.register(_c7, "DescFull");
__turbopack_context__.k.register(_c8, "ImageRow");
__turbopack_context__.k.register(_c9, "ImageBlock");
__turbopack_context__.k.register(_c10, "ArchImage");
__turbopack_context__.k.register(_c11, "ArchLabel");
__turbopack_context__.k.register(_c12, "PageGrid");
__turbopack_context__.k.register(_c13, "PageImageBlock");
__turbopack_context__.k.register(_c14, "PageImage");
__turbopack_context__.k.register(_c15, "PageLabel");
__turbopack_context__.k.register(_c16, "Implementation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TroubleShooting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
const CenterWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
_c = CenterWrap;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
_c1 = Card;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 1.7rem;
  text-align: center;
`;
_c2 = Title;
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  margin-bottom: 1.3rem;
`;
_c3 = Section;
const SubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  color: #6366f1;
  font-weight: 700;
  font-size: 1.09rem;
  margin-bottom: 0.2rem;
`;
_c4 = SubTitle;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  color: #444;
  font-size: 1.08rem;
  text-align: left;
  margin: 0 0 0.3rem 0;
  line-height: 1.7;
`;
_c5 = Content;
function TroubleShooting({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterWrap, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    children: "트러블 슈팅"
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
                            children: "문제 상황"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                            children: data.problem
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
                            children: "원인 분석"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                            children: data.cause
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
                            children: "해결 방법"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                            children: data.solution
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c6 = TroubleShooting;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "CenterWrap");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Title");
__turbopack_context__.k.register(_c3, "Section");
__turbopack_context__.k.register(_c4, "SubTitle");
__turbopack_context__.k.register(_c5, "Content");
__turbopack_context__.k.register(_c6, "TroubleShooting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/projects/[projectId]/section/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultReview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
const CenterWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
_c = CenterWrap;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.13);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
_c1 = Card;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 2rem;
  color: #3730a3;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;
_c2 = Title;
const StyledTable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: transparent;
`;
_c3 = StyledTable;
const Th = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].th`
  width: 120px;
  background: rgba(99, 102, 241, 0.08);
  color: #3730a3;
  font-weight: 800;
  font-size: 1.1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-right: none;
  padding: 1rem 0.8rem;
  text-align: center;
  vertical-align: middle;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
_c4 = Th;
const Td = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].td`
  background: transparent;
  color: #444;
  font-size: 1.1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-left: none;
  padding: 1rem 0.8rem;
  vertical-align: top;

  &:last-child {
    border-bottom-right-radius: 8px;
  }
`;
_c5 = Td;
const Ul = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul`
  margin: 0;
  padding-left: 1.2rem;
  list-style-type: disc;
`;
_c6 = Ul;
const Li = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li`
  margin-bottom: 0.7rem;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;
_c7 = Li;
function ResultReview({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterWrap, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    children: "프로젝트 결과/성과"
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTable, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                        children: "결과/성과"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ul, {
                                            children: data.results.map((ach, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Li, {
                                                    children: ach
                                                }, idx, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                        children: "리뷰"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ul, {
                                            children: data.reviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Li, {
                                                    children: review
                                                }, idx, false, {
                                                    fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/portfolio/projects/[projectId]/section/result.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c8 = ResultReview;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "CenterWrap");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Title");
__turbopack_context__.k.register(_c3, "StyledTable");
__turbopack_context__.k.register(_c4, "Th");
__turbopack_context__.k.register(_c5, "Td");
__turbopack_context__.k.register(_c6, "Ul");
__turbopack_context__.k.register(_c7, "Li");
__turbopack_context__.k.register(_c8, "ResultReview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/projects/projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Project)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/projects/[projectId]/section/overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$implementation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/projects/[projectId]/section/implementation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$troubleShooting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/projects/[projectId]/section/troubleShooting.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/projects/[projectId]/section/result.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// 섹션 스타일
const Section = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;
_c = Section;
// 네비게이션 버튼
const NavButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
  position: fixed;
  top: 50%;
  z-index: 10;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(99, 102, 241, 0.18);
  &:hover {
    background: #3730a3;
  }
`;
_c1 = NavButton;
function Project({ project, onClose }) {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showNav, setShowNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Project.useEffect": ()=>{
            const refCurrent = projectRef.current;
            refCurrent?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            if (!refCurrent) return;
            const observer = new window.IntersectionObserver({
                "Project.useEffect": ([entry])=>{
                    setShowNav(entry.isIntersecting);
                }
            }["Project.useEffect"], {
                threshold: 0.3
            } // 30% 이상 보이면 NavButton 표시
            );
            observer.observe(refCurrent);
            return ({
                "Project.useEffect": ()=>observer.disconnect()
            })["Project.useEffect"];
        }
    }["Project.useEffect"], []);
    // 각 섹션 컴포넌트 배열
    const sections = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            data: project.overview
        }, "overview", false, {
            fileName: "[project]/app/portfolio/projects/projects.tsx",
            lineNumber: 77,
            columnNumber: 5
        }, this),
        // <Process data={project.process} key="process" />,
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$implementation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            data: project.implementation
        }, "impl", false, {
            fileName: "[project]/app/portfolio/projects/projects.tsx",
            lineNumber: 79,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$troubleShooting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            data: project.troubleshooting
        }, "trouble", false, {
            fileName: "[project]/app/portfolio/projects/projects.tsx",
            lineNumber: 80,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f5b$projectId$5d2f$section$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            data: project.resultreview
        }, "resultreview", false, {
            fileName: "[project]/app/portfolio/projects/projects.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        },
        ref: projectRef,
        tabIndex: -1,
        children: [
            showNav && page > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavButton, {
                style: {
                    left: "2vw"
                },
                onClick: ()=>setPage(page - 1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {}, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/projects.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/projects/projects.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            showNav && page < sections.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavButton, {
                style: {
                    right: "2vw"
                },
                onClick: ()=>setPage(page + 1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/projects.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/projects/projects.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            showNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavButton, {
                onClick: onClose,
                style: {
                    top: "5%",
                    right: "2vw"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                    fileName: "[project]/app/portfolio/projects/projects.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/projects/projects.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -100
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: sections[page]
                }, page, false, {
                    fileName: "[project]/app/portfolio/projects/projects.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/projects/projects.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/projects/projects.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Project, "M1chR9j56cdujaYd3PDeKz89xqM=");
_c2 = Project;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "NavButton");
__turbopack_context__.k.register(_c2, "Project");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/components/ProjectAccordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/projects/projects.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// 프로필과 같은 그라데이션 배경
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem 1rem; /* 상단 padding을 넉넉하게 */
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none; // 명시적으로 border 제거
`;
_c = Section;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 2.1rem;
  font-weight: 800;
  color: #fff;
  margin-top: 3rem; /* 타이틀 위쪽에 여백 추가 */
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;
_c1 = Title;
const SubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 1.13rem;
  color: #e0e7ef;
  margin-bottom: 2.2rem;
  text-align: center;
`;
_c2 = SubTitle;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 1100px;
`;
_c3 = Grid;
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div)`
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
_c4 = Card;
const CardTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-size: 1.27rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #3730a3;
`;
_c5 = CardTitle;
const CardDesc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 1.02rem;
  color: #333;
  margin-bottom: 1.1rem;
`;
_c6 = CardDesc;
const BadgeList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;
_c7 = BadgeList;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  background: #b4b8ff;
  color: #4f46e5;
  padding: 0.36rem 1.05rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.96rem;
  margin-top: 0.3rem;
`;
_c8 = Badge;
const Period = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 1rem;
  color: #7f7fd5;
  font-weight: 600;
  font-size: 0.98rem;
`;
_c9 = Period;
const projects = [
    {
        id: 1,
        title: "중고거래, 경매 시스템",
        summary: "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
        overview: {
            image: "/assets/image/project/bidbuy/main.png",
            title: "중고거래, 경매 시스템",
            summary: "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
            purpose: "경매 기능을 통해 판매자가 최적의 조건에서 거래를 성사시킬 수 있도록 함",
            target: "투명하고 공정한 경쟁을 통해 원하는 상품을 합리적인 가격에 구매하고자 하는 사용자",
            features: "게시글 등록, 경매, 채팅, 알림, 결재",
            period: "2025.03 ~ 2025.04",
            members: "5명",
            stack: "Java, Kotlin, Spring Boot, MySQL, Redis, WebSocket, AWS, Docker, Swagger, NextJS",
            role: "채팅, 알림",
            link: "https://github.com/handsun000/WEB3_4_JSGYY_BE"
        },
        process: {
            architectureImg: "/assets/image/project/bidbuy/main.png",
            erdImg: "/assets/image/project/bidbuy/erd.png",
            uxImg: "/resume-nextjs/ux.png",
            description: "Spring Boot 기반의 REST API, MariaDB, Redis 캐시, AWS EC2 배포, CI/CD 파이프라인 구축 등"
        },
        implementation: {
            features: [
                {
                    title: "채팅 기능",
                    descriptionSummary: "WebSocket 기반의 실시간 채팅 기능을 구현했습니다. 메시지가 즉시 전달되는 것과 확장성을 고려해 설계했습니다.",
                    descriptionFull: `채팅 기능은 실시간 양방향 통신과 메시지가 즉시 전달되는 것이 핵심이었기 때문에, Spring Boot 기반의 WebSocket 서버와 STOMP 프로토콜을 활용해 구현했습니다. 
            
            WebSocket을 선택한 이유는, 클라이언트(브라우저)와 서버가 하나의 연결로 직접 실시간으로 메시지를 주고받을 수 있기 때문입니다.
            SSE, HTTP 폴링 방식보다 훨씬 빠르고, 지연 없이 동작하는 점이 큰 장점이었습니다.

            여러 서버 인스턴스 간 메시지 동기화를 위해 메시지 브로커로 Redis Pub/Sub을 도입했습니다. Kafka나 RabbitMQ는 대규모 데이터 스트리밍이나 복잡한 시스템 간 메시지 처리에 더 적합하다고 판단했습니다.
            Redis Pub/Sub은 구조가 단순하면서도 여러 서버에 메시지를 빠르게 전달할 수 있다는 점에서 실시간 채팅에 적합하다고 판단해 선택했습니다.

            이렇게 WebSocket과 Redis Pub/Sub을 활용하여,
            채팅 메시지가 어디서든 빠르고 안정적으로 전달되는 실시간 채팅 서비스를 구축할 수 있었습니다.`,
                    archImage: {
                        src: "/assets/image/project/bidbuy/chat.png",
                        label: "채팅 구조"
                    },
                    pageImages: [
                        {
                            src: "/assets/image/project/bidbuy/chatPage.png",
                            label: "채팅 페이지"
                        }
                    ]
                },
                {
                    title: "알림 기능",
                    descriptionSummary: "알림 기능은 기존 채팅 시스템에서 사용한 WebSocket과 Redis Pub/Sub 구조를 그대로 활용해, 실시간성과 효율성을 모두 만족하도록 구현했습니다.",
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
                        label: "알림 구조"
                    },
                    pageImages: []
                }
            ]
        },
        troubleshooting: {
            problem: "처음에는 WebSocket만 적용하면 모든 사용자가 실시간으로 채팅할 수 있다고 생각했지만, 메시지 브로커 없이 서버가 다르면 서로 다른 서버에 접속한 사용자끼리는 채팅 메시지가 전달되지 않는다는 구조적 한계를 인지하게 되었습니다.",
            cause: "WebSocket 연결은 각 서버 인스턴스에 독립적으로 맺어지기 때문에, 별도의 메시지 브로커 없이 서버 간 메시지 동기화가 불가능하다는 원리를 제대로 이해하지 못했던 것이 원인이었습니다.",
            solution: "메시지 브로커의 필요성과 Pub/Sub 구조에 대해 학습한 뒤, Redis Pub/Sub을 도입해 모든 서버가 동일한 채널을 구독하도록 구조를 개선했습니다. 이를 통해 서버가 여러 대여도 모든 사용자가 실시간으로 메시지를 주고받을 수 있게 되었습니다."
        },
        resultreview: {
            results: [
                "채팅방 목록 조회 및 알림 전송을 비동기로 처리하여, 메시지 전송 시 평균 응답 속도개선",
                "Redis를 도입해 다중 서버 환경에서도 채팅 메시지, 알림이 안정적으로 전달되도록 구현",
                "메시지 전달 실패 시 지수 백오프 방식으로 재전송 로직을 적용"
            ],
            reviews: [
                "비동기 처리와 메시지 브로커 도입 과정을 통해 실시간 시스템의 구조와 동작 원리를 이해할 수 있었습니다.",
                "지수 백오프 재전송 로직을 구현하며, 장애 상황에서도 서비스 신뢰성을 높이는 방법을 배웠습니다."
            ]
        },
        review: {
            content: "실제 서비스 운영 경험을 통해 문제 해결력과 협업 능력을 키웠습니다.",
            regret: "초기 테스트 자동화가 부족했던 점",
            plan: "차기 프로젝트에서는 CI/CD와 자동화 테스트를 강화할 계획"
        }
    },
    {
        id: 2,
        title: "쇼핑몰 백엔드 개발",
        summary: "대형 쇼핑몰의 주문/결제 시스템 개발 및 마이크로서비스 적용",
        overview: {
            image: "/assets/image/project/bidbuy/main.png",
            title: "중고거래, 경매 시스템",
            summary: "기존의 단순한 중고거래 방식에 경매 기능을 접목하여, 사용자에게 더욱 차별화된 거래 경험을 제공",
            purpose: "경매 기능을 통해 판매자가 최적의 조건에서 거래를 성사시킬 수 있도록 함",
            target: "투명하고 공정한 경쟁을 통해 원하는 상품을 합리적인 가격에 구매하고자 하는 사용자",
            features: "게시글 등록, 경매, 채팅, 알림, 결재",
            period: "2025.03 ~ 2025.04",
            members: "5명",
            stack: "Java, Kotlin, Spring Boot, MySQL, Redis, WebSocket, AWS, Docker, Swagger, NextJS",
            role: "채팅, 알림",
            link: "https://github.com/handsun000/WEB3_4_JSGYY_BE"
        },
        process: {
            architectureImg: "/resume-nextjs/shop-architecture.png",
            erdImg: "/assets/image/project/bidbuy/erd.png",
            uxImg: "/resume-nextjs/shop-ux.png",
            description: "Node.js 기반의 주문/결제 API, MongoDB, AWS S3, Docker 컨테이너, CI/CD 구축"
        },
        implementation: {
            features: [
                {
                    title: "채팅 기능",
                    descriptionSummary: "",
                    descriptionFull: "채팅 기능은 실시간 양방향 통신과 낮은 레이턴시가 핵심이었기 때문에, Spring Boot 기반의 WebSocket 서버와 STOMP 프로토콜을 활용해 구현했습니다. WebSocket을 선택한 이유는, 클라이언트(브라우저)와 서버가 단일 TCP 연결을 통해 직접 실시간으로 메시지를 주고받을 수 있어 HTTP 폴링 방식보다 훨씬 빠르고 효율적이기 때문입니다. Kafka나 RabbitMQ 같은 메시지 브로커도 고려했지만, 이들은 주로 대규모 데이터 스트리밍이나 복잡한 백엔드 시스템 간 메시지 처리에 적합하며, 실제 채팅처럼 클라이언트와 서버가 직접 빠르게 통신해야 하는 경우에는 오히려 아키텍처가 복잡해지고 레이턴시가 증가할 수 있습니다. 실제 구현에서는, STOMP 프로토콜을 통해 채팅방 구독/발행 구조를 간단하게 만들었고, Redis Pub/Sub를 추가해 여러 서버 인스턴스 간에도 메시지 동기화가 가능하도록 설계했습니다. 이 과정에서 동시 접속자 수와 메시지 처리량을 고려해, 구조를 최대한 단순하게 유지하면서도 확장성을 확보할 수 있도록 했습니다. 결론적으로, WebSocket은 실시간 채팅에 필요한 낮은 레이턴시와 직접 통신 구조, 그리고 단순한 아키텍처로 빠른 개발과 안정적인 운영이 가능하다는 점에서 가장 적합한 선택이었습니다.",
                    archImage: {
                        src: "/assets/chat-arch.png",
                        label: "채팅 구조"
                    },
                    pageImages: [
                        {
                            src: "/assets/chat-ui1.png",
                            label: "채팅 페이지"
                        },
                        {
                            src: "/assets/chat-ui2.png",
                            label: "채팅 페이지"
                        }
                    ]
                },
                {
                    title: "알림 기능",
                    descriptionSummary: "",
                    descriptionFull: "알림 기능은 Redis Pub/Sub 구조로 확장성과 속도를 높였습니다. ...",
                    archImage: {
                        src: "/assets/chat-arch.png",
                        label: "채팅 구조"
                    },
                    pageImages: [
                        {
                            src: "/assets/chat-ui1.png",
                            label: "채팅 페이지"
                        },
                        {
                            src: "/assets/chat-ui2.png",
                            label: "채팅 페이지"
                        }
                    ]
                }
            ]
        },
        troubleshooting: {
            problem: "결제 트랜잭션 중 데이터 불일치 문제 발생",
            cause: "",
            solution: "트랜잭션 롤백 및 재처리 로직 도입, 결제 API 이중 검증"
        },
        resultreview: {
            results: [
                "주문 처리 속도 30% 향상",
                "결제 오류율 0.1% 미만 유지",
                "서비스 무중단 배포 성공"
            ],
            reviews: [
                "주문 처리 속도 30% 향상",
                "결제 오류율 0.1% 미만 유지",
                "서비스 무중단 배포 성공"
            ]
        },
        review: {
            content: "마이크로서비스 분리와 트랜잭션 안정성 확보 경험을 쌓았습니다.",
            regret: "초기 설계 단계에서의 요구사항 미흡",
            plan: "앞으로는 요구사항 정의와 설계 문서화에 더 신경 쓸 예정"
        }
    }
];
const ProjectAccordion = ()=>{
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                children: "프로젝트"
            }, void 0, false, {
                fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
                children: "실제 경험과 성과 중심의 대표 프로젝트를 소개합니다."
            }, void 0, false, {
                fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selected === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -40
                    },
                    transition: {
                        duration: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                        children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                whileHover: {
                                    scale: 1.03
                                },
                                onClick: ()=>setSelected(project.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                        lineNumber: 312,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardDesc, {
                                        children: project.summary
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                        lineNumber: 313,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeList, {
                                        children: project.overview.stack.split(",").map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                children: tech.trim()
                                            }, i, false, {
                                                fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                                lineNumber: 316,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                        lineNumber: 314,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Period, {
                                        children: project.overview.period
                                    }, void 0, false, {
                                        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                        lineNumber: 319,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                                lineNumber: 307,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, this)
                }, "list", false, {
                    fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$projects$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    project: projects.find((p)=>p.id === selected),
                    onClose: ()=>setSelected(null)
                }, "slider", false, {
                    fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                    lineNumber: 325,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/components/ProjectAccordion.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
};
_s(ProjectAccordion, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c10 = ProjectAccordion;
const __TURBOPACK__default__export__ = ProjectAccordion;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "Title");
__turbopack_context__.k.register(_c2, "SubTitle");
__turbopack_context__.k.register(_c3, "Grid");
__turbopack_context__.k.register(_c4, "Card");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDesc");
__turbopack_context__.k.register(_c7, "BadgeList");
__turbopack_context__.k.register(_c8, "Badge");
__turbopack_context__.k.register(_c9, "Period");
__turbopack_context__.k.register(_c10, "ProjectAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$components$2f$profile$2f$profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/components/profile/profile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$components$2f$ProjectAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portfolio/components/ProjectAccordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Background = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #8ec5fc 0%, #e0c3fc 100%);
  /* 또는 원하는 단색/그라데이션 */
`;
_c = Background;
const Portfolio = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Background, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$components$2f$profile$2f$profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portfolio$2f$components$2f$ProjectAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/portfolio/page.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
_c1 = Portfolio;
const __TURBOPACK__default__export__ = Portfolio;
var _c, _c1;
__turbopack_context__.k.register(_c, "Background");
__turbopack_context__.k.register(_c1, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_portfolio_31eee4fa._.js.map