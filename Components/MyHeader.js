import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Right,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon,Drawer } from 'native-base';
import {Link} from 'react-router-native'
import SideBar from './MenuItem';
import MyFooter from './MyFooter.js';

class MyHeader extends React.Component {

      closeDrawer(){
      this.drawer._root.close()
    };

    openDrawer(){
          this.drawer._root.open()
          console.log("hhh")
        };


  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={(<SideBar navigator={this.navigator} />)}
        onClose={() => this.closeDrawer()}>
          <Header>
              <Left>
                <Button transparent onPress={() => this.openDrawer()}>
                    <Icon name= 'menu' />
                </Button>
            </Left>
          </Header>
        <MyFooter />
      </Drawer>

    );
  }
}


export default MyHeader;
