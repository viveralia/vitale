import {
  Button,
  DialogContent,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

export interface QuotationRequestProps {
  amount: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(() => ({
  dialogActions: {
    paddingBottom: "1rem",
    paddingRight: "2.4rem",
    paddingTop: "2rem",
  },
  dialogTitle: {
    fontSize: "10rem",
  },
}));

const QuotationRequest: FC<QuotationRequestProps> = ({
  open,
  setOpen,
  amount,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const sendEmail = () => {
    // console.log(correo);
  };

  const { handleSubmit, register } = useForm();
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle className={classes.dialogTitle}>Cotización</DialogTitle>
      <form onSubmit={handleSubmit(sendEmail)}>
        <DialogContent>
          <DialogContentText>
            Déjanos tus datos y nosotros te responderemos a la brevedad.
          </DialogContentText>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="name"
                label="Nombre"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="email"
                label="Correo"
                type="email"
                variant="outlined"
                ref={register}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="phone"
                label="Teléfono"
                type="tel"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="delivery"
                label="Lugar de entrega"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                fullWidth
                id="cantidad"
                label="Cantidad"
                variant="outlined"
                defaultValue="tinacos"
                value={amount}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">tinacos</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Capacidad
                </InputLabel>
                <Select
                  disabled
                  labelId="demo-simple-select-helper-label"
                  value="1,100 lts"
                  id="demo-simple-select-helper"
                >
                  <MenuItem value="1,100 lts">1,100 lts</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button disableElevation onClick={handleClose} type="button">
            Cancelar
          </Button>
          <Button
            disableElevation
            color="primary"
            variant="contained"
            size="large"
            type="submit"
          >
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default QuotationRequest;
