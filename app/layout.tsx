import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '0o0r7 - Social Media',
  description: 'Share content, get followers, likes, comments and engage with community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="bg-black border-b border-gray-700 p-4">
          <h1 className="text-2xl font-bold">0o0r7 Social</h1>
          <p className="text-gray-400 text-sm">Share • Follow • Engage • Grow</p>
        </header>
        {children}
      </body>
    </html>
  );
}
