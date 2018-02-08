import React from 'react';
import { FlatList,StyleSheet, Text,Image,ListView } from 'react-native';
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
           selected: [],
           combox:'',
           listcom:[],
           dataSource: new ListView.DataSource({
                  rowHasChanged:(row1, row2) => row1 !==row2
                }),
         };
       }


       onSelectionsChange(selected){
       //selected is array of { label, value }
       this.setState({selected})
       console.log(selected)
       }

       textInput(input){
         this.setState({combox: input})
         console.log(this.state.combox)
       }

       addcomm(){

         let listcom = this.state.listcom;
         listcom.push(this.state.combox)
         this.setState({listcom: listcom , dataSource: this.state.dataSource.cloneWithRows(listcom)})
         console.log("addcomm func" +this.state.listcom)

       }
       componentWillMount(){
           store.mainpage = false
           store.headright = false
           store.header = 'Create feed'
           store.leftheader= false

        }

renderitem(x){
  return(
  <Text>
    {x}
  </Text>
)
}
  render() {
    return (
    <View>
      <Card>
        <View className='major-input' style={{marginLeft: 20, marginRight: 20,marginBottom: 20}}>
         <Label style={{fontSize: 15,fontWeight: "bold", marginTop: 20}} stackedLabel> Major</Label>
         <Dropdown  label='Choose your major' data={this.state.major}/>
       </View>

       <View className='Course-input' style={{marginLeft: 20, marginRight: 20 ,marginBottom: 20 }}>
         <Label style={{fontSize: 15,fontWeight: "bold"}}> Course</Label>
         <SelectMultiple items={this.state.course} selectedItems={this.state.selected} onSelectionsChange={this.onSelectionsChange.bind(this)} />
       </View>

       <View className='Image-upload' style={{marginLeft: 20, marginRight: 20 ,marginBottom: 20 }}>
         <Label style={{fontSize: 15,fontWeight: "bold"}}> Upload Image</Label>
      </View>

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

       <Button color='#ff5c5c' style={{alignSelf: 'center'}} onPress={this.addcomm.bind(this)}>
         <Text style={{color: "white", fontFamily: 'Verdana'}}>Submit form</Text>
       </Button>

       <ListView dataSource={this.state.dataSource} renderRow={this.renderitem } enableEmptySections/>
       <Text>
       {" "}
       </Text>
   </Card>
    </View>

    );
  }
});
export default MyCreate;


//<FlatList data={this.state.listcom} renderItem={({item}) => <Text>{item.label}</Text>} />
