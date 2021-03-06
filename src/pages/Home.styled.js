import styled from "styled-components";

export const PreviewModalStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .previewWrapper {
    height: 100%;
    section {
      margin-bottom: 10px;
      height: 70%;
      img {
        max-height: 100%;
      }
    }
  }
  header {
    font-size: 1.62rem;
    font-weight: 700;
    height: 10%;
    color: antiquewhite;
    margin: 20px 0;
  }
  section {
    width: 100%;
    height: 80%;
    padding: 10px;
    max-height: 500px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  footer {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    height: 10%;
    .textareaInput {
      font-size: 1rem;
      padding: 4px;
      width: 80%;
      resize: none;
      outline: none;
      height: auto;
      max-height: 500px;
      background-color: #2c2f35;
      min-height: 50px;
      color: white;
    }
    .textareaInput:focus {
      border-color: #719ece;
      box-shadow: 0 0 20px #719ece;
      color: white;
    }
    .uploadBtn {
      padding: 2px 10px;
      border-radius: 20px;
      font-size: 1.3rem;
      background-color: lightgreen;
      color: black;
    }
  }
  @media only screen and (max-width: 600px) {
    section {
      height: max-content;
      margin-bottom: 50px;
    }

    footer {
      flex-direction: column;
      .textareaInput {
        width: 100%;
        min-height: 80px;
        margin-bottom: 30px;
      }
    }
  }
`;

export const HomeWrapper = styled.div`
  text-align: center;

  width: 100%;
  word-wrap: break-word;

  .head {
    font-size: 2.5rem;
    margin-bottom: 0.51rem;
    color: rebeccapurple;
    font-weight: 700;
  }
  h6 {
    font-weight: lighter;
  }
  input {
    display: none;
  }
  label {
    margin-top: 20px;
    cursor: pointer;
  }

  @media only screen and (max-width: 350px) {
    .head {
      font-weight: lighter;
    }
  }
`;
