import React from 'react';
import {Text, Button, View} from 'react-native';
import WebView from 'react-native-webview';

export default function DadosEquipamento({route}) {
  const {nameObj, urlObj} = route.params;
  return (
    <View>
      <Text style={{fontSize: 20}}>{nameObj}</Text>
      {/* <WebView source={{uri: 'http://192.168.1.4:3000/'}} /> */}
    </View>
  );
}
