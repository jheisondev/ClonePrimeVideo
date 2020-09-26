import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

import BoxScroll from '../../../components/BoxScroll';
import Carrousel from '../../../components/Carrousel';

const Container = styled.View`
  background-color: #011318;
  flex: 1;
`
const Series = () => {
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
      <Carrousel/>
      <BoxScroll 
        title='Assista a seguir' 
        subTitle='' 
      />
      <BoxScroll 
        title='Filmes que achamos que você vai curtir' 
        subTitle='Incluído com Prime' 
      />
      <BoxScroll 
        title='Animação' 
        subTitle='Incluído com Prime' 
      />
      <BoxScroll 
        title='Ficção' 
        subTitle='Incluído com Prime' 
      />
      <BoxScroll 
        title='Romance' 
        subTitle='Incluído com Prime' 
      />
      <BoxScroll 
        title='Comedia' 
        subTitle='Incluído com Prime' 
      />
      </ScrollView>
    </Container>
  );
}

export default Series;