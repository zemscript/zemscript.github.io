import CompPageProjects from "../components/comp-projects/comp-page-projects";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

function PageProjects() {
  return (
    <Section>
      <Wrapper>
        <CompPageProjects></CompPageProjects>
      </Wrapper>
    </Section>
  );
}

export default PageProjects;
