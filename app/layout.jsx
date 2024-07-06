import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Dream Property Finder',
  description: 'Find the best property for you',
  keywords: 'property, dream property, property finder, dream property finder',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
