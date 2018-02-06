import React from 'react';
import { FlatList,StyleSheet, Text,Image } from 'react-native';
import {Label,Card,CardItem,View,Body,Input,Item,Right,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon,Drawer } from 'native-base';
import {Link,NativeRouter} from 'react-router-native'
import SideBar from './MenuItem';
import MyFooter from './MyFooter.js';
import store from '../Store';
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
import SelectMultiple from 'react-native-select-multiple';


var RNUploader = require('NativeModules').RNUploader;



const MyCreate= observer(class MyCreate extends React.Component {
  constructor() {
        super();
        this.state = {
           major:[
             { label: "Computer Engineering", value: "Computer Engineering"},
             { label: "Electrical Engneering", value: "Electrical Engineering"},
             { label: "Mechanical Engineering", value: "Mechanical Engineering"},

           ],
           course:[
             { label: "Operating System" ,value:"Operating System"},
             { label: "Nano ", value: "Nano"},
             { label: "physics " ,value: "physics"},

           ],
           selectedFruits: [],
           combox:'',
           listcom:[],
           form:[]
         };
       }


       onSelectionsChange(selectedFruits){
       //selectedFruits is array of { label, value }
       this.setState({selectedFruits})
       console.log(selectedFruits)
       }

       textInput(input){
         this.setState({combox: input})
         console.log(this.state.combox)
       }

       addcomm(){
         let inputext = this.state.combox;
         let listcom = this.state.listcom;
         listcom.push(inputext)
         this.setState({listcom: listcom})
         console.log("addcomm func" +this.state.listcom)

       }
       componentWillMount(){
           store.mainpage = false
           store.headright = false
           store.header = 'Create feed'
           store.leftheader= false
         }


  render() {
    return (
    <View>

        <View className='major-input' style={{marginLeft: 20, marginRight: 20,marginBottom: 20}}>
         <Label style={{fontSize: 15,fontWeight: "bold", marginTop: 20}} stackedLabel> Major</Label>
         <Dropdown  label='Choose your major' data={this.state.major}/>
       </View>

       <View className='Course-input' style={{marginLeft: 20, marginRight: 20 ,marginBottom: 20 }}>
         <Label style={{fontSize: 15,fontWeight: "bold"}}> Course</Label>
         <SelectMultiple items={this.state.course} selectedItems={this.state.selectedFruits} onSelectionsChange={this.onSelectionsChange.bind(this)} />
       </View>

       <Label>Upload Image</Label>

       <Text>
       {" "}
       </Text>
       <Label stackedLabel style={{fontSize: 15, fontWeight: "bold", marginLeft: 20, marginRight: 20}}> comment box</Label>
         <Item regular style={{marginLeft: 20, marginRight: 20}}>
         <Input  style={{fontSize: 12}} placeholder="add a comment.." onChangeText={this.textInput.bind(this)}/>
       </Item>

       <Text>
       {" "}
       </Text>

       <Button color='#ff5c5c' style={{marginLeft: 160}} onPress={this.addcomm.bind(this)}>
         <Text style={{color: "white", fontFamily: 'Verdana'}}>Submit</Text>
       </Button>

       <Button color='#ff5c5c' style={{marginLeft: 160}}>
         <Text style={{color: "white", fontFamily: 'Verdana'}}>Submit form</Text>
       </Button>
    </View>


    );
  }
});
export default MyCreate;


//<FlatList data={this.state.listcom} renderItem={({item}) => <Text>{item.label}</Text>} />
