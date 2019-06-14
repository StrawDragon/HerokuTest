import React from "react";
import styled, { css } from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
// styled
import {
  Button,
  Description,
  Information,
  Title,
  Wrapper,
  appearanceLeft,
  disappearanceLeft,
  appearanceRight,
  disappearanceRight
} from "../../Styled";
// images
import { ReactComponent as GoodDay } from "static/LOGO_XD.svg";
// constants
import { PAGES } from "constants/pages";
import { AO_URL } from "constants/urls";
import Notification from "../../Notifications";

export default ({ pageIndex, officeId }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = e => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (open && pageIndex !== PAGES.link) {
    setOpen(false);
  }

  return (
    <>
      <LinkPage>
        <Link id="link">
          <Wrapper>
            <LeftBlock isRunAnimation={pageIndex === PAGES.link}>
              <Information>
                <Title>Ссылка</Title>
                <Description>
                  Для использования ссылки нажмите на кнопку{" "}
                  <b>“Получить ссылку”</b> и скопируйте ссылку.
                </Description>
                <CopyToClipboard
                  text={`<a href="#"> <a/>`}
                >
                  <Button onClick={handleClick}>Получить ссылку</Button>
                </CopyToClipboard>
              </Information>
            </LeftBlock>
            <RightBlock isRunAnimation={pageIndex === PAGES.link}>
              <IllustrationLinkWrapper>
                <GoodDay />
              </IllustrationLinkWrapper>
            </RightBlock>
          </Wrapper>
        </Link>
        <Notification
          open={open}
          onClose={handleClose}
          message="Код для ссылки успешно скопирован в буфер"
        />
      </LinkPage>
      <Footer>
        <Divider />
        <Copyright>{`Сделано с любовью в ${new Date().getFullYear()} ©`}</Copyright>
      </Footer>
    </>
  );
};

// #region styled
const LinkPage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Link = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 80vw;
  margin: auto;
  padding-right: 17px;
  padding-left: 17px;
`;
const Footer = styled.div`
  position: relative;
  bottom: 5rem;
`;
const Divider = styled.hr`
  width: 50%;
  color: ${p => p.theme.palette.brand.secondaryColor};
`;
const Copyright = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: ${p => p.theme.options.sizes.fontSize.cardContentFontSize};
  color: ${p => p.theme.palette.brand.secondaryColor};
`;
const IllustrationLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 100%;
  height: 100%;
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
