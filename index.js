import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {registerRootComponent} from 'expo';

registerRootComponent(App);
/* AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('main', {rootTag});
} */
