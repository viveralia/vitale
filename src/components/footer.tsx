import {
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { FC } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  copyRightGrid: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "1rem",
    },
  },
  copyRightPuriplasText: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  copyRightText: {
    color: theme.palette.background.paper,
    fontSize: "0.875rem",
    fontWeight: 700,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  developed: {
    fontSize: "0.875rem",
    fontWeight: 700,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
    },
  },
  icon: {
    color: theme.palette.background.paper,
    fontSize: "1.5rem",
    marginRight: "1rem",
  },
  linkItem: {
    [theme.breakpoints.up("md")]: {
      flexBasis: "auto",
      marginLeft: "2rem",
    },
  },
  linksContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  section: {
    backgroundColor: theme.palette.text.primary,
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
}));

const Footer: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdOrAbove = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <section className={classes.section}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={classes.icon} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={classes.icon} />
            </Link>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            spacing={isMdOrAbove ? 0 : 2}
            className={classes.linksContainer}
          >
            <Grid item xs={6} className={classes.linkItem}>
              <Link
                underline="none"
                href="https://puriplas.com/"
                color="textSecondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Puriplas
              </Link>
            </Grid>
            <Grid item xs={6} className={classes.linkItem}>
              <Link
                underline="none"
                href="https://puriplas.com/#contacto"
                color="textSecondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </Link>
            </Grid>
            <Grid item xs={6} className={classes.linkItem}>
              <Link
                underline="none"
                href="https://puriplas.com/privacidad"
                color="textSecondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          className={classes.copyRightGrid}
        >
          <Grid item xs={12} md={6}>
            <Typography className={classes.copyRightText}>
              Vitale. Un producto de {""}
              <Link
                underline="none"
                href="https://puriplas.com/"
                className={classes.copyRightPuriplasText}
                target="_blank"
                rel="noopener noreferrer"
              >
                puriplas
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.developed}>
              Desarrollado por {""}
              <Link
                href="https://espacioenblan.co/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                color="textSecondary"
              >
                espacioenblan.co
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
