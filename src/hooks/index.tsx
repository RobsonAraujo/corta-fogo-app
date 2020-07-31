import React from 'react';
// import { AuthProvider } from './auth';
import { MapInterationProvider } from './mapInteration';
import { ReportInfoProvider } from './reportInfo';
import { UIProvider } from './UI';

const AppProvider: React.FC = ({ children }) => (
  <MapInterationProvider>
    <ReportInfoProvider>
      <UIProvider>{children}</UIProvider>
    </ReportInfoProvider>
  </MapInterationProvider>
);

export default AppProvider;
