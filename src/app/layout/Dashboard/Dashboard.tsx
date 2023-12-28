import Box from '@mui/material/Box';
import '../Dashboard/Dashboard.style.css';
import { Header } from '../Header';
import { Main } from '../Main';
import { Nav } from '../Nav';
export default function Dashboard(props: Props) {
  return (
    <Box className="layout-dashboard-box">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </Box>
  );
}
