import React from "react";
import styled from "styled-components";
import { ReactComponent as VK } from "static/VK.svg";
import { ReactComponent as Instagram } from "static/instagram.svg";
import { ReactComponent as FB } from "static/fb.svg";
import { ReactComponent as Twitter } from "static/Twitter.svg";
import { ReactComponent as Youtube } from "static/Youtube.svg";

export default () => (
  <Container>
    <a
      href="https://vk.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <VK />
    </a>
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FB />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Twitter />
    </a>
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Youtube />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Instagram />
    </a>
  </Container>
);

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 10rem;
  right: 0;
  padding-right: 0.8rem;
  flex-flow: column nowrap;
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  svg {
    margin: 15px 33px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 250ms ease-in-out 0s;
    :hover {
      opacity: 1;
    }
  }
  @media (max-height: 800px) {
    top: 5rem;
  }
  @media (max-height: 750px) {
    top: 3rem;
  }
`;
