import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Since Georgia is a system font, we don't need next/font/google for it.
// We will just use the Playfair Display or system serif for fallback if needed.

export const metadata: Metadata = {
  title: 'La Favorita | Peluquería y belleza en Sabadell',
  description: 'Peluquería y tratamientos de belleza en Avinguda Barberà 280, local J, Sabadell. Reserva tu cita en La Favorita.',
  keywords: 'peluquería Sabadell, peluquería unisex Sabadell, peluquería Avinguda Barberà, belleza Sabadell, La Favorita Sabadell'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-warm-ink bg-warm-bg antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
