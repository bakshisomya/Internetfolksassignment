import styled from "styled-components";
import bg from "../../assets/images/bg-shorten-desktop.svg";
import mobilebg from "../../assets/images/bg-shorten-mobile.svg";
import footerbg from "../../assets/images/bg-boost-desktop.svg";
import mobilefooterbg from "../../assets/images/bg-boost-mobile.svg";

export const Container = styled.div`
  width: 100%;
  height:310vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 34%;
  padding: 2rem 10rem 0rem 10rem;
  @media only screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 29rem 0rem 25rem 0rem;
  }
`;
export const Illustration = styled.img`
  position: absolute;
  top: 4%;
  right: -55%;
  height: 11.8%;
  @media only screen and (min-width: 750px) {
    top: 8%;
    right: -10%;
    height: 450px;
  }
`;
export const Headline = styled.div`
  height: 100%;
  @media only screen and (min-width: 750px) {
    width: 50%;
    margin-top: 10rem;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    padding: 0rem 1.1rem 0rem 1.1rem;
    text-align: center;
  }
`;
export const Text = styled.h1`
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  line-height: ${(props) => props.lineh};
  letter-spacing: ${(props) => props.lettersp};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.margin};
  @media only screen and (max-width: 750px) {
    font-size: ${(props) => props.fontsizemobile};
    font-weight: ${(props) => props.fontweightmobile};
    line-height: ${(props) => props.linehmobile};
    letter-spacing: ${(props) => props.letterspmobile};
    color: ${(props) => props.colormobile};
    margin-bottom: ${(props) => props.marginmobile};
  }
`;
export const Body = styled.div`
  position: relative;
  width: 100%;
  background-color: #eff1f7;
  margin-top: 3rem;
  padding: 8rem 10rem 8rem 10rem;
  @media only screen and (max-width: 750px) {
    padding: 1.2rem;
  }
`;
export const Form = styled.form`
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  width: 76%;
  max-height: 160px;
  padding: 2rem 0rem 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #3b3054;
  @media only screen and (max-width: 750px) {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${mobilebg});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 250px;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 750px) {
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      width: 80%;
    }
  }
`;
export const Input = styled.input`
  outline: none;
  border: 3px solid;
  border-color: ${(props) => props.bordercolor};
  border-radius: 10px;
  &::-webkit-input-placeholder {
    color: ${(props) => props.placeholdercolor};
    font-size: 17px;
  }
  @media only screen and (min-width: 750px) {
    width: 95%;
    padding: 0.8rem 2rem;
    margin-right: 1.3rem;
  }
  @media only screen and (max-width: 750px) {
    width: 90%;
    padding: 1rem 1rem;
  }
`;
export const Text2 = styled.p`
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
`;
export const Lowerbody = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${"" /* background-color: red; */}
  @media only screen and (max-width: 750px) {
    text-align: center;
  }
  @media only screen and (min-width: 750px) {
    padding-top: 3rem;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${footerbg});
  background-size: cover;
  background-position: center;
  background-color: #3b3054;
  text-align: center;
  @media only screen and (max-width: 750px) {
    height: 15%;
    background-image: url(${mobilefooterbg});
    background-size: cover;
    background-position: center;
  }
`;
export const Footerlinks = styled.div`
  width: 100%;
  height: 14.7%;
  background-color: #232127;
  padding: 4rem 10rem 4rem 10rem;
  @media only screen and (max-width: 750px) {
    height: 31%;
    padding: 3rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: scroll;
  }
`;
