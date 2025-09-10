"use client";

import React, { useRef, useEffect } from "react";

const AUTO_SCROLL_PADDING = 80;
const AUTO_SCROLL_SPEED = 20;

const containerStyle = {
  overflowX: "auto",
  whiteSpace: "nowrap",
  width: "600px",
  border: "1px solid #aaa",
  margin: "40px auto",
  padding: "20px",
  scrollbarWidth: "none",          // Firefox
  msOverflowStyle: "none",         // IE/Edge
};

const cardStyle = {
  display: "inline-block",
  width: "200px",
  height: "150px",
  marginRight: "20px",
  background: "#E9F0FC",
  borderRadius: "14px",
  fontSize: "1.3rem",
  color: "#234",
  textAlign: "center",
  lineHeight: "150px",
  boxShadow: "0 4px 12px rgba(31, 38, 135, 0.12)",
};

export default function page() {
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, right } = ref.current.getBoundingClientRect();
      const { clientX } = e;

      if (clientX - left < AUTO_SCROLL_PADDING) {
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            ref.current!.scrollLeft = Math.max(ref.current!.scrollLeft - AUTO_SCROLL_SPEED, 0);
          }, 14);
        }
        return;
      }
      if (right - clientX < AUTO_SCROLL_PADDING) {
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            const maxScroll = ref.current!.scrollWidth - ref.current!.clientWidth;
            ref.current!.scrollLeft = Math.min(ref.current!.scrollLeft + AUTO_SCROLL_SPEED, maxScroll);
          }, 14);
        }
        return;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // 10개 카드 샘플
  return (
    <div>
      <h2 style={{textAlign:"center"}}>자동 가로 스크롤 샘플</h2>
      <div ref={ref} style={containerStyle} className="container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={cardStyle}>{i + 1}</div>
        ))}
      </div>
      <p style={{textAlign:"center", color:"#555", fontSize:"1rem", marginTop:24}}>
        마우스를 박스 좌우 끝에 갖다 대면 자동으로 카드가 움직입니다.
      </p>
    </div>
  );
}
