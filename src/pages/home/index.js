import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return <Text>Home</Text>;
}
