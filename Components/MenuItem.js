import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon,Content,Button} from 'native-base';
import { Link } from 'react-router-native'

class SideBar extends React.Component {



  render() {
    return (

      <Content style={{backgroundColor: '#ffffff'}}>
        <Text>
          {" "}
        </Text>
        <Text>
          {" "}
        </Text>
        <Text>
          {" "}
        </Text>


          <Button transparent >
            <Text>profile</Text>
          </Button>
        


        <Text>
          {" "}
        </Text>

        <Button transparent>
          <Text>myfavorite</Text>
        </Button>

        <Text>
          {" "}
        </Text>

        <Button transparent>
          <Text>F & Q</Text>
        </Button>


        <Text>
          {" "}
        </Text>

        <Button transparent>
          <Text>Notifications</Text>
        </Button>

      </Content>


    );
  }
}


export default SideBar;
//<Icon name="arrow-back" />
