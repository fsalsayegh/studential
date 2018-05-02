import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {View,Body,Input,Item,Right,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon,Drawer } from 'native-base';
import {Link,NativeRouter} from 'react-router-native'
import SideBar from '../Drawer/MenuItem';
import store from '../../Store';
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
  // <Button transparent>
  //   <Link to='/profile' >
  //     <Icon name= 'arrow-back'/>
  //   </Link>
  // </Button>
  render() {
    return (
      <Header searchBar >
        {store.leftheader ?
          <Left>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon name= 'menu'/>
            </Button>
          </Left>
              :
          <Left>
            <Button transparent>
              <Link to='/profile' >
                <Icon name= 'arrow-back'/>
              </Link>
            </Button>
          </Left>
            }
        {store.mainpage ?
          <Body>
            <Item style={{marginLeft: 60}} >
              <Icon name="ios-search"/>
              <Input placeholder="Search for.." onChangeText={(text) => {this.setState({newtext:text})} }/>
              <Button transparent onPress={this.filterList.bind(this)}><Text style={{marginLeft: 40}}>Search</Text></Button>
            </Item>
          </Body>
            :
          <Body>
          </Body>
            }
        {store.headright ?
            <Left>
              <Button transparent>
                <Link to="/add">
                  <Text style={{marginLeft: 50}}> Create</Text>
                </Link>
              </Button>
            </Left>
            :
            <Right>
            </Right>
          }
            <Body>
              <Text>{store.header}</Text>
            </Body>
        </Header>
          // {/* <Right>
          //   <Item>
          //     <Button transparent onPress={this.filterList.bind(this)}><Text>Search</Text></Button>
          //   </Item>
          // </Right> */}
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
