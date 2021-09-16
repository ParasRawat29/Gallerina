import styled from "styled-components";

export const PreviewModalStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
      max-height: 100px;
      min-height: 50px;
    }
    .textareaInput:focus {
      border-color: #719ece;
      box-shadow: 0 0 20px #719ece;
      color: black;
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
  }
  input {
    display: none;
  }
  label {
    margin-top: 20px;
    cursor: pointer;
  }
`;
