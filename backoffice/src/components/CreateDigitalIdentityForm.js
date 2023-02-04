import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";

export default function CreateDigitalIdentityForm() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={3}>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            Descarga tu identidad digital
          </Typography>
          <TextField fullWidth id="dni" label="DNI" />
          <DesktopDatePicker
            label="Fecha de nacimiento"
            inputFormat="dd/MM/yyyy"
            value={null}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField fullWidth id="metamask" label="Dirección (Metamask)" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Descargar</Button>
      </CardActions>
    </Card>
  );
}
