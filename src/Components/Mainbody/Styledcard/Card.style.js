import styled from "styled-components";

export const Cardscontainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Cardwrap = styled.div`
  position: relative;
  width: 20rem;
  border-radius: 10px;
  background-color: white;
  padding: 4rem 2rem 2rem 2rem;
  @media only screen and (max-width: 750px) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 750px) {
    margin-right: 2rem;
  }
`;
export const Cardimg = styled.div`
  position: absolute;
  top: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background-color: #3b3054;
  border-radius: 50%;
  & img {
    width: 2rem;
  }
  @media only screen and (max-width: 750px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;
