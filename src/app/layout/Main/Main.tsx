import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Table from '../../table/Table';
import '../Main/Main.style.css';
interface Props {}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
});

export default function Main(props: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="layout-main-box" component="main">
        <div>
          <Stack direction="row" spacing={2}>
            <Typography>Строительно-монтажные работы</Typography>
          </Stack>
          <Table></Table>
        </div>
      </Box>
    </ThemeProvider>
  );
}
