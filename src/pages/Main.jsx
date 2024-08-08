// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectList from "../components/ProjectList";
import {
  Section,
  Wrapper,
  TitleWrapper,
  Title,
  // List
} from "./MainStyle";
// import DropdownShow from "../../components/UI/Dropdown/DropdownShow";
import Lock from "../assets/img/lock.svg";
import Book from "../assets/img/book.svg";
import plink from "../assets/video/plink.webp";

function Projects() {
  const items = [
    {
      key: "1",
      href: "https://zemscript.github.io/PasswordGenerator/",
      img: Lock,
      title: "Генератор паролей",
      text: "Данный генератор способен создавать пароли длиной до 32 символов с использованием строчных и заглавных букв, цифр, а также специальных символов.",
    },
    {
      key: "2",
      href: "https://zemscript.github.io/StendhalEditor/",
      img: Book,
      title: "StendhalEditor",
      text: "С помощью этого веб-приложения можно перенести текст в книгу в Minecraft. Для работы требуется мод.",
    },
  ];
  // const dropItems = [
  //   {
  //     key: "1",
  //     href: "https://zemscript.github.io/StendhalEditor",
  //     title: "StendhalEditor",
  //     text: "Это веб приложение помогает перенести текст в Майнкрафт",
  //   },
  //   {
  //     key: "2",
  //     href: "https://zemscript.github.io/PasswordGenerator",
  //     title: "Генератор паролей",
  //     text: "Простой генератор паролей. С ним можно создать пароль длиной в 32 символа. В нём могут быть строчные и заглавные буквы, а также цифры и некоторые специальные символы.",
  //   },
  // ];

  return (
    <Section>
      <Wrapper>
        <TitleWrapper>
          <Title>Мои проекты</Title>
        </TitleWrapper>
        {/* <List>
          <DropdownShow items={dropItems}></DropdownShow>
        </List> */}
        <ProjectList items={items}></ProjectList>
        <img src={plink}></img>
      </Wrapper>
    </Section>
  );
}

export default Projects;
