import React, { createContext, useContext, useState, useCallback } from 'react';

interface MarkerData {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
}

interface MapInterationContextData {
  markersList: Array<MarkerData>;
  tempLocationReport?: MarkerData;
  handleTempLocationReport(data: MarkerData): void;
}

const MapInterationContext = createContext<MapInterationContextData>(
  {} as MapInterationContextData,
);

const MapInterationProvider: React.FC = ({ children }) => {
  const [tempLocationReport, setTempLocationReport] = useState<MarkerData>(
    {} as MarkerData,
  );

  const [markersList, setMarkersList] = useState<Array<MarkerData>>([
    {
      latitude: -3.10719,
      longitude: -60.0261,
    },
    {
      latitude: 37.79583,
      longitude: -122.404417,
    },
    {
      latitude: 37.788839,
      longitude: -122.40641,
    },
    {
      latitude: 37.782834,
      longitude: -122.406417,
    },
    {
      latitude: 37.711839,
      longitude: -122.406417,
    },
  ] as Array<MarkerData>);

  const handleTempLocationReport = useCallback(
    async ({ latitude, longitude }: MarkerData) => {
      setTempLocationReport({ latitude, longitude });
    },
    [],
  );

  return (
    <MapInterationContext.Provider
      value={{
        tempLocationReport,
        handleTempLocationReport,
        markersList,
      }}
    >
      {children}
    </MapInterationContext.Provider>
  );
};

function useMapInteration(): MapInterationContextData {
  const context = useContext(MapInterationContext);

  if (!context) {
    throw new Error('useAuth must be used with an MapInterationProvider');
  }

  return context;
}

export { MapInterationProvider, useMapInteration };
