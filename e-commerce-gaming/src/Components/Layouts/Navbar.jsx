import React, { Component } from 'react';
import NavbarButtons from './NavbarElements/NavbarButtons';
import SearchBar from './NavbarElements/SearchBar';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.title}>
              Games E-Commerce
            </Typography>
            <SearchBar />
            <NavbarButtons />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
