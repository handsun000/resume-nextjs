"use client";
import React from "react";
import Profile from "./components/profile/profile";
import ProjectAccordion from "./components/ProjectAccordion";
import styled from "styled-components";

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #8ec5fc 0%, #e0c3fc 100%);
  /* 또는 원하는 단색/그라데이션 */
`;

const Portfolio = () => (
  <Background>
    <Profile />
    <ProjectAccordion />
  </Background>
);

export default Portfolio;
