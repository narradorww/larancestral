import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const ComoAdquirir: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode integrar com uma API para enviar os dados ou processá-los conforme necessário
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Como Adquirir
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Para adquirir nossos produtos, preencha o formulário abaixo e
          entraremos em contato com informações sobre o processo de compra.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="nome"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={formData.nome}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Mensagem"
            name="mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={formData.mensagem}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ mt: 1 }}>
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ComoAdquirir;
