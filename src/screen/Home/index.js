import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styled from 'styled-components'
import Colors from '../../styles/Colors'

import Initial from './Initial';
import Series from './Series';
import Films from './Films';
import Childish from './Childish';

import primeVideoLogo from '../../../assets/primeVideo.png'

const Tab = createMaterialTopTabNavigator();

const Container = styled.View`
  background: #011318;
  height: 100%; 
`
const Nav = styled.View`
  width: 100%;
  height: 58px;
  background: #011318;
  align-items: center;
  justify-content: center;
`
const Logo = styled.Image`
  max-height: 28px;
  width: 80px;
`

const Home = () => {
  return (
    <>
      <Nav>
        <Logo source={primeVideoLogo}/>
      </Nav>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
          pressColor: 'transparent',
          style: {
            backgroundColor: '#011318',
            borderBottomWidth: 0,
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'none',
            width: '100%'
          },
          indicatorStyle: {
            backgroundColor: Colors.activeText,
            height: 2,
          }
        }}
      >
        <Tab.Screen name='Página Inicial' component={Initial} />
        <Tab.Screen name='Séries' component={Series} />
        <Tab.Screen name='Filmes' component={Films} />
        <Tab.Screen name='Infantil' component={Childish} />
      </Tab.Navigator>
    </>
  );
}

export default Home;