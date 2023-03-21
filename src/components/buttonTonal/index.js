import * as React from 'react';
import {Button} from 'react-native-paper';

const ButtonTonal = () => (
  <Button
    icon="plus"
    mode="contained"
    buttonColor="green"
    onPress={() => console.log('Pressed')}>
    Adicionar
  </Button>
);

export default ButtonTonal;
