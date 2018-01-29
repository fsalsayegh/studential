import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Drawer,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon } from 'native-base';
import {Link} from 'react-router-native'


class MyHeader extends React.Component {


  submit(){
    <Drawer>

    </Drawer>
  }


  render() {

    return (
      <Header>
          <Left>
          <Button transparent onPress={this.submit.bind(this)}>
            <View>
              <Icon name= 'menu'/>
            </View>
          </Button>
        </Left>
      </Header>


    );
  }
}


export default MyHeader;
