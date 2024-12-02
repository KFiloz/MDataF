'use client';

export default function Footer() {
    return (
      <footer className="flex flex-col items-center justify-center py-4 bg-gray-800 text-white">
        <p className="text-sm">Contacto: contacto@mdata.com</p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    );
  }
  