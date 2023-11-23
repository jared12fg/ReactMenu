// App.js
import React, { useState } from 'react';
import Menu from './menu';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Abrir Menú</button>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      {/* Resto de tu contenido */}
    </div>
  );
};

export default App;