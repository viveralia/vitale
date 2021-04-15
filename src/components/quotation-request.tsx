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
import { Alert, Color } from "@material-ui/lab";
import React, { FC, useState } from "react";

import { initialQuotation, Quotation } from "../pages/index";
import { sendEmail } from "../services/emailService";
export interface QuotationRequestProps {
  open: boolean;
  quotation: Quotation;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuotation: React.Dispatch<React.SetStateAction<Quotation>>;
}

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1rem",
  },
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
  quotation,
  setQuotation,
}) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined = e => {
    setQuotation({
      ...quotation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      setLoading(true);
      await sendEmail(quotation);
      setLoading(false);
      setQuotation(initialQuotation);
      setAlert("success");
    } catch (error) {
      setAlert("error");
    }
  };

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Cotización</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Déjanos tus datos y nosotros te responderemos a la brevedad.
          </DialogContentText>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                inputProps={{ maxLength: "50", minLength: "2" }}
                fullWidth
                id="name"
                label="Nombre"
                type="text"
                variant="outlined"
                name="name"
                value={quotation.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                inputProps={{ maxLength: "50", minLength: "2" }}
                fullWidth
                id="email"
                label="Correo"
                type="email"
                variant="outlined"
                name="email"
                value={quotation.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                inputProps={{ maxLength: "10", minLength: "2" }}
                fullWidth
                id="phone"
                label="Teléfono"
                type="tel"
                variant="outlined"
                name="phone"
                value={quotation.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                inputProps={{ maxLength: "100", minLength: "2" }}
                fullWidth
                id="delivery"
                label="Lugar de entrega"
                type="text"
                variant="outlined"
                name="delivery"
                value={quotation.delivery}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                required
                inputProps={{ max: "1000", min: "35" }}
                fullWidth
                id="quantity"
                label="Cantidad"
                type="number"
                variant="outlined"
                name="quantity"
                value={quotation.quantity}
                onChange={handleChange}
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
                  label="capacidad"
                  value={quotation.capacity}
                  name="capacity"
                >
                  <MenuItem value="1,100 lts">1,100 lts</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {alert && (
            <Alert severity={alert as Color} className={classes.alert}>
              {alert === "error"
                ? "Ocurrio un error intenta de nuevo"
                : "Tu mensaje ha sido enviado"}
            </Alert>
          )}
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button disableElevation onClick={handleClose} type="button">
            Cancelar
          </Button>
          <Button
            disabled={loading ? true : false}
            disableElevation
            color="primary"
            variant="contained"
            size="large"
            type="submit"
          >
            {loading ? "Enviando" : "Enviar"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default QuotationRequest;
