import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Content,Header,Footer,Button, Icon, FooterTab, Left,Right } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import store from '../../Store';
import { observer } from "mobx-react";

const MyDetail = observer(class MyDetail extends React.Component {

  componentWillMount(){
      store.mainpage = false
      store.headright = false
      store.header = 'Detail'
      store.leftheader= false

   }
  render() {
    return (

      <View>
      </View>
    );
  }
});
export default MyDetail;
