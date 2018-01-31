import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Form, Input,Item,Button , Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab } from 'native-base';
import MyLogin from './Tab_Login.js';
import MySignup from './Tab_Signup.js';
import store from '../Store';
import { observer } from "mobx-react";

 const MyForm= observer(class MyForm extends React.Component {

   componentWillMount(){
     store.mainpage = false
     store.headright = false
   }

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
})
export default MyForm;
//alignSelf: 'center'


//
// <Button  style={{color:'#ff5c5c', marginTop: 20, marginLeft: 20, marginRight: 20}} borderd block  onPress={this.alert.bind(this)}>
//   <Text style={{color: "white", fontFamily: 'Verdana'}}>Login</Text>
// </Button>
// <Button style={{color:'#ff5c5c', marginLeft: 20, marginRight: 20}} borderd block onPress={this.alert2.bind(this)}>
//     <Text style={{color: "white" ,fontFamily: 'Verdana'}}>Signup</Text>
// </Button>
