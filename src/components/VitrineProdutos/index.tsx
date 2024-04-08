import React, { useState } from "react";
import Slider from "react-slick";
import { Paper, Typography, Box, useTheme, Modal } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import luaCheia from "../../assets/images/LuaCheia.jpeg";
import luaMinguante from "../../assets/images/LuaMinguante.jpeg";
import luaNova from "../../assets/images/LuaNova.jpeg";
import luaCrescente from "../../assets/images/LuaCrescente.jpeg";
import backgroundImage from "../../assets/images/vitrineBackground.png";

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  phase?: string;
}

const products: Product[] = [
  {
    name: "Lua Cheia - Banho de Ervas",
    description:
      "O banho de ervas quatro luas celebra a harmonia entre você e a energia lunar, proporcionando uma experiência única de bem-estar. Ingredientes: Sal Rosa, Sal Amargo, Hortelã, Limão Siciliano, Café, Eucalipto. Peso: 160g.",
    imageUrl: luaCheia, // Substitua pelo caminho correto da imagem
    phase: "Lua Cheia",
  },
  {
    name: "Lua Minguante - Banho de Ervas",
    description:
      "O banho de ervas quatro luas celebra a harmonia entre você e a energia lunar, proporcionando uma experiência única de bem-estar. Favorece a introspecção e a cura. Ingredientes: Sal Rosa, Sal Amargo, Arruda, Sálvia, Manjericão, Gengibre. Peso: 160g.",
    imageUrl: luaMinguante, // Substitua pelo caminho correto da imagem
    phase: "Lua Minguante",
  },
  {
    name: "Lua Nova - Banho de Ervas",
    description:
      "O banho de ervas quatro luas celebra a harmonia entre você e a energia lunar, proporcionando uma experiência única de bem-estar. Ideal para recomeços e novas intenções. Ingredientes: Sal Rosa, Sal Amargo, Cedro, Camomila, Lavanda. Peso: 160g.",
    imageUrl: luaNova, // Substitua pelo caminho correto da imagem
    phase: "Lua Nova",
  },
  {
    name: "Lua Crescente - Banho de Ervas",
    description:
      "O banho de ervas quatro luas celebra a harmonia entre você e a energia lunar, proporcionando uma experiência única de bem-estar. Aumenta a energia vital e a motivação. Ingredientes: Sal Rosa, Sal Amargo, Canela, Laranjeira, Menta. Peso: 160g.",
    imageUrl: luaCrescente, // Substitua pelo caminho correto da imagem
    phase: "Lua Crescente",
  },
];

const VitrineProdutos: React.FC = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          padding: 4,
          minHeight: `100vh`,
          bgcolor: theme.palette.error.main,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, marginTop: 8, color: theme.palette.secondary.main }}
        >
          Nossas Experiências
        </Typography>
        <Box style={{ overflow: "visible" }}>
          <Slider {...settings}>
            {products.map((product, index) => (
              <Box
                key={index}
                sx={{
                  margin: "40px",
                  maxWidth: 320,
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleOpenModal(product)}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: 620,
                    width: 420,
                    padding: 4,
                    bgcolor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 1,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: theme.shadows[20],
                    },
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      width: "auto",
                      height: 320,
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <Typography sx={{ mt: 2, textAlign: "center" }} variant="h6">
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{ mt: 1, textAlign: "flex-start" }}
                    variant="body1"
                  >
                    {product.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        <Box sx={modalStyle}>
          {" "}
          {/* modalStyle é um objeto de estilo que você definirá */}
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                style={{
                  width: "auto",
                  height: 100,
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Typography id="product-modal-title" variant="h6" component="h2">
                {selectedProduct.name}
              </Typography>
              <Typography id="product-modal-description" sx={{ mt: 2 }}>
                {selectedProduct.description}
              </Typography>
              {/* Coloque aqui mais detalhes do produto se necessário */}
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default VitrineProdutos;

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
