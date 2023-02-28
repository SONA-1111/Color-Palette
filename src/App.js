import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from "./components/Main/Main";
import Example from "./components/Example/Example";
import Home from './Pages/Home/Home'
import ColorPalette from './Pages/ColorPalette/ColorPalette';
import ColorPicker from './Pages/ColorPicker/ColorPicker'
import Error404 from './Pages/Error404/Error404'
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palette/:paletteName" element={<ColorPalette />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/gradientGenerator" element={<Main />} />
          <Route path="randomBackground" element={<Example />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <ThemeToggle />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
