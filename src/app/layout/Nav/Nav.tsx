import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Nav/Nav.style.css';
interface Props {}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
});

export default function Nav(props: Props) {
  const drawer = (
    <div>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Stack spacing={0}>
            <Typography className="name">Название проекта</Typography>
            <Typography className="abbr">Аббревиатура</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <List>
        {[
          'По проекту',
          'Объекты',
          'РД',
          'МТО',
          'СМР',
          'График',
          'МиМ',
          'Рабочие',
          'Капвложения',
          'Бюджет',
          'Финансирование',
          'Панорамы',
          'Камеры',
          'Поручения',
          'Контрагенты'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon></DashboardIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="layout-nav-box" component="nav" aria-label="mailbox folders">
        <Drawer variant="permanent">{drawer}</Drawer>
      </Box>
    </ThemeProvider>
  );
}
