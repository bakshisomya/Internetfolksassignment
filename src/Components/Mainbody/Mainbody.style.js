import styled from "styled-components";
import bg from "../../assets/images/bg-shorten-desktop.svg";
import mobilebg from "../../assets/images/bg-shorten-mobile.svg";
import footerbg from "../../assets/images/bg-boost-desktop.svg";
import mobilefooterbg from "../../assets/images/bg-boost-mobile.svg";

export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  position: relative;
  @media only screen and (max-width: 896px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 29rem 0rem 12rem 0rem;
  }
  @media only screen and (min-width: 897px) {
    padding: 5rem 10rem 16rem 10rem;
  }
`;
export const Illustration = styled.img`
  position: absolute;
  top: 0;
  right: -52%;
  width: 600px;
  @media only screen and (min-width: 897px) {
    top: 5%;
    right: -8%;
    width: 650px;
  }
`;
export const Headline = styled.div`
  @media only screen and (min-width: 897px) {
    width: 50%;
  }
  @media only screen and (max-width: 896px) {
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
  @media only screen and (max-width: 896px) {
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
  padding: 8rem 10rem 0rem 10rem;
  @media only screen and (max-width: 896px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 1.2rem 1.2rem 1.2rem;
  }
`;
export const Form = styled.form`
  width: 76%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #3b3054;
  @media only screen and (max-width: 896px) {
    position: absolute;
    top: -7%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 99;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${mobilebg});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 250px;
    padding: 2rem 0rem 2rem 0rem;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 897px) {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 99;
    padding: 3rem 2rem 3rem 2rem;
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
  @media only screen and (min-width: 897px) {
    width: 95%;
    padding: 0.8rem 2rem;
  }
  @media only screen and (max-width: 896px) {
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
  @media only screen and (max-width: 896px) {
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
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 896px) {
    text-align: center;
    padding-bottom: 5rem;
  }
  @media only screen and (min-width: 897px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3b3054;
  text-align: center;
  @media only screen and (max-width: 896px) {
    background-image: url(${mobilefooterbg});
    background-size: cover;
    background-position: center;
    padding: 7rem 0 7rem 0;
  }
  @media only screen and (min-width: 897px) {
    background-image: url(${footerbg});
    background-size: cover;
    background-position: center;
    padding: 3rem 0 3rem 0;
  }
`;
export const Footerlinks = styled.div`
  width: 100%;
  background-color: #232127;
  @media only screen and (max-width: 896px) {
    padding: 4rem 2rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  @media only screen and (min-width: 896px) {
    padding: 4rem 10rem 4rem 10rem;
  }
`;
