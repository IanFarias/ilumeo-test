import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: normal;

  span {
    font-weight: 900;
  }
`;
