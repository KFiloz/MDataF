import { useState } from 'react';
import styles from '../styles/dashboard.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul>
        <li>Inicio</li>
        <li>Gráficos</li>
        <li>Configuración</li>
        <li>Salir</li>
      </ul>
    </div>
  );
};

export default Sidebar;
