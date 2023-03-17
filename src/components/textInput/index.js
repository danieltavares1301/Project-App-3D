import * as React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({nameInput, text, setText}) => {
  return (
    <TextInput
      mode="outlined"
      label={nameInput}
      value={text}
      onChange={value => setText(value)}
      style={{backgroundColor: '#fff', marginBottom: 10}}
    />
  );
};

export default Input;
