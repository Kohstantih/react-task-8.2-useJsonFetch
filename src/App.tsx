import './App.css'
import Data from './components/Data';

function App() {
  return (
    <>
      <Data url={import.meta.env.VITE_APP_DATA}/>
      <Data url={import.meta.env.VITE_APP_LOADING}/>
      <Data url={import.meta.env.VITE_APP_ERROR}/>
    </>
  )
}

export default App
