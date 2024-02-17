import React, { ReactNode } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div">
            Lar Ancestral
          </Typography>
        </Toolbar>
      </AppBar>

      {children}

      <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
        <Typography variant="body1" align="center" color="text.secondary">
          &copy; {new Date().getFullYear()} Lar Ancestral. Todos os direitos
          reservados.
        </Typography>
        {/* Adicionar mais informações de rodapé aqui se necessário */}
      </Box>
    </>
  );
};

export default MainLayout;
