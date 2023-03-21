import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Button} from 'react-native-paper';

const RelatorioEquipamentoTabs = () => {
  return (
    <ScrollView style={{padding: 10}}>
      <ScrollView horizontal style={{height: 40}}>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => console.log('Pressed')}
          style={{marginRight: 10}}>
          Desmontagem
        </Button>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => console.log('Pressed')}
          style={{marginRight: 10}}>
          Peritagem
        </Button>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => console.log('Pressed')}
          style={{marginRight: 10}}>
          Montagem
        </Button>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => console.log('Pressed')}
          style={{marginRight: 10}}>
          Inspeção
        </Button>
      </ScrollView>
    </ScrollView>
  );
};

export default RelatorioEquipamentoTabs;
