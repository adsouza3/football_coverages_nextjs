import App from './main/page';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <App />
      </body>
    </html>
  );
}
