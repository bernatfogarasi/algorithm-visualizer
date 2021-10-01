import React from "react";
import styled from "styled-components";
import PaperRaw from "@material-ui/core/Paper";

const Title = styled.div`
  font-size: 35px;
  margin: 0px 30px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin: 10px 30px;
`;

const Paper = styled((props) => <PaperRaw {...props} />)`
  && {
    margin: 30px 30px;
  }
`;

const PageTemplate = ({ title, subTitle, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Paper>{children}</Paper>
    </>
  );
};

export default PageTemplate;
