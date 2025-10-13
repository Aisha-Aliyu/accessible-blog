import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './../components/Footer';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Accessible Blog — Aisha',
  description: 'Accessible blog & optimized gallery demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col transition-colors duration-500`}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <ThemeProvider>{children}</ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}