import React from 'react';
import { useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

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
    // Đặt thủ công thuộc tính `data-color-scheme` lên thẻ <html>
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
            transition: 'background-color 0.3s ease', // Thêm hiệu ứng mượt
          },
        })}
      />
      <div>
        <ModeToggle />
        <p>ss</p>
      </div>
    </>
  );
}

export default App;
