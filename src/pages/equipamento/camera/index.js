import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  Camera,
  requestCameraPermissionsAsync,
  getCameraPermissionsAsync,
} from 'expo-camera';

export default function CameraEquip({navigation}) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  /* const askCameraPermission = async () => {
    const { status } = await getCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }; */
  const permisionFunction = async () => {
    const {status} = await getCameraPermissionsAsync();
    setHasPermission(status === 'granted');
    if (status === false) {
      await Camera.requestCameraPermissionsAsync();
    }

    // here is how you can get the camera permission
    /* const cameraPermission = Camera.useCameraPermissions();
    console.log(cameraPermission);

    setCameraPermission(cameraPermission.status === "granted"); */

    if (hasPermission === false) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  return (
    <View>
      <Camera ref={ref => setCamera(ref)} style={{height: 500}} />
    </View>
  );
}
