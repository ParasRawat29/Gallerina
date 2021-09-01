import styled from "styled-components";

export const PreviewModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  header {
    font-size: 1.62rem;
    font-weight: 700;
    height: 10%;
    color: antiquewhite;
  }
  section {
    width: 100%;
    height: 80%;
    padding: 10px;

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 310px;
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
`;

export const HomeWrapper = styled.div`
  text-align: center;
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
