import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {dados} from '../../services/dados';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', padding: 5, marginTop: 10}}>
      {dados.map(obj => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('EquipamentoTabs', obj)}
            style={{
              width: '90%',
              height: 40,
              backgroundColor: '#5555',
              borderBottomColor: 'black',
              borderWidth: 0.5,
              marginBottom: 5,
            }}
            key={obj.id}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 3,
                fontSize: 20,
              }}>
              {obj.nameObj}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
