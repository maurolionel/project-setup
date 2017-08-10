import styled from 'styled-components';

const Table = styled.table.attrs({
  cellSpacing: 0
}) `
  width: 100%;
  border: 1px solid ${({ theme }) => theme.whiteGray};
  border-radius: 4px;
  text-align: left;

  thead {
    background-color: ${({ theme }) => theme.whiteGray};
  }

  tbody {
    td {
      border-width: 0 1px 1px 0;
      border-style: solid;
      border-color: ${({ theme }) => theme.whiteGray};
      &:last-child {
        border-right: 0;
        text-align: center;
      }
      &.quantity {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        span {
          font-size: 1.2rem;
        }
        button {
          margin: 0.3rem;
        }
      }
    }
  }

  th, td {
    padding: 0.5rem;
  }
`;

export default Table;
