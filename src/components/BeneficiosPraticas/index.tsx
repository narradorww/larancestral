import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";

const BeneficiosPraticas: React.FC = () => {
  const theme = useTheme();

  // Exemplo de benefícios e práticas recomendadas combinados em um único array
  const beneficiosPraticas = [
    {
      titulo: "Qualidade Ancestral",
      texto:
        "Descubra o poder das ervas tradicionais e a qualidade suprema que revitaliza o corpo e a mente.",
    },
    {
      titulo: "Designs Harmoniosos",
      texto:
        "Produtos criados com intenção e beleza, inspirados na sabedoria ancestral para o seu bem-estar moderno.",
    },
    {
      titulo: "Maestria Artesanal",
      texto:
        "Cada produto é cuidadosamente elaborado por mãos artesãs, honrando as tradições e o conhecimento passado de geração em geração.",
    },
    {
      titulo: "Preços Acessíveis",
      texto:
        "Oferecemos produtos que enriquecem sua rotina sem pesar no orçamento, mantendo a excelência e a pureza dos ingredientes.",
    },
    {
      titulo: "Atendimento Dedicado",
      texto:
        "Estamos sempre disponíveis para orientá-la na escolha perfeita para sua jornada de autocuidado e conexão ancestral.",
    },
    {
      titulo: "Facilidade e Conveniência",
      texto:
        "Navegue facilmente pela nossa seleção de banhos e vaporizações e encontre o equilíbrio perfeito para sua prática diária.",
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.paper, py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Unbelievable Benefits Awaits
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {beneficiosPraticas.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                padding: theme.spacing(3),
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {item.titulo}
              </Typography>
              <Typography variant="body1">{item.texto}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BeneficiosPraticas;
