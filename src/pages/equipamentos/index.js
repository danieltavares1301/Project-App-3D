import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

export default function Equipamentos() {
  const navigation = useNavigation();
  return <WebView source={{uri: 'http://192.168.1.4:3000/'}} />;
}
