import React from 'react';
import {TouchableOpacity,CameraRoll,ScrollView,StyleSheet, Text, View, Image,ListView } from 'react-native';
import {Thumbnail,Button, Form, Input,Item, Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab,ListItem,Body} from 'native-base';
import store from '../Store';
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';

 const MyMajorList = observer(class MyMajorList extends React.Component {

   selectedItem(item){
     store.selected = item
     console.log("selected"+ store.selected)
     }


render() {
  return(
    <View>
      <Dropdown label='Choose your major' data={this.props.major} onChangeText={this.selectedItem.bind(this)}/>
    </View>

  )
  }
})
export default MyMajorList;

{/* <Dropdown label='Choose your major' data={this.props.major.name} onChangeText={this.selectedItem.bind(this)}/> */}
