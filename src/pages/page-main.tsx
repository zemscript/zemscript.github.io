import CompPageMain from "../components/comp-main/comp-page-main";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

function PageMain() {
  return (
    <Section>
      <Wrapper>
        <CompPageMain></CompPageMain>
      </Wrapper>
    </Section>
  );
}

export default PageMain;
