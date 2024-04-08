import React from "react";
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import fotoViviane from "../../assets/images/vivi_.png"; // Substitua pelo caminho da foto de Viviane
import fotoMarcia from "../../assets/images/marcia.jpg"; // Substitua pelo caminho da foto de Marcia

const Idealizadoras: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ padding: 6, minHeight: "56vh" }}>
      <Grid container spacing={12} justifyContent="center">
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
          <Avatar src={fotoViviane} sx={{ width: 164, height: 164, mb: 2 }} />
          <Typography variant="h5">Viviane Cabral</Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Viviane Cabral, é uma brasileira de 41 anos pós graduada em Yoga.
            Mãe de três filhos, tem uma vida dedicada a espiritualidade e
            autodesenvolvimento, se especializou em medicinas de autocuidado do
            feminino e atualmente é facilitadora de rituais de vaporização e de
            sessões terapêuticas de yoga.
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
          <Avatar src={fotoMarcia} sx={{ width: 164, height: 164, mb: 2 }} />
          <Typography variant="h5">Marcia Ferrari</Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Márcia Ferrari, é uma brasileira de 37 anos formada em
            administração. Sua jornada de vida é marcada por uma busca constante
            pelo equilíbrio entre a vida urbana e a conexão profunda com a
            natureza. Sua paixão pela flora a levou a se aprofundar a
            fitoterapia e medicinas ancestrais de auto cuidado.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Idealizadoras;
