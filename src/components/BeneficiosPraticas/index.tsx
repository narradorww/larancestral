import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

const BeneficiosPraticas: React.FC = () => {
  const theme = useTheme();
  // Exemplo de benefícios e práticas recomendadas
  const beneficios = [
    "Promove o relaxamento e o bem-estar através de ervas naturais e aromas calmantes.",
    "Auxilia na purificação energética do ambiente, criando um espaço mais harmonioso.",
    "Estimula a conexão com as fases da lua, fortalecendo a intuição e o autoconhecimento.",
  ];

  const praticasRecomendadas = [
    "Utilize os banhos de ervas durante as transições das fases lunares para alinhar suas energias.",
    "Crie um ritual pessoal, definindo intenções positivas enquanto prepara e utiliza o banho de ervas.",
    "Mantenha um espaço sagrado e acolhedor, livre de distrações, para maximizar os benefícios dos banhos.",
  ];

  return (
    <Box sx={{ padding: 4, bgcolor: theme.palette.text.secondary }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Benefícios e Práticas Recomendadas
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
              Benefícios
            </Typography>
            {beneficios.map((beneficio, index) => (
              <Typography variant="body1" key={index} sx={{ mb: 1 }}>
                - {beneficio}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
              Práticas Recomendadas
            </Typography>
            {praticasRecomendadas.map((pratica, index) => (
              <Typography variant="body1" key={index} sx={{ mb: 1 }}>
                - {pratica}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeneficiosPraticas;
