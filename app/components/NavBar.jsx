"use client";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { navItems, productos, routes } from "../constants/utils";

const drawerWidth = 240;
const logoCompleto = "/assets/logo/logoCompleto.png";

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickRoute = (route) => {
    console.log("click");
    router.replace(route);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9", // Cambia este color según tus preferencias
      },
    },
  });

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, width: 200, height: 100, margin: "auto" }}>
        <img
          src={logoCompleto}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={(event) => {
              {
                console.log(item);
              }
              if (
                item === "Inicio" ||
                item === "Nosotros" ||
                item === "Contacto"
              ) {
                console.log("entro");
                console.log(item);
                router.replace("/");
              }
              if (item === "Productos") {
                handleMenuOpen(event);
              } else {
                handleDrawerToggle(); // Cierra el menú principal solo si no es "Productos"
              }
            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex", height: isMobile && "50px" }}>
        <CssBaseline />
        <AppBar component="nav" position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={logoCompleto}
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => {
                if (
                  item === "Inicio" ||
                  item === "Nosotros" ||
                  item === "Contacto"
                ) {
                  console.log("entro");
                  console.log(item);
                  router.replace("/");
                }
                if (item === "Productos") {
                  return (
                    <React.Fragment key={item}>
                      <Button
                        key={item}
                        aria-controls="productos-menu"
                        aria-haspopup="true"
                        sx={{ color: "#fff" }}
                        onClick={handleMenuOpen}
                      >
                        {item}
                      </Button>
                      <Menu
                        id="productos-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom", // Establece el origen del ancla en la parte inferior
                          horizontal: "center", // Centra horizontalmente
                        }}
                        transformOrigin={{
                          vertical: "top", // Establece el origen del menú en la parte superior
                          horizontal: "center", // Centra horizontalmente
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        {productos.map((producto, index) => (
                          <MenuItem
                            key={index}
                            onClick={() =>
                              handleClickRoute(`/${routes[index]}`)
                            }
                          >
                            {console.log(producto)}
                            {producto}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  );
                }
                return (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
