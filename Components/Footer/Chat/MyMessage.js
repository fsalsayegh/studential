import React from 'react';
import { ListView,StyleSheet, Text, View } from 'react-native';
import { Right,Input,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon, Tab, Tabs,Grid ,Form} from 'native-base';
import store from '../../../Store.js'
import MyGroup from './Group.js';
import { observer } from "mobx-react";

const MyMessage = observer(class MyMessage extends React.Component {
  constructor(){
    super();
    this.state ={

     }
  }

componentWillMount(){
    store.header = 'Chat'
    store.mainpage = false
    store.headright = false
  }

  render() {
    return (
      <Form>
        <Grid hasTabs>
          <Tabs initialPage={0}>

            <Tab  heading="Groups"><Text>{" "}</Text>
              <MyGroup />
            </Tab>

            <Tab  heading="DM"><Text>{" "}</Text>
            </Tab>
          </Tabs>
        </Grid>
      </Form>
    );
  }
});
export default MyMessage;
