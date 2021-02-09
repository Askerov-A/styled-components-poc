import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./button.styles";

type ButtonProps = {
  href?: string;
  color?: "primary" | "secondary" | "error";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ href, children, ...attrs }) => {
  const tag = href ? "a" : "button";

  return (
    <StyledButton as={tag} href={href} {...attrs}>
      {children}
    </StyledButton>
  );
};

export default Button;
