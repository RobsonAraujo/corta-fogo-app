import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity, Text } from 'react-native';
import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';
import { FirstQuestion } from '../../components/SteppersQuestions';

const Maps: React.FC = () => {
  const latitudeDelta = 0.0922;
  const longitudeDelta = 0.0421;
  const [coordinate, setCoordinate] = useState({
    latitude: -3.10719,
    longitude: -60.0261,
    latitudeDelta,
    longitudeDelta,
  });

  const [modal, setModal] = useState(false);

  return (
    <>
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
            latitude: -3.9211536,
            longitude: -62.6135072,
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
      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          marginTop: 20,
        }}
        onPress={() => setModal(true)}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <BottomBar />
      <Modal show={true} close={() => setModal(false)}>
        <FirstQuestion />
      </Modal>
    </>
  );
};

export default Maps;
