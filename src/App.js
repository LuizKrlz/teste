import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;
