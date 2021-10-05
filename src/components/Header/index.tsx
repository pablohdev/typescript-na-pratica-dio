import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ListAlt from "@material-ui/icons/ListAlt";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ListAlt sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
          TODO LIST
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
