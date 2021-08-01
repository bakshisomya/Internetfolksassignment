import React from "react";
import { Div, Linkwrap, Col, I, Footerlink } from "./Links.style";
import { Text } from "../Mainbody.style";

function Links() {
  return (
    <Div>
      <Text color="white" fontsize="28px">
        Shortly
      </Text>
      <Linkwrap>
        <Col
          display="flex"
          direction="column"
          alignmobile="center"
          justifymobile="center"
        >
          <Footerlink
            fontsize="14px"
            fontweight="700"
            margin="1rem"
            color="white"
          >
            Features
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Link Shortening
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Branded Links
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Analytics
          </Footerlink>
        </Col>
        <Col
          display="flex"
          direction="column"
          alignmobile="center"
          justifymobile="center"
        >
          <Footerlink
            fontsize="14px"
            fontweight="700"
            margin="1rem"
            color="white"
          >
            Resources
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Blog
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Developers
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Support
          </Footerlink>
        </Col>
        <Col
          display="flex"
          direction="column"
          alignmobile="center"
          justifymobile="center"
        >
          <Footerlink
            fontsize="14px"
            fontweight="700"
            margin="1rem"
            color="white"
          >
            Company
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            About
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Our Team
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Careers
          </Footerlink>
          <Footerlink
            fontsize="14px"
            fontweight="500"
            margin=".5rem"
            color="#bfbfbf"
          >
            Contact
          </Footerlink>
        </Col>
        <Col display="flex" alignmobile="center" justifymobile="center">
          <I className="ri-facebook-box-fill" color="white"></I>
          <I className="ri-twitter-fill" color="white"></I>
          <I className="ri-pinterest-fill" color="white"></I>
          <I className="ri-instagram-line" color="white"></I>
        </Col>
      </Linkwrap>
    </Div>
  );
}

export default Links;
