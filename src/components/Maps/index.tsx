import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

const Maps: React.FC = () => {
  const latitudeDelta = 0.0922;
  const longitudeDelta = 0.0421;
  const [coordinate, setCoordinate] = useState({
    latitude: -3.10719,
    longitude: -60.0261,
    latitudeDelta,
    longitudeDelta,
  });

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
    >
      <Marker
        draggable
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title="meu title"
        description="minha description"
        onPress={e => console.log('oi', e.nativeEvent)}
      />
    </MapView>
  );
};

export default Maps;
