import styled from "styled-components";

export const Card = styled.div`
  width: 94%;
  display: flex;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin-bottom: 2rem;
  & hr {
    opacity: 0.5;
    margin: 0.5rem 0;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    text-align: left;
    height: 160px;
  }
  @media only screen and (min-width: 750px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & hr {
      display: none;
    }
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
