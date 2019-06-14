import React from "react";
import styled, { css } from "styled-components";
// components
import Card from "../../Main/Card";
// images
import { ReactComponent as BannerIcon } from "static/BannerIcon.svg";
import { ReactComponent as IFrameIcon } from "static/IFrameIcon.svg";
import { ReactComponent as LinkIcon } from "static/LinkIcon.svg";
import { ReactComponent as InfoMain } from "static/infoMain.svg";
// constants
import { PAGES } from "constants/pages";
// styled
import { toogleScroll, disappearanceBottom } from "../../Styled";

export default ({ goToPage, pageIndex, isFirstScroll }) => (
  <Main id="main">
    <Header>
    </Header>
    <Content>
      <Card
        isRunAnimation={pageIndex === PAGES.main}
        isFirstScroll={isFirstScroll}
        title="Баннер"
        content="Разместите баннер в нужном формате на своей странице."
        onClick={() => goToPage(PAGES.link)}
      >
        <ContainerIcon>
          <BannerIcon />
        </ContainerIcon>
      </Card>
      <Card
        isRunAnimation={pageIndex === PAGES.main}
        isFirstScroll={isFirstScroll}
        title="iFrame"
        content="Подключите iFrame для возможности регистрации прямо с Вашей страницы."
        onClick={() => goToPage(PAGES.link)}
      >
        <ContainerIcon>
          <IFrameIcon />
        </ContainerIcon>
      </Card>
      <Card
        isRunAnimation={pageIndex === PAGES.main}
        isFirstScroll={isFirstScroll}
        title="Ссылка"
        content="Оставьте ссылку, это самый простой способ."
        onClick={() => goToPage(PAGES.link)}
      >
        <ContainerIcon>
          <LinkIcon />
        </ContainerIcon>
      </Card>
    </Content>
    <InfoMainContainer isRunAnimation={pageIndex === PAGES.banner}>
      <InfoMain />
    </InfoMainContainer>
  </Main>
);

// #region styled
const InfoMainContainer = styled.div`
  position: absolute;
  top: 35rem;
  right: 3.3rem;

  animation: ${toogleScroll} 1s infinite linear;
  ${p =>
    p.isRunAnimation &&
    css`
      animation: ${disappearanceBottom} 0.3s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    `};
  @media (max-height: 800px) {
    top: 26.5rem;
  }
  @media (max-height: 750px) {
    top: 22rem;
  }
`;
const ContainerIcon = styled.div`
  align-self: center;
  svg {
    width: 7rem;
    height: 7rem;
  }
`;
const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 80vw;
  margin: auto;
  padding-right: 17px;
  padding-left: 17px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div``;

const Title = styled.div``;

const CodeWrapper = styled.div`
  max-height: 7rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    ${({ theme }) => theme.palette.components.card.cardColor};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  padding: 1rem 4rem;
`;

const CodeValue = styled.span`
  font-weight: bold;
  font-size: 36px;
  margin-top: 10px;
  user-select: text;
`;

const CodeTitle = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.options.sizes.fontSize.cardTitleFontSize};
  line-height: 28px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 7rem 0;
`;
