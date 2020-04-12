import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <body>
      <Top />
    </body>
  );
}

function Top() {
  const Nav = styled.nav`
    display: block;
    min-width: 240px;
    width: 240px;
    height: 100vh;
    background-color: #f7f9fa;
  `;
  const Logo = styled.header`
    font-family: "gotham";
    font-size: 36px;
    font-weight: 500;
    padding-top: 18px;
    padding-bottom: 40px;
    padding-left: 40px;
  `;
  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
  `;
  const MainContainer = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100vh;
    background-color: white;
  `;
  const MainWrapper = styled.div`
    flex-grow: 1;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 80px;
  `;
  const PageTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 32px;
  `;
  const TopBar = styled.nav`
    border-bottom: 1px solid #e6e8eb;
  `;
  const TopBarContent = styled.span`
    font-size: 12px;
    font-weight: 700;
    line-height: 36px;
  `;
  const RightContainer = styled.div`
    width: 280px;
    height: 100vh;
  `;
  const RightContainerWrapper = styled.div`
    padding-top: 40px;
  `;
  const CreateButton = styled.div`
    width: 178px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 8px 16px;
    border-radius: 4px;
    text-align: center;
    background-color: #44a4ff;
    color: white;
    font-size: 12px;
    font-weight: 700;
  `;
  const Docs = styled.ul``;
  const DocContainer = styled.li`
    height: 72px;
    border-bottom: 1px solid #e6e8eb;
  `;
  const Doc = styled.div`
    padding-left: 16px;
    padding-top: 16px;
    padding-bottom: 8px;
  `;
  // ↓苦しいレスポンス対応
  const DocTitle = styled.p`
    font-size: 16px;
    font-weight: 600px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
  const DocInfo = styled.span`
    font-size: 12px;
    font-color: #637282;
    padding-right: 16px;
  `;
  const DocDummyItem = () => {
    return (
      <DocContainer>
        <Doc>
          <DocTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DocTitle>
          <DocInfo>Created - Last month</DocInfo>
          <DocInfo>7 versions</DocInfo>
        </Doc>
      </DocContainer>
    );
  };

  return (
    <Container>
      <Nav>
        <Logo>verdog</Logo>
      </Nav>
      <MainContainer>
        <MainWrapper>
          <PageTitle>Home</PageTitle>
          <TopBar>
            <TopBarContent>Docs</TopBarContent>
          </TopBar>
          <Docs>
            <DocDummyItem />
            <DocDummyItem />
            <DocDummyItem />
            <DocDummyItem />
            <DocDummyItem />
            <DocDummyItem />
          </Docs>
        </MainWrapper>
        <RightContainer>
          <RightContainerWrapper>
            <CreateButton>Create new doc</CreateButton>
          </RightContainerWrapper>
        </RightContainer>
      </MainContainer>
    </Container>
  );
}

function Edit() {
  return <h2>Edit</h2>;
}
