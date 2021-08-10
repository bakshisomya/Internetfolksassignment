import React from "react";
import { Cardwrap, Cardimg, Cardscontainer, Line } from "./Card.style";
import { Text, Text2 } from "../Mainbody.style";
import cardimg1 from "../../../assets/images/icon-brand-recognition.svg";
import cardimg2 from "../../../assets/images/icon-detailed-records.svg";
import cardimg3 from "../../../assets/images/icon-fully-customizable.svg";

function Card() {
  return (
    <Cardscontainer>
      <Cardwrap>
        <Cardimg>
          <img src={cardimg1} alt="brand recognition" />
        </Cardimg>
        <Text fontsize="18px" color="#232127" margin="1rem">
          Brand Recognition
        </Text>
        <Text2 fontsize="13px" fontweight="500" color="#9e9aa7" lineh="1.7">
          Boost your brand recognition with each click.Generic links don't mean
          a thing.Branded links help instill confidence in your content.
        </Text2>
      </Cardwrap>
      <Line />
      <Cardwrap>
        <Cardimg>
          <img src={cardimg2} alt="brand recognition" />
        </Cardimg>
        <Text fontsize="18px" color="#232127" margin="1rem">
          Detailed Records
        </Text>
        <Text2 fontsize="13px" fontweight="500" color="#9e9aa7" lineh="1.7">
          Gain insights into who is clicking your links.Knowing when and where
          people engage with your consent helps inform better decisions.
        </Text2>
      </Cardwrap>
      <Line />
      <Cardwrap>
        <Cardimg>
          <img src={cardimg3} alt="brand recognition" />
        </Cardimg>
        <Text fontsize="18px" color="#232127" margin="1rem">
          Fully Customizable
        </Text>
        <Text2 fontsize="13px" fontweight="500" color="#9e9aa7" lineh="1.7">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </Text2>
      </Cardwrap>
    </Cardscontainer>
  );
}

export default Card;
