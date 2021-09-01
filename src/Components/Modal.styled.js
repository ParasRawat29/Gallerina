import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);

  .closeBtn {
    position: absolute;
    top: 2%;
    right: 10%;
  }
  .content {
    width: 70%;
    height: 70%;
    margin: 60px auto;
    color: black;
    text-align: center;
  }
`;
