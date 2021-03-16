import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';

import Home from './pages/Home';
import Search from './pages/Search';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>


const Drawer = createDrawerNavigator<HomeScreenNavigationProp>();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name = 'Home'
        component = {Home}
        options = {{
          title: 'Minha cidade'
        }}
      />
      <Drawer.Screen
        name = 'Search'
        component = {Search}
        options = {{
          title: 'Procurar'
        }}
      />
    </Drawer.Navigator>
  );
}