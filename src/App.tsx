import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Recipes } from './pages/Recipes';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative">
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>
        
        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;