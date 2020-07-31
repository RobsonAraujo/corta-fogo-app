import React, { createContext, useContext, useState, useCallback } from 'react';

interface MarkerData {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
}

interface MapInterationContextData {
  markersList: Array<MarkerData>;
  tempLocationReport?: MarkerData | null;
  handleTempLocationReport(data: MarkerData): void;
  setMarkersList(): () => any;
}

const MapInterationContext = createContext<MapInterationContextData>(
  {} as MapInterationContextData,
);

const MapInterationProvider: React.FC = ({ children }) => {
  const [
    tempLocationReport,
    setTempLocationReport,
  ] = useState<MarkerData | null>(null);

  const [markersList, setMarkersList] = useState<Array<MarkerData>>([
    {
      latitude: -23.57666808949637,
      longitude: -46.4604427,
    },
    {
      latitude: -23.52666808949637,
      longitude: -46.4604427,
    },
    {
      latitude: -23.48666808949637,
      longitude: -46.4604427,
    },
    {
      latitude: -23.41666808949637,
      longitude: -46.2004427,
    },
  ] as Array<MarkerData>);

  const handleTempLocationReport = useCallback(
    async (data: MarkerData | null) => {
      if (data) {
        const { latitude, longitude } = data;
        setTempLocationReport({ latitude, longitude });
      } else {
        setTempLocationReport(null);
      }
    },
    [],
  );

  return (
    <MapInterationContext.Provider
      value={{
        tempLocationReport,
        handleTempLocationReport,
        markersList,
        setMarkersList,
      }}
    >
      {children}
    </MapInterationContext.Provider>
  );
};

function useMapInteration(): MapInterationContextData {
  const context = useContext(MapInterationContext);

  if (!context) {
    throw new Error(
      'useMapInteration must be used with an MapInterationProvider',
    );
  }

  return context;
}

export { MapInterationProvider, useMapInteration };
