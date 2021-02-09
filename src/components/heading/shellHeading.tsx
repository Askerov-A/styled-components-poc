import React from "react";
import { HeadingProps } from "./heading.types";

const ShellHeading: React.FC<HeadingProps> = ({
  as: Component = "h1",
  children,
  ...attrs
}) => {
  return <Component {...attrs}>{children}</Component>;
};

export default ShellHeading;
