'use client';

import React, { useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const testConnection = async () => {
    try {
      // Realizar la solicitud al backend
      const response = await fetch('http://127.0.0.1:8000/api/test');

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      setMessage(data.message);
      setError(''); // Limpiar errores si la solicitud fue exitosa
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Asignar mensaje de error si es una instancia de Error
      } else {
        setError('Error desconocido al conectar con el backend');
      }
      setMessage(''); // Limpiar mensaje si hay un error
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Prueba de Conexión con el Backend</h1>
      <button
        onClick={testConnection}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Probar conexión
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </main>
  );
}
