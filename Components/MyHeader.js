import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {View,Body,Input,Item,Right,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon,Drawer } from 'native-base';
import {Link,NativeRouter} from 'react-router-native'
import SideBar from './MenuItem';
import MyFooter from './MyFooter.js';
import store from '../Store';
import { observer } from "mobx-react";


const MyHeader= observer(class MyHeader extends React.Component {
  constructor() {
        super();
        this.state = {
           list:'',
           newtext: "",
           url: "http://www.google.com/?q="
         };
    }

    filterList(){
      let keyword = this.state.list;
      this.setState({list: keyword})
      console.log(this.state.url+this.state.newtext)

  }


  render() {
    return (
          <Header searchBar rounded>
            <Left>
              <Button transparent onPress={() => this.props.openDrawer()}>
                <Icon name= 'menu' />
              </Button>
            </Left>
            {store.mainpage ?
              <Body>
                <Item>
                   <Icon name="ios-search" />
                   <Input placeholder="Search for.." onChangeText={(text) => {this.setState({newtext:text})} }/>
                </Item>
              </Body>
            :

            <Body>
          </Body>

             }

             {store.headright ?
          <Right>
            <Item>
              <Button transparent onPress={this.filterList.bind(this)}><Text>Search</Text></Button>
            </Item>
          </Right>
          :
          <Right>
          </Right>
        }
            <Body>
              <Text>{store.header}</Text>
            </Body>
          </Header>


    );
  }
});


export default MyHeader;




//    var list1 = store.dataSource.filter(
//   (el) =>{
//     this.setState({filterd: true})
//     return el.username.search(keyword) !== -1;
//     console.log("fatma")
// })
// this.setState({search: list1})
