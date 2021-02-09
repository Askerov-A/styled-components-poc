import React from "react";
import styled from "styled-components";
import Aside from "./Aside";

import Button from "./components/button";
import { StyledInput } from "./components/fields/input/input.styles";
import Heading from "./components/heading";
import { StyledFancyText } from "./FancyText";
import Text from "./Text";

type FooterProps = {
  color?: any;
  opacity?: number;
};

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledFooter = styled.div`
  background-color: var(--color, blueviolet);
  min-height: 3rem;
  opacity: var(--opacity, 1);
`;

const Footer: React.FC<FooterProps> = ({ color, opacity, children }) => (
  <StyledFooter
    style={{
      "--color": color,
      "--opacity": opacity,
    }}
  >
    {children}
  </StyledFooter>
);

function App() {
  return (
    <Main>
      <Heading>Demo page</Heading>

      <Heading as="h2">Button</Heading>
      <Button color="primary">Send primary</Button>
      <Button color="secondary">Send secondary</Button>
      <Button color="error">Send error</Button>

      <Button disabled>Send disabled</Button>

      <Aside>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
          dicta temporibus animi fugiat fuga iste vel a. Eos ut, quibusdam
          ducimus ex dicta sapiente quidem quasi et velit aliquam temporibus?
        </Text>
        <StyledFancyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quasi
          tenetur! Dolorem nesciunt ab recusandae illo fugiat quod perspiciatis
          aliquid vel ut. Ea dolore inventore at deleniti illum itaque debitis?
        </StyledFancyText>
      </Aside>

      <Footer color="red">
        <h1>Hello</h1>
      </Footer>
    </Main>
  );
}

export default App;
