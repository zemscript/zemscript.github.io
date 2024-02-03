// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

function MyMain() {
  return (
    <Section>
      <Text>Under development 🐌</Text>
    </Section>
  );
}
export default MyMain;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  color: white;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
`;
