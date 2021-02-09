import React from "react";
import styled from "styled-components";
import { BaseStyledParagraph } from "./BaseStyledParagraph";

export const StyledFancyText = styled(BaseStyledParagraph)`
  background-image: linear-gradient(45deg, red, blue);
`;

const FancyText = (props) => {
  return <StyledFancyText {...props} />;
};

export default FancyText;
