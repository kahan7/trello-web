import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider
      theme={theme}
      defaultMode="light" // Bắt đầu với chế độ sáng
      attribute="data-color-scheme" // Áp dụng data-color-scheme vào root element
      modeStorageKey="mui-mode" // Lưu trạng thái mode
    >
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
