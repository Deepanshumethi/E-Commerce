import Nav from './Nav';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage from './pages/ProductPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
