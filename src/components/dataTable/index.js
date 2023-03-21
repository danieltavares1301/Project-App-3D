import * as React from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function DataTableCmp({lista}) {
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

        {lista.map(peca => (
          <DataTable.Row key={peca.id}>
            <DataTable.Cell>{peca.item}</DataTable.Cell>
            <DataTable.Cell numeric>{peca.qtd}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
