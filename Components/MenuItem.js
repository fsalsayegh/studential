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
            <Link to="/profile" onPress={this.props.closeDrawer()} component={Text}>
              profile
            </Link>
          </Button>

        <Text>
          {" "}
        </Text>

        <Button transparent>
          <Link to="/myfav" onPress={this.props.closeDrawer()} component={Text}>
            <Text>myfavorite</Text>
          </Link>
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
