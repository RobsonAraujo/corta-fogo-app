import React, { createContext, useContext, useState, useCallback } from 'react';

interface TempLocationReportData {
  latitude: number;
  longitude: number;
}

interface ReportInfosContextData {
  isUserPressAMarkOnMap?: boolean;
  isUserConfirmReportLocation?: boolean;
  firstQuestionAnswer: string;
  secondQuestionAnswer?: string | boolean;
  tempLocationReport?: TempLocationReportData;
  handleTempLocationReport(data: TempLocationReportData): void;
}

const initialState = {
  isUserPressAMarkOnMap: false,
  isUserConfirmReportLocation: false,
  firstQuestionAnswer: '',
  secondQuestionAnswer: '',
};

const ReportInfosContext = createContext<ReportInfosContextData>(
  {} as ReportInfosContextData,
);

const ReportInfosProvider: React.FC = ({ children }) => {
  const [tempLocationReport, setTempLocationReport] = useState<
    TempLocationReportData
  >({} as TempLocationReportData);

  const handleTempLocationReport = useCallback(
    async ({ latitude, longitude }: TempLocationReportData) => {
      setTempLocationReport({ latitude, longitude });
    },
    [],
  );

  return (
    <ReportInfosContext.Provider
      value={{
        tempLocationReport,
        handleTempLocationReport,
        ...initialState,
      }}
    >
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
