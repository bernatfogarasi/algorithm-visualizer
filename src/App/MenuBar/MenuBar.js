import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Logo from "./Logo";

const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const MenuBar = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
};

export default MenuBar;
