import { createMuiTheme } from "@material-ui/core";

// переопределение темы Material-UI
const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#555"
    },
    primary: {
      main: "#0077C6",
      light: "#6ba6da",
      dark: "#378FC4"
    },
    secondary: {
      main: "#0077C6",
      light: "#6ba6da",
      dark: "#378FC4"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        lineHeight: "1.4em",
        padding: "8px 16px",
        minHeight: "36px"
      },
      text: {
        padding: "8px 16px"
      }
    },
    MuiInputBase: {
      root: {
        alignItems: "unset"
      }
    },
    MuiInputAdornment: {
      root: {
        height: "unset"
      }
    },
    MuiIconButton: {
      root: {
        width: "48px",
        height: "48px",
        padding: 0
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1280,
      lg: 1400,
      xl: 1700
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default muiTheme;
