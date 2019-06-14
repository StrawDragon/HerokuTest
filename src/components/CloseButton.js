import React from "react";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

// кнопка закрытия модалок, драверов и прочих контекстных элементов
export default props => (
  <CloseButton {...props}>
    <CloseIcon />
  </CloseButton>
);

const CloseButton = styled(IconButton)`
  padding: 0;
  z-index: 103;
  position: absolute !important;
  right: ${p => (p.hasHeader ? "10px" : "0")};
  top: ${p => (p.hasHeader ? "10px" : "0")};
  border-radius: 50% !important; //надо будет искать где перезапись идет в  border-radius: 10px
  width: 48px;
  height: 48px;

  svg {
    width: 24px;
    opacity: 0.7;
    color: #fff;
    transition: 0.3s all;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: rotate(180deg);
      transition: 0.3s all;
      color: #fff;
    }
  }
`;
