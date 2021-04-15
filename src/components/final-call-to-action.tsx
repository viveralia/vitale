import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

export interface FinalCallToActionProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    margin: "0 auto",
  },
  section: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
  text: {
    marginBottom: "1.2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  },
  title: {
    margin: "0.2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
}));

const FinalCallToAction: FC<FinalCallToActionProps> = ({ setOpen }) => {
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.section}>
      <Container>
        <Typography variant="h2" className={classes.title}>
          Agua a tu alcance
        </Typography>
        <Typography className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
          quisque faucibus viverra habitasse et.
        </Typography>
        <Button
          disableElevation
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
          onClick={handleOpen}
        >
          Cotizar ahora
        </Button>
      </Container>
    </div>
  );
};

export default FinalCallToAction;
