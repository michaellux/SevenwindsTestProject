import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '../Header';
import { Main } from '../Main';
import { Nav } from '../Nav';

interface Props {}

export default function Dashboard(props: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </Box>
  );
}
