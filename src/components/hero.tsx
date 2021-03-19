import {
  Button,
  Grid,
  Typography,
  makeStyles,
  Container,
  Slider,
  withStyles,
} from "@material-ui/core";
import React, { ChangeEvent, FC, useState } from "react";

import tinaco from "../assets/images/tinaco_vitale.png";

const useStyles = makeStyles(theme => ({
  buttonMd: {
    fontSize: "1.125rem",
    margin: "1.2rem 0",
    maxWidth: "236px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonMobile: {
    margin: "1.2rem",
    maxWidth: "193px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  captionMd: {
    fontSize: "0.875rem",
    fontWeight: 500,
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  captionMobile: {
    maxWidth: "262px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  colorContainer: {
    backgroundColor: theme.palette.background.paper,
  },
  containerStyle: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "left",
      textAlign: "left",
    },
  },
  discoverMd: {
    fontSize: "1.5rem",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  discoverMobile: {
    fontWeight: 700,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  imageStyle: {
    width: "100%",
    [theme.breakpoints.only("sm")]: {
      width: "70%",
    },
  },
  numberSavingsMd: {
    fontSize: "2rem",
    paddingBottom: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  numberSavingsMobile: {
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  question: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sliderMd: {
    maxWidth: "500px",
    padding: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sliderMobile: {
    padding: "1.8rem 0",
    width: "80%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  subtitleStyle: {
    margin: "0 auto",
    maxWidth: "280px",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      margin: 0,
      maxWidth: "600px",
      textAlign: "left",
    },
  },
  textSavingsMd: {
    fontSize: "2rem",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  textSavingsMobile: {
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    fontSize: "1.875rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.125rem",
      paddingBottom: "1rem",
      textAlign: "left",
    },
  },
}));

const SavingSlider = withStyles({
  rail: {
    borderRadius: 4,
    height: 8,
  },
  root: {
    color: "#223C53",
    height: 8,
  },
  thumb: {
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    backgroundColor: "#00AFF2",
    boxShadow: "0px 5.73913px 5.73913px rgba(0, 175, 242, 0.15) !important",
    height: 24,
    marginLeft: -12,
    marginTop: -8,
    width: 24,
  },
  track: {
    borderRadius: 4,
    height: 8,
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
})(Slider);

const Hero: FC = () => {
  const classes = useStyles();
  const [product, setProduct] = useState(30);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSlider = (e: ChangeEvent<{}>, value: number | number[]) => {
    setProduct(value as number);
  };

  const calculateSavings = (product: number) => {
    const saving = product * 200;
    const total = saving.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return total;
  };

  return (
    <div className={classes.colorContainer}>
      <Container component="section">
        <Grid
          container
          justify="center"
          spacing={3}
          className={classes.containerStyle}
        >
          <Grid item xs={12} md={7} container direction="column">
            <Typography variant="h5" component="h1" className={classes.title}>
              Agua a tu alcance
            </Typography>
            <Typography className={classes.subtitleStyle}>
              Soluciones de almacenamiento de agua, al mejor precio.
            </Typography>
            <Typography className={classes.discoverMd}>
              Descubre cuánto podrías ahorrar eligiendo Vitale.
            </Typography>
            <SavingSlider
              className={classes.sliderMd}
              value={product}
              onChange={handleSlider}
              max={1000}
              min={30}
            />
            <Typography variant="h5" className={classes.numberSavingsMd}>
              {product}{" "}
              <Typography
                variant="h5"
                color="textSecondary"
                component="span"
                className={classes.textSavingsMd}
              >
                tinacos ={" "}
              </Typography>
              ${calculateSavings(product)}{" "}
              <Typography
                variant="h5"
                color="textSecondary"
                component="span"
                className={classes.textSavingsMd}
              >
                ahorro*
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.captionMd}
            >
              *aproximadamente en comparación al tinaco promedio de 1,100 lts en
              el mercado mexicano
            </Typography>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              size="large"
              className={classes.buttonMd}
            >
              Cotizar ahora
            </Button>
          </Grid>

          <Grid item xs={12} md={5}>
            <img
              src={tinaco}
              alt="tinaco vitale"
              className={classes.imageStyle}
            />
          </Grid>

          <Grid item xs={12} container direction="column" alignItems="center">
            <Typography color="textPrimary" className={classes.discoverMobile}>
              Descubre cuánto podrías ahorrar con Vitale.
            </Typography>

            <Typography className={classes.question}>
              Solo cuéntanos, ¿cuántos tinacos necesitas?
            </Typography>
            <SavingSlider
              className={classes.sliderMobile}
              value={product}
              onChange={handleSlider}
              min={30}
              max={1000}
            />

            <Typography variant="h5" className={classes.numberSavingsMobile}>
              {product}{" "}
              <Typography
                variant="h5"
                color="textSecondary"
                component="span"
                className={classes.textSavingsMobile}
              >
                tinacos ={" "}
              </Typography>
              ${calculateSavings(product)}{" "}
              <Typography
                variant="h5"
                color="textSecondary"
                component="span"
                className={classes.textSavingsMobile}
              >
                ahorro*
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.captionMobile}
            >
              *aproximadamente en comparación al tinaco promedio de 1,100 lts en
              el mercado mexicano
            </Typography>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              size="large"
              className={classes.buttonMobile}
            >
              Cotizar ahora
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
