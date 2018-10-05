import {AppRegistry} from 'react-native';
import TodoContainer from './src/screens/todo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodoContainer);
