import styled from "styled-components";
import "../global-styles";

export const Section = styled.section``;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: var(--fontTitle);
  font-size: 2.4rem;
`;

export const Text = styled.span`
  font-family: var(--fontText);
  font-size: 1.4rem;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: none;
  margin: 0.75rem 0;
`;

export const ListHref = styled.a`
  text-decoration: none;
  font-family: var(--fontText);
  font-size: 1.4rem;
`;
