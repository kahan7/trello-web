import React from 'react';
import { useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';


function SelectMode() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-system-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-system-mode"
        id="select-dark-light-system-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: "center", gap: '8px' }}>
            <LightModeIcon fontSize="small" />Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: "center", gap: '8px' }}>
            <DarkModeOutlinedIcon fontSize="small" />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: "center", gap: '8px' }}>
            <SettingsBrightnessIcon fontSize="small" />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery('(data-color-scheme: dark)');
  const prefersLightMode = useMediaQuery('(data-color-scheme: light)');
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  const { mode } = useColorScheme();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', mode);
  }, [mode]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            margin: 0,
            transition: 'background-color 0.3s ease',
          },
        })}
      />
      <div>
        <ModeToggle />
        <hr />
        <SelectMode />
        <p>ss</p>
      </div>
    </>
  );
}

export default App;
