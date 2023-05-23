import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 8 }}>
        <AppBar sx={{ backgroundColor: '#3E50B5' }} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default NavBar;