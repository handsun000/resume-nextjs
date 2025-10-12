import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 1rem 3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  outline: none;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 38px 24px 24px 24px;
`;

export const Card = styled.div`
  width: 860px;
  height: 100%;
  max-width: 98vw;
  background: #fff;
  border-radius: 17px;
  box-shadow: 0 6px 32px rgba(36, 58, 107, 0.08); /* 네이비 그림자 */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 52px 44px 44px 48px;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 800;
  color: #333333;
  margin-top: 3rem;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;

export const SubTitle = styled.p`
  font-size: 1.13rem;
  color: #6e7e99;
  margin-bottom: 2.2rem;
  text-align: center;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  width: 100vw;
  max-width: none;
  padding: 0 5vw 2rem 5vw;
  user-select: none;
  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2.2rem;
  padding: 20px 0;
  min-width: max-content;
  overflow-y: visible;
`;

export const SideNavWrap = styled.nav`
  width: 270px;
  min-width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 68px 16px 32px 24px;
  border-right: 1.5px solid #e2e6ee;
  background: #f7f8fa;
  box-shadow: 1px 0 18px rgba(36, 58, 107, 0.04);
`;

export const SectionLabel = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #243a6b;
  padding-left: 8px;
  margin-bottom: 8px;
`;

export const ScrollableProjects = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  max-height: 38vh;
  overflow-y: auto;
  margin-bottom: 1.3rem;
  &::-webkit-scrollbar { width: 7px; }
  &::-webkit-scrollbar-thumb {
    background: #dde1ea;
    border-radius: 7px;
  }
`;

export const NavItem = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "active" && prop !== "isProject"
}) <{ active: boolean; isProject?: boolean }>`
  border: none;
  background: ${({ active, isProject }) =>
        active && isProject ? "#e7eaf3" : active ? "#f1f3fa" : "transparent"};
  color: ${({ active, isProject }) =>
        active ? "#213e75" : isProject ? "#354979" : "#6a728c"};
  font-size: ${({ isProject }) => (isProject ? "1.05rem" : "1.17rem")};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-align: left;
  padding: ${({ isProject }) => (isProject ? "10px 16px" : "17px 0 17px 16px")};
  width: 100%;
  border-radius: ${({ isProject }) => (isProject ? "8px" : "10px 0 0 10px")};
  cursor: pointer;
  box-shadow: ${({ active }) =>
        active ? "0 2px 7px #e4e8f5cc inset" : "none"};
  transition: background 0.17s, color 0.15s;
  letter-spacing: 0.01em;
  &:hover {
    background: ${({ active }) => (active ? null : "#f1f3fa")};
    color: #213e75;
  }
`;
