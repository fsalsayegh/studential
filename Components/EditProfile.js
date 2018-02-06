import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { Label,Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
import MyTest from './Test';
import SelectMultiple from 'react-native-select-multiple'
import {Link,NativeRouter,Route} from 'react-router-native'

const EditProfile = observer(class EditProfile extends React.Component {
  constructor(){
    super();
    this.state ={

    }
  }


  componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Edit Profile'
    store.leftheader =false
  
  }

  //when the user selects or de-selects an item
  onSelectionsChange(selectedItems){
  //selectedItems is array of { label, value }
  store.selectedItems=selectedItems
  console.log(selectedItems)
}

selectedItem(item){
  store.selected = item
  console.log("selected"+ store.selected)
  }



  render() {

    return (
      <View>

        <Card>
          <CardItem>
            <Body style={{marginLeft: 150}}>
              <Thumbnail source={{uri: 'https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png'}} />
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text style={{textAlign: "center",fontWeight: "bold"}}>Biography</Text>
                  <Text>
                    {" "}
                  </Text>

                  <View className='major-input' style={{marginLeft: 20, marginRight: 20}}>
                    <Label style={{fontSize: 15,fontWeight: "bold"}} stackedLabel> Major</Label>
                      <Dropdown  label='Major' data= {store.major} onChangeText={this.selectedItem.bind(this)} />
                  </View>

                  <Text>
                    {" "}
                  </Text>

                  <View className='Course-input' style={{marginLeft: 20, marginRight: 20}}>
                    <Label style={{fontSize: 15,fontWeight: "bold"}}> Course</Label>
                    <SelectMultiple items={store.course} selectedItems={store.selectedItems} onSelectionsChange={this.onSelectionsChange.bind(this)} />
                  </View>

                  <Text>
                    {" "}
                  </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>

          </CardItem>
        </Card>
          <Body>
            <Button>
              <Link to ="/profile">
                <Text> Save </Text>
              </Link>
            </Button>
          </Body>

        </View>
    );
  }
});


export default EditProfile;
