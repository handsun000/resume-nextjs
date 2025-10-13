import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
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

export const Left = styled.div`
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

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
