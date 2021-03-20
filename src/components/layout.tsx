import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { FC } from "react";

import Header from "./header";

const textSecondary = "#909DA9";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "#FFFFFF",
        filter: "drop-shadow(0px 4px 6px rgba(0, 175, 242, 0.2))",
        /*  paddingLeft: "20rem",
        paddingRight: "20rem", */
      },
    },
  },
  palette: {
    background: {
      default: "rgba(34, 60, 83, 0.025)",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#00AFF2",
    },
    text: {
      primary: "#223C53",
      secondary: textSecondary,
    },
  },
  typography: {
    body1: {
      color: textSecondary,
      fontWeight: 500,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
    caption: {
      lineHeight: "1.3",
    },
    fontFamily: "Lato",
    h1: {
      fontSize: "1.9rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
