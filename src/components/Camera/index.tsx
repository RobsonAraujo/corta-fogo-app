import React from 'react';
import { RNCamera } from 'react-native-camera';

import { View } from 'react-native';
const Camera: React.FC = () => {
  return (
    <RNCamera
      ref={ref => {
        this.camera = ref;
      }}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      onGoogleVisionBarcodesDetected={({ barcodes }) => {
        console.log(barcodes);
      }}
    />
  );
};

export default Camera;
