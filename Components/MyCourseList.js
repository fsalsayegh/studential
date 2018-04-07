import React from 'react';
import {TouchableOpacity,CameraRoll,ScrollView,StyleSheet, Text, View, Image,ListView } from 'react-native';
import {Thumbnail,Button, Form, Input,Item, Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab,ListItem,Body} from 'native-base';
import store from '../Store';
import { observer } from "mobx-react";
import SelectMultiple from 'react-native-select-multiple'

 const MyCourseList = observer(class MyCourseList extends React.Component {


   componentWillMount(){
     fetch('http://127.0.0.1:8000/api/courselist/').then(
       (x) => x.json()
     ).then(
         (y) =>{
           store.majorlistmultiple=y.map( x =>{
             return {
               value: x.name,
               label: x.name
             }
           }
           )

        console.log(y)
     })
     .catch(err => console.error(err));
  }


   //when the user selects or de-selects an item
   onSelectionsChange(selectedItems){
   //selectedItems is array of { label, value }
   store.selectedItems = selectedItems
   console.log(selectedItems)
   }

render() {
  return(
    <View>
      <SelectMultiple items={store.majorlistmultiple} selectedItems={store.selectedItems} onSelectionsChange={this.onSelectionsChange.bind(this)} />
    </View>

  )
  }
})
export default MyCourseList;
