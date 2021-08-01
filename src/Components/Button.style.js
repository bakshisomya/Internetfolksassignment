import styled from "styled-components";

export const Button = styled.button`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  border: none;
  font-weight: ${(props) => props.fontweight};
  margin-left: ${(props) => props.marginleft};
  @media only screen and (max-width: 750px) {
    width: ${(props) => props.widthmobile};
    padding: ${(props) => props.paddingmobile};
    background-color: ${(props) => props.backgroundcolormobile};
    border-radius: ${(props) => props.radiusmobile};
    color: ${(props) => props.colormobile};
    font-size: ${(props) => props.fontsizemobile};
    border: none;
    font-weight: ${(props) => props.fontweightmobile};
    margin-left: ${(props) => props.marginleftmobile};
  }

  &:hover {
    background-color: #adf1f1;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.backgroundcolorfocus};
  }
`;
