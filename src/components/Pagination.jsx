import React from "react";
import styled from "styled-components";
import { ReactComponent as TopArrow } from "static/topArrow.svg";
import { ReactComponent as DownArrow } from "static/downArrow.svg";
// constants
import { PAGES } from "constants/pages";

const pageTop = (goToPage, pageIndex) => () => {
  goToPage(pageIndex - 1);
};

const pageDown = (goToPage, pageIndex) => () => {
  goToPage(pageIndex + 1);
};

export default ({ goToPage, pageIndex }) => {
  return (
    <Container>
      <TopArrow onClick={pageTop(goToPage, pageIndex)} />
      <BorderPoint selected={pageIndex === PAGES.main}>
        <Point
          onClick={() => goToPage(PAGES.main)}
          selected={pageIndex === PAGES.main}
        />
      </BorderPoint>
      <BorderPoint selected={pageIndex === PAGES.link}>
        <Point
          onClick={() => goToPage(PAGES.link)}
          selected={pageIndex === PAGES.link}
        />
      </BorderPoint>
      <DownArrow onClick={pageDown(goToPage, pageIndex)} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding-right: 1em;
  svg {
    color: ${p => p.theme.palette.brand.secondaryColor};
    opacity: 0.5;
    cursor: pointer;
    margin: 0 31px;
    transition: all 350ms ease-in-out 0s;
    :hover {
      opacity: 1;
    }
  }
`;
const BorderPoint = styled.div`
  margin: 25px 33px;
  border-radius: 50%;
  border: 1px solid
    ${p =>
      p.selected
        ? `${p.theme.palette.components.pagination.selectedBorderColor}}`
        : `${p.theme.palette.brand.primaryColor}`};
  cursor: pointer;
`;
const Point = styled.div`
  border-radius: 50%;
  height: 16px;
  width: 16px;
  margin: 2px;
  background-color: ${p => p.theme.palette.brand.secondaryColor};
  opacity: ${p => (p.selected ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  transition: all 350ms ease-in-out 0s;
`;
