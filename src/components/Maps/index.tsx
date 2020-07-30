import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useReportInfos } from '../../hooks/reportInfos';

const Maps: React.FC = () => {
  const latitudeDelta = 0.0922;
  const longitudeDelta = 0.0421;
  const [coordinate, setCoordinate] = useState({
    latitude: -3.10719,
    longitude: -60.0261,
    latitudeDelta,
    longitudeDelta,
  });

  const { handleTempLocationReport, tempLocationReport } = useReportInfos();

  return (
    <MapView
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      region={coordinate}
      showsUserLocation
      onUserLocationChange={e => {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        setCoordinate({
          latitude,
          longitude,
          longitudeDelta,
          latitudeDelta,
        });
      }}
      onPress={e => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        handleTempLocationReport({
          latitude,
          longitude,
        });
      }}
    >
      {tempLocationReport ? (
        <Marker
          draggable
          coordinate={{
            latitude: tempLocationReport.latitude,
            longitude: tempLocationReport.longitude,
          }}
          title="meu title"
          description="minha description"
        />
      ) : (
        ''
      )}
    </MapView>
  );
};

export default Maps;
