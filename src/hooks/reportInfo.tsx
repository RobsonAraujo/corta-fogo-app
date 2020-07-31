import React, { createContext, useContext, useState, useCallback } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

interface ReportInfoData {
  location: LocationData;
  Q1answerChoosed: string;
  Q2answerChoosed: string;
  picture?: HTMLImageElement;
  isValidPicture?: boolean;
}

interface IProps {
  data: ReportInfoData;
  handleReportData(info: ReportInfoData): void;
}

const ReportInfo = createContext<IProps>({} as IProps);

const ReportInfoProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ReportInfoData>({} as ReportInfoData);

  const handleReportData = (info: ReportInfoData) => {
    setData(info);
  };

  return (
    <ReportInfo.Provider value={{ data, handleReportData }}>
      {children}
    </ReportInfo.Provider>
  );
};

function useReportInfo(): IProps {
  const context = useContext(ReportInfo);

  if (!context) {
    throw new Error('useReportInfo must be used with an ReportInfoProvider');
  }
  return context;
}

export { ReportInfoProvider, useReportInfo };
