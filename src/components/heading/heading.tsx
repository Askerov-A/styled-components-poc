import React from "react";
import { StyledHeading } from "./heading.styles";
import { HeadingProps } from "./heading.types";

const Heading: React.FC<HeadingProps> = (props) => {
  return <StyledHeading {...props} />;
};

export default Heading;
