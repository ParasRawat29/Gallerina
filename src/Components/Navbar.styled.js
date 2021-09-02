import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0%;

  ul {
    display: flex;
    width: 100%;
    border-bottom: 2px solid purple;
    justify-content: space-between;
    list-style-type: none;
    padding: 5px;
    margin-bottom: 0;
    li {
      text-decoration: none;
      .signOutBtn {
        padding: 3px 20px;
        border-radius: 20px;
        color: #e7624f;
        background-color: white;
        border: 3px solid #e7624f;
        font-weight: 700;
        font-size: 1.3rem;
        &:hover {
          background-color: #e7624f;
          color: white;
        }
      }
    }
    .navHead {
      font-size: 1.7rem;
      font-weight: 700;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #a100ffff 0%, #71c4ffff 100%);
      display: inline;
    }
  }
`;
