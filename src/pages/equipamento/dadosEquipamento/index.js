import React, {useState} from 'react';
import {Text, Button, View, ScrollView} from 'react-native';
import CardInfo from '../../../components/cardInfo';

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

  return (
    <ScrollView style={{padding: 10, marginBottom: 10}}>
      <CardInfo title={'Nome do equipamento'} body={'Equipamento abc'} />
      <CardInfo title={'TAG'} body={TAG} />
      <CardInfo title={'Item ou Cod. Est.'} body={item} />
      <CardInfo title={'Localidade'} body={localidade} />
      <CardInfo title={'Data de entrada'} body={dataEntrada} />
      <CardInfo title={'Data de saída'} body={dataSaida} />
      <CardInfo title={'Contato do responsável'} body={contatoResponsável} />
      <CardInfo title={'Serviços a serem feitos'} body={servicosRestantes} />
      {/* <WebView source={{uri: 'http://192.168.1.4:3000/'}} /> */}
    </ScrollView>
  );
}
