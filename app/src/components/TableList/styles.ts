import styled from "styled-components";

export const GuardianTable = styled.table`
  border-spacing: 0;
  width: 100%;

  thead {
    text-align: left;
  }

  tr {
    height: 48px;

    :last-child {
      text-align: right;
    }
  }

  td {
    height: 100%;
  }

  tr.grey {
    background-color: ${({ theme }) => theme.colors.grey[300]};
    td {
      border-left: 1px solid ${({ theme }) => theme.colors.white};
    }
  }

  .options-column {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;

    a {
      max-width: 200px;

      gap: 6px;
    }
  }
`;
