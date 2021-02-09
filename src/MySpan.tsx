import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: yellow;

  && {
    color: red;
  }
`;

const MySpan = (props) => {
  return <StyledSpan {...props} />;
};

export default MySpan;
