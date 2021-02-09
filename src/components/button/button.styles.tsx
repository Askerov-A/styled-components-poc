import styled from "styled-components";

export const StyledButton = styled.button<{ href: any }>`
  text-transform: uppercase;
  border: ${({ color }) => (color ? "none" : `1px solid black;`)};
  color: black;
  background-color: ${({ color, disabled }) => {
    if (disabled) {
      return "grey";
    }

    switch (color) {
      case "primary":
        return "blue";
      case "secondary":
        return "orangered";
      case "error":
        return "red";
      default:
        return "#fff";
    }
  }};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.5rem;
  :disabled {
    cursor: default;
  }
`;
