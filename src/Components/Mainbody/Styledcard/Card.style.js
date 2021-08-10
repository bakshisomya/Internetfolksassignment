import styled from "styled-components";

export const Cardscontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 896px) {
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
  @media only screen and (min-width: 897px) {
    margin: 0rem 1rem 1rem 1rem;
    &:nth-child(3) {
      margin-top: 5rem;
    }
    &:nth-child(5) {
      margin-top: 10rem;
    }
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
  @media only screen and (max-width: 896px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;
export const Line = styled.div`
  width: 7px;
  height: 80px;
  background-color: #2acfcf;
  @media only screen and (min-width: 897px) {
     {
      height: 38px;
      transform: rotate(90deg);
    }
  }
`;
