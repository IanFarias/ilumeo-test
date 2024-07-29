import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 35%;
  padding: 100px 0;

  button {
    margin-top: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const DisplaySection = styled.section`
  h2 {
    margin-bottom: 20px;
  }
`;

export const Display = styled.span`
  font-size: 3.2rem;
  text-align: center;
`;

export const ShiftsSection = styled.section`
  margin-top: 40px;
  h2 {
    margin-bottom: 20px;
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  max-height: 30vh;
  padding-bottom: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
