import React from "react";
import styled, { css } from "styled-components";

import {
  appearanceLeft,
  disappearanceLeft,
  appearanceRight,
  disappearanceRight
} from "../Styled";

export default ({
  isRunAnimation,
  isFirstScroll,
  children,
  title,
  content,
  onClick
}) => (
  <CardWrapper isRunAnimation={isRunAnimation} isFirstScroll={isFirstScroll}>
    {children}
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Button onClick={onClick}>Подробнее</Button>
  </CardWrapper>
);

// #region styled

const CardWrapper = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    ${({ theme }) => theme.palette.components.card.cardColor};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  justify-content: space-around;
  width: 285px;
  height: 380px;
  :nth-child(2) {
    transform: scale(1.1);
    z-index: 10;
  }
  :first-child {
    ${p =>
      p.isRunAnimation
        ? css`
            animation: ${appearanceLeft} ${p.isFirstScroll ? 1.4 : 0}s
              cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
            animation-fill-mode: forwards;
          `
        : css`
            animation: ${disappearanceLeft} 700ms
              cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
            animation-fill-mode: forwards;
          `};
  }
  :last-child {
    ${p =>
      p.isRunAnimation
        ? css`
            animation: ${appearanceRight} ${p.isFirstScroll ? 1.4 : 0}s
              cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
            animation-fill-mode: forwards;
          `
        : css`
            animation: ${disappearanceRight} 700ms
              cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
            animation-fill-mode: forwards;
          `};
  }

  @media (min-height: 701px) and (max-height: 850px) {
    height: 280px;
  }
  @media (max-height: 700px) {
    height: 240px;
    width: 210px;
  }
`;

const Button = styled.a`
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  font-size: ${({ theme }) => theme.options.sizes.fontSize.buttonFontSize};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.3s;
  :hover {
    background-color: ${p => p.theme.palette.brand.secondaryColor};
    color: ${p => p.theme.palette.brand.primaryColor};
  }
  :active {
    transform: scale(0.97);
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  font-weight: 500;
  font-size: ${({ theme }) => theme.options.sizes.fontSize.cardTitleFontSize};
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 24px;
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  font-size: ${({ theme }) => theme.options.sizes.fontSize.cardContentFontSize};
  @media (max-width: 1400px) {
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;
