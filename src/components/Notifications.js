import React from "react";
import styled from "styled-components";
import { Snackbar, Slide } from "@material-ui/core";
import CloseButton from "components/CloseButton";
import {
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon
} from "@material-ui/icons";

export default class SnackBar extends React.Component {
  TransitionLeft = props => {
    return <Slide {...props} direction="left" />;
  };

  renderContent = ({ message, onClose }) => {
    return (
      <NotificationWrapper>
        <NotificationContent>
          <HeaderContainer>
            <CheckCircleIcon />
            <HeaderText>Код скопирован</HeaderText>
          </HeaderContainer>

          <Text>{message}</Text>
          <CloseButtonWrapper
            key="close"
            className="closeNotification"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon />
          </CloseButtonWrapper>
        </NotificationContent>
      </NotificationWrapper>
    );
  };

  render() {
    const { open, message, onClose } = this.props;
    return (
      <Notification
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={onClose}
        TransitionComponent={this.TransitionLeft}
        message={this.renderContent({ message, onClose })}
        autoHideDuration={2000}
      />
    );
  }
}

const Text = styled.span`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;
const HeaderText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  svg {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
const NotificationContent = styled.div`
  display: block;
`;

const Notification = styled(Snackbar)`
  position: absolute !important;
  display: block;
  transition: all 0.3s;
  transform: none !important;
  > div:first-child {
    min-height: 60px;
    max-width: unset;
    background-color: #0074c6;
    color: white;
    border-radius: 8px;
    padding: 20px;
    flex: 1;

    > div:first-child {
      padding: 0;
      flex: 1;

      > div:first-child {
        flex: 1;
      }
    }
  }

  &.without-padding > div:first-child {
    padding: 0px;
  }

  div[class*="NotificationContent"] {
    flex: 1;
  }
`;

const CloseButtonWrapper = styled(CloseButton)`
  width: 32px;
  height: 32px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;

  > div:not(:first-child) {
    flex: 1;
  }
`;
