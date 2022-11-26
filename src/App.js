import './main.css';

import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;
