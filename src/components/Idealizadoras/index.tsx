import React from "react";
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import fotoViviane from "../../assets/images/vivi_.png"; // Substitua pelo caminho da foto de Viviane
import fotoMarcia from "../../assets/images/marcia.jpg"; // Substitua pelo caminho da foto de Marcia

const Idealizadoras: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ padding: 4, minHeight: "76vh" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={fotoViviane} sx={{ width: 128, height: 128, mb: 2 }} />
          <Typography variant="h6">Viviane Cabral</Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Breve bio de Viviane aqui. ipsim dolor sit amet, consectetur
            adipiscing elit. Suspendisse
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={fotoMarcia} sx={{ width: 128, height: 128, mb: 2 }} />
          <Typography variant="h6">Marcia Ferrari</Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Breve bio de Márcia aqui. ipsim dolor sit amet, consectetur
            adipiscing elit. Suspendisse
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Idealizadoras;
