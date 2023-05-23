import { React, useState } from 'react';
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

function valuetext(value) {
  return `${value}°C`;
}

function Dashboard() {
  const [quality, setQuality] = useState('');

  const handleChange = (e) => {
    setQuality(e.target.value);
  };

  return (
    <div>
      <div>
      <Typography sx={{marginBottom: 10, fontWeight: 'bold', color: 'grey'}} variant="h4">
        Welcome User!
      </Typography>
      </div>
      <Stack sx={{ marginBottom: 5 }} direction="row" spacing={8}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{ width: '210px' }}>
            <Typography sx={{ fontWeight: 'bold' }} color="inherit" gutterBottom>
              Online Mode
            </Typography>
            <Typography sx={{  }}>
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <PinkSwitch />
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
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
            size="small"
            defaultValue={30}
            getAriaValueText={valuetext}
            step={10}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
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
              <Select value={quality} onChange={handleChange}>
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
    </div>
  );
}

export default Dashboard;