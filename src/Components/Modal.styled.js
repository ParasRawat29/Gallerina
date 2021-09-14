import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0%;
  height: 100vh;
  width: 100vw;

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
    height: 80%;
    min-height: 300px;
    min-width: 300px;
    min-height: 300px;
    margin: 40px auto;
    /* background-color: lightblue; */
    color: white;
    text-align: center;
    padding: 10px;

    .imageUploadWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      /* background-color: antiquewhite; */
      .imgWrapper {
        width: 100%;
        max-height: 90%;
        /* background-color: #e22828;
        padding: 3px; */
        margin-top: auto;
        img {
          max-width: 100%;
          max-height: 100%;

          margin-top: auto;
        }
      }

      .info {
        max-height: 40%;
        /* background-color: lightgreen; */
        text-align: left;
        margin-left: 20px;
        p {
          color: wheat;
        }
      }
      .footer {
        width: 100%;
        height: fit-content;
        margin-top: auto;
        /* background-color: teal; */
        .deleteBtn {
          background-color: #e22828;
          color: white;
          display: block;
          width: 70%;
          border-radius: 50px;
          font-size: 1.3rem;
          text-align: center;
          padding: 5px;
          margin: auto;
        }
      }
    }
  }
`;
