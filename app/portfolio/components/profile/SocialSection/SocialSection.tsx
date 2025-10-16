import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

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


export default function SocialSection() {
  return (
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
      <SocialRow
        href="https://velog.io/@handsun000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiVelog /> velog.io/@handsun000
      </SocialRow>
    </SocialLinks>
  );
}
