import React from "react";
import styled from "styled-components";
import axios from "axios";
// components
import ReactPageScroller from "react-page-scroller";
import Header from "components/Layout/Header";
import { Main, Banner, IFrame, Link } from "components/Layout/Content";
import Pagination from "components/Pagination";
import SocialMedia from "components/SocialMedia";
// style
import GlobalStyle from "./styles/globalStyle";

class App extends React.Component {
  state = {
    pageIndex: 0,
    currentBackgroundPosition: 0,
    isFirstScroll: false,
    officeId: "",
    blockScrollUp: false,
    blockScrollDown: false,
    code: ""
  };

  async componentDidMount() {
    const url = new URL(window.location.href);
    const officeId = url.searchParams.get("OfficeId");
    if (officeId) {
      // const { data } = await axios.get(
      //   `http://localhost:4040/addNewPartner/${officeId}`
      // );
      this.setState({
        officeId
        // code: data.code
      });
    }
  }

  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  pageOnChange = pageIndex => {
    this.setState({
      pageIndex: pageIndex - 1,
      currentBackgroundPosition:
        this.state.pageIndex > pageIndex - 1
          ? this.state.currentBackgroundPosition + 125
          : this.state.currentBackgroundPosition - 125,
      isFirstScroll: true
    });
  };
  render() {
    const {
      pageIndex,
      direction,
      isFirstScroll,
      currentBackgroundPosition,
      officeId,
      blockScrollUp,
      blockScrollDown,
      code
    } = this.state;

    return (
      <Wrapper
        direction={direction}
        isFirstScroll={isFirstScroll}
        currentBackgroundPosition={currentBackgroundPosition}
      >
        <Container>
          <GlobalStyle />
          <Header goToPage={this.goToPage} pageIndex={pageIndex} />
          <Pagination goToPage={this.goToPage} pageIndex={pageIndex} />
          <SocialMedia />
          <ReactPageScroller
            ref={c => (this.reactPageScroller = c)}
            containerHeight="92vh"
            animationTimer={1000}
            pageOnChange={this.pageOnChange}
            blockScrollUp={blockScrollUp}
            blockScrollDown={blockScrollDown}
          >
            <Main
              goToPage={this.goToPage}
              pageIndex={pageIndex}
              isFirstScroll={isFirstScroll}
              code={code}
            />
            <Link pageIndex={pageIndex} officeId={officeId} />
          </ReactPageScroller>
        </Container>
      </Wrapper>
    );
  }
}

// #region styled
const Container = styled.div`
  position: relative;
  z-index: 10;
`;
const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("MainBackground.svg") center
    ${p => p.theme.palette.brand.primaryColor};
  background-position-y: ${p => p.currentBackgroundPosition}vh;
  transition: 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
// #endregion

export default App;
