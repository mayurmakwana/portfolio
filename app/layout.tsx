import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Mayur Makwana | Senior Full Stack Developer',
  description: 'Premium portfolio of Mayur Makwana, a Senior Full Stack Developer with 10+ years of experience in PHP, Node.js, React.js, and Next.js',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'PHP', 'Node.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Mayur Makwana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayurmakwana.com',
    siteName: 'Mayur Makwana Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0f1f" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%230ea5e9'>M</text></svg>" />
      </head>
      <body className="bg-dark-950 text-gray-100">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
