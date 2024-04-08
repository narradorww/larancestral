import { createTheme } from "@mui/material/styles";

// Cores da paleta fornecida
const colors = {
  paleWhite: "#FAFAFF",
  oliveGreen: "#878654",
  darkGreen: "#38431D",
  cream: "#FEFADB",
  darkRed: "#B2231A",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.darkGreen, // Considerado como a cor primária
    },
    secondary: {
      main: colors.cream, // Considerado como a cor secundária
    },
    error: {
      main: colors.darkRed, // Cor para estados de erro
    },
    background: {
      default: colors.paleWhite, // Cor de fundo da aplicação
    },
    text: {
      primary: colors.darkGreen, // Cor principal do texto
      secondary: colors.oliveGreen, // Cor secundária do texto
    },
  },
  typography: {
    fontFamily: '"Afterglow", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.2rem",
    },
    h2: {
      fontSize: "1.8rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 810,
      md: 1200,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;
