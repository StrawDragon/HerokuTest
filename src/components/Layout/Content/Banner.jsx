import React from "react";
import styled, { css } from "styled-components";
// images
import { ReactComponent as CenterSizes } from "static/CenterSizes.svg";
import { ReactComponent as HeaderSizes } from "static/HeaderSizes.svg";
import { ReactComponent as SideSizes } from "static/SideSizes.svg";
import { ReactComponent as CenterBanner } from "static/CenterBanner.svg";
import { ReactComponent as HeaderBanner } from "static/HeaderBanner.svg";
import { ReactComponent as SideBanner } from "static/SideBanner.svg";
// styled
import {
  Title,
  Description,
  Button,
  Wrapper,
  Information,
  appearanceLeft,
  disappearanceLeft,
  appearanceRight,
  disappearanceRight
} from "../../Styled";
// constants
import { PAGES } from "constants/pages";
import { SELF_URL } from "constants/urls";
import CopyToClipboard from "react-copy-to-clipboard";
import Notification from "../../Notifications";

const getBannerImage = value => {
  const { href } = window.location;
  const urlString = new URL(href);
  switch (value) {
    case "one":
      return `${urlString.origin}/banners/HeaderBanner.svg`;
    case "two":
      return `${urlString.origin}/banners/SideBanner.svg`;
    case "three":
      return `${urlString.origin}/banners/CenterBanner.svg`;
    default:
      return null;
  }
};

export default ({ officeId, pageIndex }) => {
  const [state, setState] = React.useState({
    value: "one",
    open: false
  });

  const { value, open } = state;

  const handleChange = value => () => {
    setState({ ...state, value });
  };

  const handleClick = e => {
    e.preventDefault();
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  if (open && pageIndex !== PAGES.banner) {
    setState({ ...state, open: false });
  }
  return (
    <BannerPage>
      <Banner id="banner">
        <Wrapper>
          <LeftBlock isRunAnimation={pageIndex === PAGES.banner}>
            <Information>
              <Title>Баннер</Title>
              <Description>
                Для того чтобы использовать баннер Астрал Отчета нажмите на
                кнопку <b>“Получить баннер”</b>, выберите наиболее подходящий
                вариант оформления и следуйте дальнейшим инструкциям.
              </Description>
              <RadioButtonContainer>
                <RadioButtonItem>
                  <input type="radio" name="name" id="one" value="one" />
                  <label htmlFor="one" onClick={handleChange("one")}>
                    728x90
                  </label>
                  <BorderPoint selected={value === "one"}>
                    <Point
                      onClick={handleChange("one")}
                      selected={value === "one"}
                    />
                  </BorderPoint>
                </RadioButtonItem>

                <RadioButtonItem>
                  <input type="radio" name="name" id="two" value="two" />
                  <label htmlFor="two" onClick={handleChange("two")}>
                    160x600
                  </label>
                  <BorderPoint selected={value === "two"}>
                    <Point
                      onClick={handleChange("two")}
                      selected={value === "two"}
                    />
                  </BorderPoint>
                </RadioButtonItem>
                <RadioButtonItem>
                  <input type="radio" name="name" id="three" value="three" />
                  <label htmlFor="three" onClick={handleChange("three")}>
                    336x280
                  </label>
                  <BorderPoint selected={value === "three"}>
                    <Point
                      onClick={handleChange("three")}
                      selected={value === "three"}
                    />
                  </BorderPoint>
                </RadioButtonItem>
              </RadioButtonContainer>
              <CopyToClipboard
                text={`<div><a href="${SELF_URL}?officeId=${officeId}">
                    <img src=${getBannerImage(value)} alt="" /></a></div>`}
              >
                <Button onClick={handleClick}>Получить баннер</Button>
              </CopyToClipboard>
            </Information>
          </LeftBlock>
          <RightBlock isRunAnimation={pageIndex === PAGES.banner}>
            <IllustrationBannerWrapper>
              <BannerBlock
                direction="column"
                selected={value === "one"}
                onClick={handleChange("one")}
              >
                <CustomHeaderSizes show={value === "one"} />
                <HeaderBanner />
              </BannerBlock>
              <Row>
                <BannerBlock
                  direction="column"
                  selected={value === "three"}
                  onClick={handleChange("three")}
                >
                  <CustomCenterBanner />
                  <CustomCenterSizes show={value === "three"} />
                </BannerBlock>
                <BannerBlock
                  selected={value === "two"}
                  onClick={handleChange("two")}
                >
                  <SideBanner />
                  <CustomSideSizes show={value === "two"} />
                </BannerBlock>
              </Row>
            </IllustrationBannerWrapper>
          </RightBlock>
        </Wrapper>
      </Banner>
      <Notification
        open={open}
        onClose={handleClose}
        message="Код для баннера успешно скопирован в буфер"
      />
    </BannerPage>
  );
};

const BannerPage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BorderPoint = styled.div`
  margin: 0 15px;
  border-radius: 50%;
  border: 1px solid
    ${p =>
      p.selected
        ? ` ${p.theme.palette.components.pagination.selectedBorderColor}}
`
        : `${p.theme.palette.brand.primaryColor}`};
  cursor: pointer;
`;
const Point = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin: 3px;
  background-color: ${p => p.theme.palette.brand.secondaryColor};
  opacity: ${p => (p.selected ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  transition: all 350ms ease-in-out 0s;
`;

const RadioButtonItem = styled.li`
  position: relative;
  padding: 20px 0;
  display: flex;
  align-items: center;
  input[type="radio"] {
    position: absolute;
    visibility: hidden;
  }
  label {
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: white;
  }
`;
const RadioButtonContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
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
const Banner = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 80vw;
  margin: auto;
  padding-right: 17px;
  padding-left: 17px;
  position: relative;
`;
const IllustrationBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CustomCenterBanner = styled(CenterBanner)`
  margin-right: 20px;
`;

const sizesRule = css`
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: 0.5s;
`;

const CustomHeaderSizes = styled(HeaderSizes)`
  margin-bottom: -10px;
  ${sizesRule};
`;

const CustomCenterSizes = styled(CenterSizes)`
  margin-top: -10px;
  ${sizesRule};
`;

const CustomSideSizes = styled(SideSizes)`
  margin-left: -10px;
  ${sizesRule};
`;

const BannerBlock = styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  transform: ${({ selected }) => selected && "scale(1.05)"};
  cursor: pointer;
  filter: ${({ selected }) => !selected && `brightness(70%)`};
  transition: all 0.5s;
  :hover {
    filter: brightness(100%);
  }
`;
