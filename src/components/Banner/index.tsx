import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import backgroundImage from "../../assets/images/bannerAncestral.png";

const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const appBarHeight = theme.mixins.toolbar.minHeight ?? 64;
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "secondary.main",
        color: "white",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100% ",
        minHeight: `calc(110vh - ${appBarHeight}px)`,
        minWidth: "100vw",
        marginTop: `-${appBarHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h3"}
        component="h1"
        color="text.primary"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Desperte a força do seu Lar Ancestral
      </Typography>
      <Button variant="outlined" size="large" sx={{ px: 10 }}>
        Conheça nossos produtos
      </Button>
    </Box>
  );
};

export default Banner;
