import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "gatsby";
import React, { FC } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// All measurements in rems
const LOGO_HEIGHT = 72 / 16;
const HEADER_VERTICAL_PADDING = 1.6;
const HEADER_HEIGHT = LOGO_HEIGHT + HEADER_VERTICAL_PADDING * 2;

const FOOTER_HEIGHT = 0;

const LAYOUT_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT;

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.background.paper,
    minHeight: `calc(100vh - ${LAYOUT_HEIGHT}rem)`,
  },
  title: {
    fontSize: "1.75rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  },
}));

const NotFoundPage: FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Página no encontrada" />
      <Box className={classes.background}>
        <Container>
          <Box marginBottom="2rem">
            <Typography
              gutterBottom
              className={classes.title}
              variant="h1"
              color="textPrimary"
            >
              Error 404
            </Typography>
            <Typography gutterBottom>
              La página que buscas no se encuentra disponible
            </Typography>
          </Box>
          <Button
            disableElevation
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
          >
            Regresar a inicio
          </Button>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
