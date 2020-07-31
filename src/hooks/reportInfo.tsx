import React, { createContext, useContext, useState, useCallback } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

interface ReportInfoData {
  location: LocationData;
  answerQ1: string;
  answerQ2: string;
  picture?: HTMLImageElement;
  isValidPicture?: boolean;
}

const ReportInfo = createContext<ReportInfoData>({} as ReportInfoData);

const ReportInfoProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ReportInfoData>({} as ReportInfoData);

  return <ReportInfo.Provider value={data}>{children}</ReportInfo.Provider>;
};

function useReportInfo(): ReportInfoData {
  const context = useContext(ReportInfo);

  if (!context) {
    throw new Error('useReportInfo must be used with an ReportInfoProvider');
  }

  return context;
}

export { ReportInfoProvider, useReportInfo };
