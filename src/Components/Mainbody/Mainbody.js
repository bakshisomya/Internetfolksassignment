import React, { useState } from "react";
import {
  Container,
  Header,
  Illustration,
  Headline,
  Text,
  Body,
  Form,
  Input,
  Lowerbody,
  Text2,
  Footer,
  Footerlinks,
} from "./Mainbody.style";
import { Button } from "../Button.style";
import Card from "./Styledcard/Card";
import img from "../../assets/images/illustration-working.svg";
import Links from "./Links/Links";
import Outputcards from "./Outputcards/Outputcards";
import axios from "axios";

function Mainbody() {
  const [input, setinput] = useState("");
  const [output, setoutput] = useState([]);
  const [error, seterror] = useState(false);
  const shortenUrl = async (url) => {
    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => {
        let { code, full_short_link, original_link } = res.data.result;
        let newobj = { code, full_short_link, original_link };
        let arr = [...output];
        arr.push(newobj);
        setoutput(arr);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (input === "") {
      seterror(true);
    } else {
      shortenUrl(input);
      setinput("");
    }
  };
  const onChangeHandler = (event) => {
    setinput(event.target.value);
  };
  return (
    <Container>
      <Header>
        <Illustration src={img} alt="illustration-working" />
        <Headline>
          <Text
            fontweight="700"
            color="#35323e"
            fontsize="65px"
            fontsizemobile="50px"
            lineh="1.1"
            linehmobile="1.1"
            lettersp="-1.2px"
            letterspmobile="-1px"
            marginmobile="1rem"
          >
            More than just shorter links
          </Text>
          <Text fontweight="500" color="#bfbfbf" fontsize="18px" margin="2rem">
            Build your brand's recognition and get detailed
            <br /> insights on how your links are performing.
          </Text>
          <Button
            padding="12px 40px"
            paddingmobile="15px 45px"
            fontweight="700"
            fontsize="17px"
            margintop="5rem"
            backgroundcolor="#2acfcf"
            radius="50px"
            color="white"
          >
            Get Started
          </Button>
        </Headline>
      </Header>
      <Body>
        <Form onSubmit={onSubmitHandler}>
          <div>
            <Input
              onChange={onChangeHandler}
              type="url"
              name="input"
              placeholder="Shorten a link here..."
              value={input}
              bordercolor={error ? "#f46262" : "transparent"}
              placeholdercolor={error ? "#f4626265" : "#bfbfbf"}
            />
            {error ? <Text2 color="#f46262">Please add a link</Text2> : ""}
          </div>
          <Button
            padding="12px 40px"
            fontweight="700"
            fontsize="17px"
            backgroundcolor="#2acfcf"
            radius="10px"
            color="white"
            widthmobile="90%"
            type="submit"
          >
            Shorten It!
          </Button>
        </Form>
        <Lowerbody>
          {output.length > 0 ? (
            <Outputcards input={input} output={output} />
          ) : (
            ""
          )}
          <Text margin="1rem" color="#232127">
            Advanced Statistics
          </Text>
          <Text2
            textalign="center"
            color="#9e9aa7"
            margin="5rem"
            marginmobile="6rem"
          >
            Track how your links are performing accross the web with
            <br /> our advanced statistics dashboard.
          </Text2>
          <Card />
        </Lowerbody>
      </Body>
      <Footer>
        <Text
          color="white"
          fontweight="700"
          margin="1.5rem"
          fontsizemobile="25px"
        >
          Boost your links today
        </Text>
        <Button
          padding="12px 40px"
          paddingmobile="15px 45px"
          fontweight="700"
          fontsize="17px"
          margintop="5rem"
          backgroundcolor="#2acfcf"
          radius="50px"
          color="white"
        >
          Get Started
        </Button>
      </Footer>
      <Footerlinks>
        <Links />
      </Footerlinks>
    </Container>
  );
}

export default Mainbody;
