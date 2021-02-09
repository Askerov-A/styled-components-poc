import React from "react";
import styled from "styled-components";
import { StyledFancyText } from "./FancyText";

export const StyledAside = styled.aside`
  background-color: greenyellow;

  ${StyledFancyText} {
    color: white;
  }
`;

const Aside = (props) => {
  return <StyledAside {...props} />;
};

export default Aside;
