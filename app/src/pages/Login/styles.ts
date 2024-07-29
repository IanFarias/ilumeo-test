import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 20%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  width: 224px;

  img {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;

  button {
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div``;
