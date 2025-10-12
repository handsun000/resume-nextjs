import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const CloseButtonWrap = styled.button`
  position: absolute;
  top: 28px;
  right: 36px;
  z-index: 100;
  background: #243a6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(36, 58, 107, 0.11);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #1d284d;
  }
  svg {
    pointer-events: none;
  }
`;

export default function CloseButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <CloseButtonWrap {...props} aria-label="닫기">
            <FaTimes />
        </CloseButtonWrap>
    );
}
