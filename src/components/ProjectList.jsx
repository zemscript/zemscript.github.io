// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Arrow from "../assets/img/arrowOutward.svg";

const ProjectList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const itemsToShow = showAll ? items : items.slice(0, 4);

  return (
    <div>
      <List>
        {itemsToShow.map((item) => (
          <ListItem key={item.key}>
            <Card>
              <CardLink href={item.href}>
                <CardWrapper>
                  <CardTitle>{item.title}</CardTitle>
                  {item.href && <CardArrow src={Arrow} alt="Стрелочка" />}
                </CardWrapper>
                <CardText>{item.text}</CardText>
              </CardLink>
            </Card>
          </ListItem>
        ))}
      </List>
      <ShowMoreButtonWrapper>
        {items.length > 4 && (
          <ShowMoreButton onClick={toggleShowAll}>{showAll ? "Скрыть" : "Показать всё"}</ShowMoreButton>
        )}
      </ShowMoreButtonWrapper>
    </div>
  );
};

ProjectList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      href: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectList;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListItem = styled.li`
  margin: 0.75rem 0;
`;

const ShowMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ShowMoreButton = styled.button`
  background-color: var(--colorMain);
  color: white;
  padding: 0.75rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  width: 30%;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  width: 70rem;
  background: var(--colorBackground);
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CardArrow = styled.img``;

const CardTitle = styled.h2`
  font-family: var(--fontTitle);
  font-size: 1.8rem;
  color: #ffffff;
`;

const CardText = styled.span`
  font-family: var(--fontText);
  font-size: 1.4rem;
  color: #ffffff;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: var(--colorMain);
  font-size: 1.4rem;

  &:hover {
    color: #c0c0c0;
  }
`;
