import React from 'react';
import WebView from 'react-native-webview';

export default function Objeto3DEquipamento({route}) {
  const {nameObj, urlObj} = route.params;
  return <WebView source={{uri: `${urlObj}`}} />;
}
