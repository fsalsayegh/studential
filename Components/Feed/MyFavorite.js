import React from 'react';
import { FlatList,StyleSheet, Text, View ,ListView, Image} from 'react-native';
import {Drawer,Card,CardItem,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon
} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import MyComment from './Comment.js';
import {Link} from 'react-router-native'
import store from '../../Store.js'
import { observer } from "mobx-react";
import MyItem from './MyItem.js';

const MyFavorite = observer(class MyFavorite extends React.Component {
  constructor(){
    super();
    this.state ={
      user:{},
     }
  }
//   <FlatList data={store.x} renderItem={({item}) => <Text>{item.username}</Text>}
// />

 render() {
   return (
     <View>
       <FlatList data={store.favorite} renderItem={({item}) => <Text>{item}</Text>} enableEmptySections/>
    </View>
   );
 }
});

export default MyFavorite;
