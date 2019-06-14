import React, { useState } from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie";
// styled
import {
  Title,
  Description,
  Information,
  Button,
  Wrapper,
  appearanceLeft,
  disappearanceLeft,
  appearanceRight,
  disappearanceRight
} from "../../Styled";
// constants
import * as animationData from "constants/iframeAnimatingConfig";
import { PAGES } from "constants/pages";
import CopyToClipboard from "react-copy-to-clipboard";
import Notification from "../../Notifications";
const EnvironmentService = require("services/EnvironmentService");

const { HELP_URL = "https://help.astral.ru" } = EnvironmentService;

const defaultOptions = {
  renderer: "svg",
  loop: true,
  animationData: animationData.default
};
export default ({ officeId, pageIndex }) => {
  const isStopped = pageIndex !== 2;

  const [open, setOpen] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (open && pageIndex !== PAGES.iframe) {
    setOpen(false);
  }

  const iFrameLink = `${HELP_URL}/integrationBlock?officeId=${officeId}`;

  return (
    <IFramePage>
      <IFrame id="iframe">
        <Wrapper>
          <LeftBlock isRunAnimation={pageIndex === PAGES.iframe}>
            <Lottie options={defaultOptions} isStopped={isStopped} />
          </LeftBlock>
          <RightBlock isRunAnimation={pageIndex === PAGES.iframe}>
            <Information>
              <Title>iFrame</Title>
              <Description>
                Чтобы использовать встраеваемый блок нажмите на кнопку{" "}
                <b>“Получить IFrame”</b> и следуйте дальнейшим инструкциям.
              </Description>
              <CopyToClipboard
                text={`<iframe src=${iFrameLink}
                            width="350px" height="311px" align="left" frameBorder="0" allowTransparency="true" />`}
              >
                <Button onClick={handleClick}>Получить IFrame</Button>
              </CopyToClipboard>
            </Information>
          </RightBlock>
        </Wrapper>
      </IFrame>
      <Notification
        open={open}
        onClose={handleClose}
        message="Код для iFrame успешно скопирован в буфер"
      />
    </IFramePage>
  );
};

// #region styled
const IFramePage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const IFrame = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 80vw;
  margin: auto;
  padding-right: 17px;
  padding-left: 17px;
  position: relative;
`;
const LeftBlock = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 5rem;
  ${p =>
    p.isRunAnimation
      ? css`
          animation: ${appearanceLeft} 1.4s
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          animation-fill-mode: forwards;
        `
      : css`
          animation: ${disappearanceLeft} 700ms
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          animation-fill-mode: forwards;
        `}
};
`;
const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${p =>
    p.isRunAnimation
      ? css`
          animation: ${appearanceRight} 1.4s
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          animation-fill-mode: forwards;
        `
      : css`
          animation: ${disappearanceRight} 700ms
            cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          animation-fill-mode: forwards;
        `}};
`;
