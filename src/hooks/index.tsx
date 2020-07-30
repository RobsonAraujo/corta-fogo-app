import React from 'react';
// import { AuthProvider } from './auth';
import { ReportInfosProvider } from './reportInfos';

const AppProvider: React.FC = ({ children }) => (
  <ReportInfosProvider>
    {children}
    {/* <AuthProvider>{children}</AuthProvider> */}
  </ReportInfosProvider>
);

export default AppProvider;
