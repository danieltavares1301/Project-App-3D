import * as React from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function DataTableCmp() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            textStyle={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Item
          </DataTable.Title>
          <DataTable.Title
            numeric
            textStyle={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Quantidade
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Parafuso 1</DataTable.Cell>
          <DataTable.Cell numeric>4</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Arruelas</DataTable.Cell>
          <DataTable.Cell numeric>4</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Rolamentos</DataTable.Cell>
          <DataTable.Cell numeric>2</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
