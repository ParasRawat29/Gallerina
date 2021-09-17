import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: block;
  text-align: center;
  width: 70%;
  height: 70%;
  /* background-color: darkcyan; */
  min-width: 300px;
  margin: auto;
  margin-top: 3rem;

  .head {
    font-size: 3.75rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, #a100ffff 0%, #71c4ffff 100%);
    display: inline;
  }
  .info {
    color: gray;
  }
`;

export const SignInBtnWrapper = styled.div`
  display: block;
  margin: auto;
  margin-top: 2rem;
  min-width: 250px;
  width: 60%;
  border-radius: 40px;
  .googleSignIn {
    background-color: orange;

    border-radius: 50px;
    margin: 20px 0px;
  }
  .demoSignIn {
    background-color: teal;
    border-radius: 50px;
    button {
      color: white;
    }
  }
  button {
    width: 90%;
    outline: none;
    border: none;
    padding: 2px 20px;
    background-color: inherit;
    border-radius: 50px;
    font-size: 1.4rem;
    color: black;
  }
`;
