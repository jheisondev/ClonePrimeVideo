import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import Colors from '../../styles/Colors'
import Card from '../Card';

import film1 from '../../../assets/series/theBoys.jpg';
import film2 from '../../../assets/series/americanGods.jpg';
import film3 from '../../../assets/series/bombshell.jpg';
import film4 from '../../../assets/series/hanna.jpg';
import film5 from '../../../assets/series/jackRyan.jpg';
import film6 from '../../../assets/series/prisonBreak.png';
import film7 from '../../../assets/series/theExpanse.jpg';
import film8 from '../../../assets/series/twd.jpg';


const Container = styled.View`
  height: 160px;
  /* background: ;; */
  margin: 2px 0;
  padding: 1px 0px 5px 20px;
`
const Title = styled.Text`
  color: #fff;
  /* margin-left: 10px; */
`
const SubTitle = styled.Text`
  color: #199fc8;
  /* margin-left: 10px; */
`


const BoxScroll = ({title, subTitle}) => {
  return (
    <Container>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Card img={film1}/>
        <Card img={film2}/>
        <Card img={film3}/>
        <Card img={film4}/>
        <Card img={film5}/>
        <Card img={film6}/>
        <Card img={film7}/>
        <Card img={film8}/>
      </ScrollView>
    </Container>
  );
}

export default BoxScroll;