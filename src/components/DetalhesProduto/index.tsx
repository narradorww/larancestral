// DetalhesProduto.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import produtoData from "../../db/produtos";
import { Modal, Box, Typography, IconButton, Grid } from "@mui/material";

export interface Produto {
  slug: string;
  nome: string;
  descricao: string;
  instrucoes: string[];
  ritual: string[];
  notas_importantes: string[];
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  outline: "none",
};

const DetalhesProduto: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const produto = produtoData.produtos.find((p) => p.slug === slug);
  const handleClose = () => navigate("/");

  if (!produto) {
    return <Typography variant="h5">Produto não encontrado</Typography>;
  }

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backdropFilter: "blur(5px)" }} // Efeito fosco no fundo
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {produto.nome}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {produto.descricao}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h3">
              Instruções
            </Typography>
            <ul>
              {produto.instrucoes.map((instrucao, index) => (
                <li key={index}>{instrucao}</li>
              ))}
            </ul>
            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
              Ritual
            </Typography>
            <ul>
              {produto.ritual.map((ritual, index) => (
                <li key={index}>{ritual}</li>
              ))}
            </ul>
            <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
              Notas Importantes
            </Typography>
            <ul>
              {produto.notas_importantes.map((nota, index) => (
                <li key={index}>{nota}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: "100%", maxWidth: "400px", height: "auto" }} // Ajuste o estilo conforme necessário
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DetalhesProduto;
