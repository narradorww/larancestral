import { createTheme } from "@mui/material/styles";

// Cores da paleta fornecida
const colors = {
  paleWhite: "#FAFAFF",
  oliveGreen: "#7D7A4D",
  mossGreen: "#3E4A1B",
  cream: "#EBDAA8",
  darkBeige: "#B2935B",
  darkGreen: "#313B13",
  offWhite: "#E6E4BE",
  darkRed: "#AF1212",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.mossGreen, // Considerado como a cor primária
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
