import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const BoxButton = styled.View`
  height: 115px;
  width: 180px;
  border-radius: 3px;
  margin: 8px 0;
`
const Image = styled.Image`
  height: 100px;
  width: 170px;
  border-radius: 3px;
`
const Card = ({img}) => {
  return (
    <BoxButton>
      <Image source={img}/>
    </BoxButton>
  );
}

export default Card;