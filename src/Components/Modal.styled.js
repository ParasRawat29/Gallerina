import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10000;
  .closeBtn {
    position: absolute;
    top: 2%;
    right: 10%;
    color: white;
    background-color: inherit;
    border-radius: 50%;
  }
  .content {
    width: 70%;
    height: 70%;
    margin: 60px auto;
    color: white;
    text-align: center;
    .footer {
      min-width: 250px;
      margin: auto;
      width: 60%;
      h4 {
        display: inline-block;
      }
      .deleteBtn {
        background-color: #e22828;
        color: white;
        display: block;
        width: 70%;
        margin: auto;
        border-radius: 50px;
        font-size: 1.3rem;
        text-align: center;
        padding: 5px;
      }
    }
  }
  .img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    margin-bottom: 5px;
  }
  h4 {
    word-spacing: 2px;
  }
  @media only screen and (max-width: 999px) {
    .content {
      .footer .deleteBtn {
        margin-top: 70px;
      }
    }
  }
  @media only screen and (max-width: 770px) {
    .content {
      .img {
        margin-top: 20%;
      }
      .footer .deleteBtn {
        margin-top: 70px;
      }
    }
  }
  @media only screen and (max-width: 470px) {
    .content {
      .img {
        margin-top: 50%;
      }
    }
  }
`;
