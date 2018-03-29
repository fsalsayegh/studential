import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Thumbnail,Icon,Content,Button} from 'native-base';
import { Link } from 'react-router-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
class SideBar extends React.Component {



  render() {
    return (

      <Content style={{backgroundColor: '#ffffff'}}>

        <Grid>
            <Row style={{ height: 100 , borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Thumbnail style={{ marginLeft: 20, marginTop: 20}}source={{uri: '/Users/fatmalsayegh/Desktop/splash.png'}} />

              <Text style={{marginTop:40, marginLeft: 20, fontWeight: 'bold'}}>Student</Text>
              <Text style={{marginTop:40}}>ial</Text>
            </Row>
          </Grid>

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
