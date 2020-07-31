import React from 'react';
import { Marker } from 'react-native-maps';
import MarkerImage from '../../assets/marker.png';

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface MarkerProps {
  draggable: boolean;
  coordinate: Coordinate;
  title: string;
  description: string;
  image: HTMLImageElement;
}

const ContainerMarker: React.FC = ({
  draggable = false,
  coordinate,
  title = '',
  description = '',
  image = MarkerImage,
}: MarkerProps) => {
  return (
    <Marker
      draggable={draggable}
      coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }}
      title={title}
      description={description}
      image={image}
    />
  );
};

export default ContainerMarker;
