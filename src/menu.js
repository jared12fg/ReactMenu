// Menu.js
import React from 'react';
import './Menu.css'; // Importa el archivo CSS para estilizar el menú

const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Menu;