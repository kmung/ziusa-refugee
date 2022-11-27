import './main.css';

// setup route configuration
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import PageNotFound404 from "./pages/PageNotFound404";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/team'
          element={<Team />}
        />
        <Route path='*' element={<PageNotFound404 />} />
      </Routes>
    <Footer />
    </>
  );
}