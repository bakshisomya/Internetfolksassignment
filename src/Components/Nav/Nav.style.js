import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  height:10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 750px) {
    height: 5%;
    padding: 3rem 10rem 3rem 10rem;
  }
  @media only screen and (max-width: 750px) {
    height: 4%;
    padding: 2rem;
  }
`;
export const Logo = styled.img`
  width: 95px;
  @media only screen and (min-width: 750px) {
    margin-right: 3rem;
  }
`;
export const Left = styled.div`
  flex: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  @media only screen and (min-width: 750px) {
    & Button {
      display: none;
    }
  }
`;
export const Linkwrap = styled.div`
  @media only screen and (max-width: 750px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: ${({ show }) => (show ? "column" : "")};
    justify-content: ${({ show }) => (show ? "center" : "")};
    align-items: ${({ show }) => (show ? "center" : "")};
    position: ${({ show }) => (show ? "absolute" : "")};
    z-index: ${({ show }) => (show ? "99999" : "")};
    top: ${({ show }) => (show ? "5%" : "")};
    left: ${({ show }) => (show ? "5%" : "")};
    width: 20rem;
    height: 25rem;
    background-color: #3b3054;
    border-radius: 10px;
    overflow: hidden;
    & div {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:last-child {
        border-top: 1px solid #bfbfbf45;
        padding-top: 2rem;
      }
    }
    & Button {
      margin-bottom: 1rem;
      color: white;
    }
  }
`;
export const Link = styled.a`
  color: #9e9aa7;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  @media only screen and (min-width: 750px) {
    margin-right: 1.8rem;
  }
  @media only screen and (max-width: 750px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    color: white;
    margin-bottom: 2rem;
  }
  &:hover {
    color: #35323e;
    cursor: pointer;
  }
`;
export const Right = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (min-width: 750px) {
    & i {
      display: none;
    }
  }
  & Button {
    @media only screen and (max-width: 650px) {
      display: none;
    }
  }
  @media only screen and (max-width: 650px) {
    & i {
      display: flex;
      color: #9e9aa7;
      font-size: 2rem;
    }
  }
`;
