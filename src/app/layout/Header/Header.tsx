import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Header/Header.style.css';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
});

export default function Header(props: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar className="layout-header-appbar" position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AppsIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ReplyIcon />
          </IconButton>
          <Tabs aria-label="basic tabs example">
            <Tab label="Просмотр" />
            <Tab label="Управление" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
