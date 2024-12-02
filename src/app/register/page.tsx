'use client';

import RegisterForm from '@/components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const handleRegister = async (data: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el usuario.');
      }

      alert('Usuario registrado con éxito.');
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ocurrió un error inesperado.');
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterForm onSubmit={handleRegister} />
    </main>
  );
}

