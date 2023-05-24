import React, { useState } from 'react';
import { Stack, TextField, Button} from '@mui/material';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = () => {
    userName && password ? setLoggedIn(true) : setLoggedIn(false)
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        {loggedIn ? <Dashboard /> : (
          <Stack component="form" sx={{'& > :not(style)': { m: 0, width: '30ch' }}} noValidateautoComplete="off">
            <TextField onChange={handleUserName} id="standard-basic" label="Username" variant="standard" required />
            <TextField onChange={handlePassword} sx={{ paddingBottom: 3 }} id="standard-basic" label="Password" variant="standard" required />
            <Button onClick={handleLogIn} sx={{ backgroundColor: '#3E50B5' }} color="primary" variant='contained'>Login</Button>
          </Stack>
        )}
      </div>
    </div>
  );
}

export default App;