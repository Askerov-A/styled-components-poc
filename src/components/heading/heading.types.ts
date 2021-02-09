import { HTMLAttributes } from "react";

export type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>;