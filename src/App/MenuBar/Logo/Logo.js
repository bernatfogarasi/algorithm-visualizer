import React from "react";
import styled from "styled-components";
import ImageSource from "./assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const Image = styled((props) => <img src={ImageSource} alt="" {...props} />)`
  vertical-align: middle;
  width: 40px;
  height: 40px;
`;

const Title = styled.a`
  font-family: inherit;
  vertical-align: middle;
  font-size: 22pt;
  padding-left: 20px;
  margin-bottom: 4px;
`;

const Logo = () => {
  return (
    <Wrapper>
      <Image />
      <Title>AlgoVisualizer</Title>
    </Wrapper>
  );
};

export default Logo;
