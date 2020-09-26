import React, { useState } from 'react';
import {ScrollView, Dimensions, View, Image, Text} from 'react-native'
import { event } from 'react-native-reanimated';

const imgs = [
  'https://presleyson.com.br/wp-content/uploads/2018/05/The-Walking-Dead-1128x386.png',
  'https://i0.wp.com/mixdeseries.com.br/wp-content/uploads/2020/07/hannaprimevideo.jpg',
  'https://poltronanerd.com.br/wp-content/uploads/2019/06/poltrona-carnival-row-amazon-1140x570.jpg',
  'https://nextalerts.com/wp-content/uploads/2020/05/1200x630.jpg',
  'https://presleyson.com.br/wp-content/uploads/2020/01/fear_the_walking_dead_1128x386-min.png',
  'https://i2.wp.com/cromossomonerd.com.br/wp-content/uploads/2017/01/destaque_prison_break.png',
]

const {width} = Dimensions.get('window')
const height = width * 0.6

const Carrousel = () => {
  const [indexImg, setIndexImg] = useState(0)

  return (
    <View style={{width, height}}>
      <ScrollView
        style={{
          width, height
        }}
        pagingEnabled
        fadingEdgeLength={10}
        indicatorStyle={'white'}
        horizontal
        onScroll={
          event => {
            const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)  
            if(slide !== indexImg){
              setIndexImg(slide)
            }
          }
        }
      >
        {
          imgs.map((item, index)=>(
            <Image key={index} source={{uri: item}}  style={{width, height, resizeMode: 'cover'}}/>
          ))
        } 
      </ScrollView>
      <View 
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center'
        }}>
          {
            imgs.map((i,k)=>
              (
                <Text
                  key={k} 
                  style={{color: k == indexImg ? '#fff': '#888', margin: 3}}
                  >⬤
                </Text>
              )
            )
          }
      </View>
    </View>
  );
}

export default Carrousel;