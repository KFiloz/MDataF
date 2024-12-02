'use client';

import React from 'react';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
}
