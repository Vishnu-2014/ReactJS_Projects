/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import HelloNavDrawer from './src/Components/HelloNavDrawer';

AppRegistry.registerComponent(appName, () => HelloNavDrawer);
