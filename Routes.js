import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EquipamentoTabs} from './src/components/equipamentoTabs';

import {HomeTabs} from './src/components/homeTabs';

import MontagemEquipamento from './src/pages/equipamento/montagemEquipamento';
import CameraEquip from './src/pages/equipamento/camera';

const RootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {height: 40},
        }}>
        <RootStack.Group>
          <RootStack.Screen
            name="Home1"
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="EquipamentoTabs"
            component={EquipamentoTabs}
            options={{title: 'Equipamento'}}
          />
          <RootStack.Screen
            name="MontagemEquipamento"
            component={MontagemEquipamento}
          />
          <RootStack.Screen name="CameraEquip" component={CameraEquip} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
