import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ButtonTonal from '../../../components/buttonTonal';
import DataTableCmp from '../../../components/dataTable';

export default function ListaDePecasEquipamento({route}) {
  const {listaPecas} = route.params;
  const listaPecasNew = useState([]);
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <DataTableCmp lista={listaPecas} />
      <View
        style={{
          alignSelf: 'flex-end',
          marginBottom: '8%',
          marginRight: '5%',
        }}>
        <ButtonTonal />
      </View>
    </View>
  );
}
