import React from 'react';
import {Text, Button, View} from 'react-native';
import WebView from 'react-native-webview';

export default function DemoText({route}) {
  console.log(route);
  const {nameObj, urlObj} = route.params;
  return (
    <View>
      <Text style={{fontSize: 200}}>{nameObj}</Text>
      {/* <WebView source={{uri: 'http://192.168.1.4:3000/'}} /> */}
    </View>
  );
}
