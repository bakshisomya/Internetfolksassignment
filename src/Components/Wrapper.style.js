import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  max-height: 1000vh;
  background-color: ${(props) => props.bg};
  @media only screen and (max-width: 750px) {
    height: 450vh;
  }
`;
