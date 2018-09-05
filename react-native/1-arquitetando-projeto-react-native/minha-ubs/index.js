import { AppRegistry } from 'react-native';
import Application from './application';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

AppRegistry.registerComponent('MinhaUBS', () => Application);