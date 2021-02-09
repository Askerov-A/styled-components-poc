import React from "react";
import styled from "styled-components";
import { StyledAside } from "./Aside";

export const StyledParagraph = styled.p`
  line-height: 2;
  color: white;

  ${StyledAside} & {
    color: blue;
  }
`;

const Text = (props) => {
  return <StyledParagraph {...props} />;
};

export default Text;
