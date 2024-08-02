// eslint-disable-next-line no-unused-vars
import React from "react";
import Dropdown, { DropdownItem } from "../../components/Dropdown";
import ProjectList from "../../components/ProjectList";
import { Section, Wrapper, TitleWrapper, Title, Text, List, ListItem, ListHref } from "./ProjectsStyle";

function Projects() {
  const items = [
    {
      key: "1",
      href: "https://zemscript.github.io/PasswordGenerator/",
      title: "Генератор паролей",
      text: "Данный генератор способен создавать пароли длиной до 32 символов с использованием строчных и заглавных букв, цифр, а также специальных символов.",
    },
    {
      key: "2",
      href: "https://zemscript.github.io/StendhalEditor/",
      title: "StendhalEditor",
      text: "С помощью этого веб-приложения можно перенести текст в книгу в Minecraft. Для работы требуется мод.",
    },
    {
      key: "3",
      href: "#",
      title: "Какой-то проект",
      text: "Это описание к проекту.",
    },
    {
      key: "4",
      href: "#",
      title: "Какой-то проект",
      text: "Это описание к проекту.",
    },
    {
      key: "5",
      href: "#",
      title: "Какой-то проект",
      text: "Это описание к проекту.",
    },
    {
      key: "6",
      href: "#",
      title: "Какой-то проект",
      text: "Это описание к проекту.",
    },
  ];

  return (
    <Section>
      <Wrapper>
        <TitleWrapper>
          <Title>Мои проекты</Title>
        </TitleWrapper>
        <List>
          <ListItem>
            <Dropdown buttonText="StendhalEditor">
              <DropdownItem>Это веб приложение помогает перенести текст в Майнкрафт</DropdownItem>
              <DropdownItem>
                <ListHref href="https://zemscript.github.io/StendhalEditor/">Перейти</ListHref>
              </DropdownItem>
            </Dropdown>
          </ListItem>
          <ListItem>
            <Dropdown buttonText="Генератор паролей">
              <DropdownItem>
                Простой генератор паролей. С ним можно создать пароль длиной в 32 символа. В нём могут быть строчные и
                заглавные буквы, а также цифры и некоторые специальные символы.
              </DropdownItem>
              <DropdownItem>
                <ListHref href="https://zemscript.github.io/PasswordGenerator/">Перейти</ListHref>
              </DropdownItem>
            </Dropdown>
          </ListItem>
        </List>
        <ProjectList items={items}></ProjectList>
        <Text>Работы сделаны с использованием React + JS</Text>
      </Wrapper>
    </Section>
  );
}

export default Projects;
