import React from "react";
import styled from "styled-components";

const ParameterTitle = styled.div`
  font-size: 12pt;
  background-color: transparent;
`;

const Parameter = styled(({ label, children, value }) => (
  <>
    <ParameterTitle>
      {label}
      {value && ": " + value}
    </ParameterTitle>
    {children}
  </>
))``;

export default Parameter;
