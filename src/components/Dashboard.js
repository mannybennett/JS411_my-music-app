import React, { useState, useEffect } from 'react';
import { Stack, Typography, Card, CardActions, CardContent, Switch, Slider, MenuItem, FormControl, Select } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

function Dashboard() {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = useState(2);
  const [direction, setDirection] = useState('');
  
  const handleSwitch = () => {
    setOnline(prevOnline => !prevOnline);
  };

  const handleVolume = ({ target }) => {
    setVolume(target.value)
  };
  
  const handleQuality = ({ target }) => {
    setQuality(target.value);
  };
  
  useEffect(() => {
    console.log(online);
    console.log(volume);
    console.log(quality);
  }, [online, volume, quality]);
  
  const handleDirection = () => {
    setDirection(window.innerWidth > 1000 ? "row" : "column");
  };
  
  useEffect(() => {
    handleDirection();
    window.addEventListener('resize', handleDirection);
    return () => {
      window.removeEventListener('resize', handleDirection);
    };
  }, []);

  return (
    <div>
      <div>
      <Typography sx={{marginBottom: 10, fontWeight: 'bold', color: 'grey'}} variant="h4">
        Welcome User!
      </Typography>
      </div>
      <Stack sx={{ marginBottom: 5 }} direction={direction} spacing={8}>
        <Card sx={{ width: 275 }}>
          <CardContent sx={{ width: '210px' }}>
            <Typography sx={{ fontWeight: 'bold' }} color="inherit" gutterBottom>
              Online Mode
            </Typography>
            <Typography sx={{  }}>
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <PinkSwitch onClick={handleSwitch} />
          </CardActions>
        </Card>
        <Card sx={{ width: 275 }}>
          <CardContent sx={{ width: '210px' }}>
            <Typography sx={{ fontWeight: 'bold' }} color="inherit" gutterBottom>
              Master Volume
            </Typography>
            <Typography sx={{  }}>
              Overrides all other sound settings in this application
            </Typography>
          </CardContent>
          <CardActions>
          <Slider
            onChange={handleVolume}
            defaultValue={30}
            size="small"
            step={10}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
          </CardActions>
        </Card>
        <Card sx={{ width: 275 }}>
          <CardContent sx={{ width: '210px' }}>
            <Typography sx={{ fontWeight: 'bold' }} color="inherit" gutterBottom>
              Sound Quality
            </Typography>
            <Typography sx={{  }}>
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl variant="standard" fullWidth>
              <Select value={quality} onChange={handleQuality}>
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </Stack>
      <div>
      <Typography sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
        System Notifications:
      </Typography>
      </div>
      <Stack >
        {!online && <Typography variant="paragraph" gutterBottom>Your application is offline. You won't be able to share or stream music to other devices.</Typography>}
        {volume > 80 && <Typography variant="paragraph" gutterBottom>Listening to music at a high volume could cause long-term hearing loss.</Typography>}
        {quality === 1 && <Typography variant="paragraph" gutterBottom>Music quality is degraded. Increase quality if your connection allows it.</Typography>}
      </Stack>
    </div>
  );
}

export default Dashboard;