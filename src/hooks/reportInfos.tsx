import React, { createContext, useContext } from 'react';

interface ReportInfosContextData {
  isUserPressAMarkOnMap?: boolean;
  isUserConfirmReportLocation?: boolean;
  firstQuestionAnswer?: string;
  secondQuestionAnswer?: string;
}

const ReportInfosContext = createContext<ReportInfosContextData>(
  {} as ReportInfosContextData,
);

const ReportInfosProvider: React.FC = ({ children }) => {
  return (
    <ReportInfosContext.Provider value={{ firstQuestionAnswer: 'oi' }}>
      {children}
    </ReportInfosContext.Provider>
  );
};

function useReportInfos(): ReportInfosContextData {
  const context = useContext(ReportInfosContext);

  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }

  return context;
}

export { ReportInfosProvider, useReportInfos };
