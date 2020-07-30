import React from 'react';
// import { AuthProvider } from './auth';
import { MapInterationProvider } from './mapInteration';

const AppProvider: React.FC = ({ children }) => (
  <MapInterationProvider>
    {children}
    {/* <AuthProvider>{children}</AuthProvider> */}
  </MapInterationProvider>
);

export default AppProvider;
