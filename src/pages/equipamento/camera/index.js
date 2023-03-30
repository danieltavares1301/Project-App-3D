import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  Camera,
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
  CameraType,
} from 'expo-camera';
/* import * as FileSystem from 'expo-file-system'; */

export default function CameraEquip() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  /* async function askCameraPermission() {
    const {status} = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  } */

  const askCameraPermission = async () => {
    const {granted} = await getCameraPermissionsAsync();
    if (!granted) {
      await requestCameraPermissionsAsync();
    }
  };

  useEffect(() => {
    askCameraPermission();
  }, []);

  /* async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync({quality: 1});
      const fileUri = FileSystem.documentDirectory + 'photo.jpg';
      await FileSystem.copyAsync({from: photo.uri, to: fileUri});
      setImage(photo.uri);
    }
  } */

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={{flex: 1, width: 500, height: 500}}>
      <Camera
        style={{flex: 1, width: 500, height: 500}}
        type={CameraType.back}
      />
      {/* <Button title="Tirar foto" onPress={takePicture} /> */}
    </View>
  );
}
