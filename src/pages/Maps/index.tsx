import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity, Text } from 'react-native';
import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';

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
      <Modal show={modal} close={() => setModal(false)}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          massa odio. Quisque ante sem, tempor eget massa vel, mollis tincidunt
          metus. Ut sed felis lectus. Nam semper molestie urna, quis ultricies
          quam semper ut. Maecenas aliquet id urna a convallis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Maecenas leo lectus, dictum vitae erat eget, luctus dapibus
          sapien. Integer at hendrerit quam. Vivamus tempor, arcu non fringilla
          laoreet, enim nibh porttitor enim, eget pellentesque eros nulla congue
          neque. Suspendisse et lobortis enim, nec fermentum est. Aliquam
          accumsan viverra vehicula. Proin tempus sagittis auctor. Vivamus quam
          ligula, laoreet eget eros et, hendrerit iaculis risus. Nam a nulla in
          purus fermentum rhoncus eu et erat. Aliquam tempus felis lorem, id
          hendrerit tortor vestibulum ac.
        </Text>
      </Modal>
    </>
  );
};

export default Maps;
