'use client';

import Link from 'next/link';

interface LoginFormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Callback al enviar el formulario
  showRegisterLink?: boolean; // Muestra u oculta el enlace de registro
}

export default function LoginForm({ onSubmit, showRegisterLink = true }: LoginFormProps) {
  return (
    <div className="flex flex-col justify-center h-full p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-bold mb-1">
            Nombre de Usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="Ingresa tu usuario"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Iniciar Sesión
        </button>
      </form>
      {showRegisterLink && (
        <p className="mt-4 text-center">
          ¿No tienes una cuenta?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Registrarse
          </Link>
        </p>
      )}
    </div>
  );
}
