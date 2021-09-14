import styled from "styled-components";

export const ImageGridStyle = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;

  .photoInGrid {
    max-width: 370px;
    max-height: 200px;
    margin: 10px 10px;
    background-color: grey;
    border-radius: 10px;
    min-width: 10px;
    cursor: pointer;
  }
`;
