"use client";

import React, { useState } from "react";
import Sidebar from "./layout/sidebar/sidebar";
import Header from "./layout/header/header";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleMobileSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />

      <div className="content-container">
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
