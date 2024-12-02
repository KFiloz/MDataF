"use client";

import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div style={{ width: isOpen ? "250px" : "60px", backgroundColor: "#2c3e50", color: "white", transition: "width 0.3s" }}>
      <button onClick={toggleSidebar} style={{ margin: "10px", background: "none", color: "white", border: "none" }}>
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
      {isOpen && <p>Menú de opciones</p>}
    </div>
  );
};

export default Sidebar;
