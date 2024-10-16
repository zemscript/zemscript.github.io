import * as st from "./comp-page-main-style";

function CompPageMain() {
  return (
    <st.DivStyled>
      <st.Title>
        Главная страница в разработке, но{" "}
        <st.Link href="https://zemscript.github.io/projects">
          <st.Span>проекты</st.Span>
        </st.Link>{" "}
        уже есть 😎
      </st.Title>
    </st.DivStyled>
  );
}

export default CompPageMain;
