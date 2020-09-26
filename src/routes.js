import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from './styles/Colors'
import { AntDesign } from '@expo/vector-icons'

// import pages
import Home from './screen/Home';
import Search from './screen/Search';
import Downloads from './screen/Downloads';
import Account from './screen/Account';

const Tab = createBottomTabNavigator();

function routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
    
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search1';
              break;
            case 'Downloads':
              iconName = 'download';
              break;
            case 'Account':
              iconName = 'user';
              break;
          }
    
          return <AntDesign name={iconName} size={24} color={color} />;
        },

      })}
      tabBarOptions={{
        activeTintColor: Colors.activeIcon,
        showLabel: true,
        style: {
          backgroundColor: Colors.bgTabColor,
          height: 55,
          borderTopWidth: 0,
        },

        tabStyle: {
          paddingVertical: 5,
        },
      }}
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Downloads" component={Downloads} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default routes;