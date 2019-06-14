import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import baseTheme from "./styles/theme";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createGenerateClassName, jssPreset } from "@material-ui/styles";
import themeMui from "styles/themeMui";
import App from "./App";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = "jss-insertion-point";

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={themeMui}>
      <ThemeProvider theme={baseTheme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById("root")
);
