import React from 'react';
import {Button} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MontagemEquipamento from '../../pages/equipamento/montagemEquipamento';
import DesmontagemEquipamento from '../../pages/equipamento/desmontagemEquipamento';
import PeritagemEquipamento from '../../pages/equipamento/peritagemEquipamento';
import InspecaoEquipamento from '../../pages/equipamento/inspecaoEquipamento';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{padding: 5}}>
      <ScrollView horizontal style={{height: 40}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Button
              key={label}
              mode="contained"
              buttonColor="green"
              onPress={onPress}
              onLongPress={onLongPress}
              style={{marginHorizontal: 3}}>
              {label}
            </Button>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const RelatorioEquipamentoTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="Montagem"
        component={MontagemEquipamento}
        options={{}}
      />
      <Tab.Screen name="Desmontagem" component={DesmontagemEquipamento} />
      <Tab.Screen name="Peritagem" component={PeritagemEquipamento} />
      <Tab.Screen name="Inspeção" component={InspecaoEquipamento} />
    </Tab.Navigator>
  );
};

export default RelatorioEquipamentoTabs;
