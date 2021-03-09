import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { FC } from "react";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "223C53",
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
    fontFamily: "Lato",
    h1: {
      fontWeight: 700,
    },
  },
});

const Layout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
