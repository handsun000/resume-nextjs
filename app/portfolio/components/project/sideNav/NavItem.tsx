import styled from "styled-components";

const NavItem = styled.button.withConfig({
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

export default NavItem;
