import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { FC } from "react";

import Header from "./header";

const theme = createMuiTheme({
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
      secondary: "#909DA9",
    },
  },
  typography: {
    body1: {
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
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
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
