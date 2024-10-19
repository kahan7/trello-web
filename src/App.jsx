import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from '@mui/material/Typography'
function App() {

  return (
    <>
      <div>
        <Typography variant='body2' color="text.secondary">Text Typograpphy</Typography>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <h1>
        Tuấn Linh Dog
        </h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
