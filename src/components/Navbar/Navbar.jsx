import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/core/Menu";

const NavBar =(props) =>{


    return(
        <nav>
            <AppBar position="justify" color="primary">
              <Toolbar>
                  <IconButton color="inherit" aria-label="menu">
                      <MenuIcon/>
                  </IconButton>
                <Typography variant="h6">
                  BROCOLI 3D
                </Typography>
                <Button variant="text" color="default">
                Productos
                </Button>
                <Button variant="text" color="default">
                Nosotros
                </Button>
                <Button variant="text" color="default">
                Seguinos
                </Button>
                <Button variant="text" color="default">
                Contactos
                </Button>
              </Toolbar>
            </AppBar>

            <button onClick={props.darBienvenida}>SALUDAME</button>
            
        </nav>
    );
};

export default NavBar;