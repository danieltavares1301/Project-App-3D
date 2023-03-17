import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import ItemInfo from '../../../components/itemInfo';

export default function DadosEquipamento({route}) {
  const {
    nameObj,
    urlObj,
    TAG,
    item,
    localidade,
    dataEntrada,
    dataSaida,
    contatoResponsável,
    servicosRestantes,
  } = route.params;

  console.log(route.params);

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 20}}>{nameObj}</Text>
      <ItemInfo />
      {/* <WebView source={{uri: 'http://192.168.1.4:3000/'}} /> */}
    </View>
  );
}
