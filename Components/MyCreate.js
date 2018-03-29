import React from 'react';
import { FlatList,StyleSheet, Text,Image,ListView } from 'react-native';
import {Label,Card,CardItem,View,Body,Input,Item,Right,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon,Drawer } from 'native-base';
import {Link,NativeRouter} from 'react-router-native'
import SideBar from './MenuItem';

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
           // dataSource: new ListView.DataSource({
           //        rowHasChanged:(row1, row2) => row1 !==row2
           //      }),

            combox: "",
            listcom:[],
            selected_create: "",
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
         let localDataSource = new ListView.DataSource({
                rowHasChanged:(row1, row2) => row1 !==row2
              })
         let listcom = store.dataSource;
         listcom.append({
           major: this.state.selected_create,
           courses: this.state.selected,
           caption: this.state.combox,
         })
         store.dataSource = localDataSource.cloneWithRows(listcom)
         // console.log("MAJOR: " + this.state.selected_create)
         // console.log("COURSE: " + this.state.selected[0].value)
         // console.log("CAPTION: " + this.state.combox)


       }
       componentWillMount(){
           store.mainpage = false
           store.headright = false
           store.header = 'Create feed'
           store.leftheader= false

        }
        selectedItem(item){
          this.setState({selected_create: item})
          console.log("selected"+ store.selected_create)
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
         <Dropdown  label='Choose your major' data={this.state.major} onChangeText={this.selectedItem.bind(this)}/>
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
       <Label stackedLabel style={{fontSize: 15, fontWeight: "bold", marginLeft: 20, marginRight: 20}}> caption </Label>
         <Item regular style={{marginLeft: 20, marginRight: 20}}>
         <Input  style={{fontSize: 12}} placeholder="Write a caption.." onChangeText={this.textInput.bind(this)}/>
       </Item>

       <Text>
       {" "}
       </Text>

       <Button color='#ff5c5c' style={{alignSelf: 'center'}} onPress={this.addcomm.bind(this)}>
         <Text style={{color: "white", fontFamily: 'Verdana'}}>Submit form</Text>
       </Button>

       <ListView dataSource={store.data} renderRow={this.renderitem} enableEmptySections/>
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
