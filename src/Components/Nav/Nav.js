import React, { useState } from "react";
import { NavWrapper, Logo, Left, Right, Link, Linkwrap } from "./Nav.style";
import { Button } from "../Button.style";
import logo from "../../assets/images/logo.svg";

function Nav() {
  const [showlinks, setshowlinks] = useState(false);
  return (
    <NavWrapper>
      <Left>
        <Logo src={logo} alt="logo" />
        <Linkwrap show={showlinks}>
          <div>
            <Link href="!#" show={showlinks}>
              Features
            </Link>
            <Link href="!#" show={showlinks}>
              Pricing
            </Link>
            <Link href="!#" show={showlinks}>
              Resources
            </Link>
          </div>
          <div>
            <Button
              padding="7px 16px"
              backgroundcolor="transparent"
              color="#9e9aa7"
              fontweight="700"
              radius="50px"
            >
              Login
            </Button>
            <Button
              padding="13px 110px"
              backgroundcolor="#2acfcf"
              color="white"
              fontweight="500"
              fontsize="14px"
              radius="50px"
            >
              Sign Up
            </Button>
          </div>
        </Linkwrap>
      </Left>
      <Right>
        <i
          onClick={() => setshowlinks(!showlinks)}
          className="ri-menu-line"
        ></i>
        <Button
          padding="7px 16px"
          backgroundcolor="transparent"
          color="#9e9aa7"
          fontweight="700"
          radius="50px"
        >
          Login
        </Button>
        <Button
          padding="7px 16px"
          backgroundcolor="#2acfcf"
          color="white"
          fontweight="500"
          fontsize="14px"
          radius="50px"
          marginleft="18px"
        >
          Sign Up
        </Button>
      </Right>
    </NavWrapper>
  );
}

export default Nav;
