import styled from 'styled-components';

const Table = styled.table.attrs({
  cellSpacing: 0
}) `
  width: 100%;
  text-align: left;
  
  thead {
    font-size: 0.8rem;
    font-weight: 700;
    th {
      padding: 1rem 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.whiteGray};
    }
  }
  
  tfoot {
    font-size: 0.8rem;
    font-weight: 700;
    td {
      padding: 1rem 0.5rem;
      border: none;
    }
  }

  tbody {
    td {
      padding: 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.whiteGray};

      &.product-quantity {
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

  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }
`;

export default Table;
