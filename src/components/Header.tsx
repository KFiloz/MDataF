'use client';

import Link from 'next/link';
import Image from 'next/image'; // Importar el componente de imagen

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        <div className="h-8 w-auto relative">
          <Image
            src="/Bender.png" // Ruta relativa a la carpeta `public`
            alt="M-DATA"
            layout="fill" // Hace que ocupe todo el contenedor
            objectFit="contain" // Ajusta la imagen para que no se recorte
            priority // Optimiza para carga rápida
          />
        </div>
      </Link>

      {/* Navegación */}
      <nav className="flex gap-4">
        <Link href="/services" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100">
          Servicios
        </Link>
        <Link href="/login" className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800">
          Login
        </Link>
      </nav>
    </header>
  );
}
