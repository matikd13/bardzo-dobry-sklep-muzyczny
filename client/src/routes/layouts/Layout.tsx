import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
