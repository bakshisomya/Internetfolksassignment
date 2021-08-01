import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Linkwrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 65%;
  height: 100%;
  padding-top: 0.5rem;
  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }
`;
export const Col = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
  flex-direction:${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  @media only screen and (max-width: 750px) {
    display: ${(props) => props.displaymobile};
    justify-content: ${(props) => props.justifymobile};
    align-items: ${(props) => props.alignmobile};
    text-align: center;
    margin: 1rem;
  }
  &Footerlink:hover{
    color:#2acfcf;
    cursor: pointer;
  }
  }
`;
export const Footerlink = styled.a`
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  line-height: ${(props) => props.lineh};
  letter-spacing: ${(props) => props.lettersp};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.margin};
  text-align: ${(props) => props.textalign};
  @media only screen and (max-width: 750px) {
    font-size: ${(props) => props.fontsizemobile};
    font-weight: ${(props) => props.fontweightmobile};
    line-height: ${(props) => props.linehmobile};
    letter-spacing: ${(props) => props.letterspmobile};
    color: ${(props) => props.colormobile};
    margin-bottom: ${(props) => props.marginmobile};
    text-align: ${(props) => props.textalignmobile};
  }
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
`;
export const I = styled.i`
  font-size: 1.6rem;
  margin: 0.7rem;
  color: #ffffff;
  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  @media only screen and (min-width: 750px) {
    margin-top: -0.1rem;
  }
`;
