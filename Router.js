import React from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

const Router = createStackNavigator({
    Login:{
        screen:Login,
          navigationOptions:{
            header:null
          }
      },
      Dashboard:{
        screen:Dashboard,
          navigationOptions:{
            header:null
          }
      },
})

export default createAppContainer(Router);