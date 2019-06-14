import React from "react";
import styled from "styled-components";
// images
import { ReactComponent as Logo } from "static/dsrrfsrfs.svg";
// constants
import { PAGES } from "constants/pages";

export default ({ goToPage, pageIndex }) => (
  <Header>
    <ImgWrapper>
      <Logo />
    </ImgWrapper>
    <LinkWrapper>
      <Link onClick={() => goToPage(0)} selected={pageIndex === PAGES.main}>
        Главная
      </Link>
      <Link onClick={() => goToPage(3)} selected={pageIndex === PAGES.link}>
        Ссылка
      </Link>
    </LinkWrapper>
  </Header>
);

// #region styled
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 7%;
  height: 8vh;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.options.sizes.fontSize.headerFontSize};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2;
  margin-right: 30%;
`;

const Link = styled.div`
  color: ${({ theme }) => theme.palette.components.header.headerFontColor};
  cursor: pointer;
  padding-bottom: 12px;
  border-bottom: ${p => p.selected && `2px solid white`};
  font-weight: 500;
  opacity: ${p => (p.selected ? 1 : 0.7)};
  :hover {
    opacity: 1;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
`;
