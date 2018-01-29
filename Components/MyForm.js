import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Form, Input,Item,Button , Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab } from 'native-base';
import MyLogin from './Tab_Login.js';
import MySignup from './Tab_Signup.js';

 class MyForm extends React.Component {


//else {auth.login(this.state.username,this.state.password)}

// {/* <View>
// <Image source={{uri: 'https://i.pinimg.com/736x/ff/87/e2/ff87e203183f06807353568b23080139--wallpapers-iphone--abstract-wallpaper.jpg, https://i.pinimg.com/736x/ff/87/e2/ff87e203183f06807353568b23080139--wallpapers-iphone--abstract-wallpaper.jpg'}}
// style={{width: 40, height: 40}} />
// </View> */}
  render() {

    return (

      <Form>
        <Grid hasTabs>
          <Tabs initialPage={0}>
            <Tab  heading="Login">
              <Text>
                {" "}
              </Text>
              <MyLogin />
            </Tab>

            <Tab  heading="Signup">
              <Text>
                {" "}
              </Text>
              <MySignup />
            </Tab>
          </Tabs>
        </Grid>

      </Form>
    );
  }
}
export default MyForm;
//alignSelf: 'center'


//
// <Button  style={{color:'#ff5c5c', marginTop: 20, marginLeft: 20, marginRight: 20}} borderd block  onPress={this.alert.bind(this)}>
//   <Text style={{color: "white", fontFamily: 'Verdana'}}>Login</Text>
// </Button>
// <Button style={{color:'#ff5c5c', marginLeft: 20, marginRight: 20}} borderd block onPress={this.alert2.bind(this)}>
//     <Text style={{color: "white" ,fontFamily: 'Verdana'}}>Signup</Text>
// </Button>
