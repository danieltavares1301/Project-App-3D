import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DadosEquipamento from '../../pages/equipamento/dadosEquipamento';
import ListaDePecasEquipamento from '../../pages/equipamento/listaDePecasEquipamento';
import Objeto3DEquipamento from '../../pages/equipamento/objeto3DEquipamento';
import RelatoriosEquipamento from '../../pages/equipamento/relatoriosEquipamento';

const Tab = createMaterialTopTabNavigator();

export const EquipamentoTabs = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
        tabBarAndroidRipple: {borderless: false},
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="dados"
        component={DadosEquipamento}
        initialParams={route.params}
      />
      <Tab.Screen
        name="lista"
        component={ListaDePecasEquipamento}
        initialParams={route.params}
      />
      <Tab.Screen
        name="3D"
        component={Objeto3DEquipamento}
        initialParams={route.params}
      />
      <Tab.Screen
        name="Relatórios"
        component={RelatoriosEquipamento}
        initialParams={route.params}
      />
    </Tab.Navigator>
  );
};
