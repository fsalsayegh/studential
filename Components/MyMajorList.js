import React from 'react';
import {TouchableOpacity,CameraRoll,ScrollView,StyleSheet, Text, View, Image,ListView } from 'react-native';
import {Thumbnail,Button, Form, Input,Item, Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab,ListItem,Body} from 'native-base';
import store from '../Store';
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';

 const MyMajorList = observer(class MyMajorList extends React.Component {

   componentWillMount(){
     let list =[];
         fetch('http://127.0.0.1:8000/api/majorlist/').then(
           (x) => x.json()
         ).then(
             (y) =>{
            for(i=0; i< y.length; i++){
              list.push({value: y[i].id})
            }

            store.majorlistdropdown = list
            console.log(store.majorlistdropdown)
         })


      }

   selectedItem(item){
     store.selected = item
     console.log("selected"+ store.selected)
     }


render() {
  return(
    <View>
      <Dropdown label='Choose your major' data={store.majorlistdropdown} onChangeText={this.selectedItem.bind(this)}/>
    </View>

  )
  }
})
export default MyMajorList;

{/* <Dropdown label='Choose your major' data={this.props.major.name} onChangeText={this.selectedItem.bind(this)}/> */}
