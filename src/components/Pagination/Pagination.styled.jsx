import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledPagination = styled(ReactPaginate)`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  list-style-type: none;
  padding: 0;

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 42px;
    border-radius: 8px;
    border: #f69d3c 3px solid;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.37);
    font-size: 16px;
    color: #f69d3c;
    cursor: pointer;
  }
  li.active a {
    background-color: #ebf8e1;
    border-color: transparent;
    color: #3f87a6;
  }
  li.disabled a {
    color: #f69d3c;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
