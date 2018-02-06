import React from 'react';
import { ListView,StyleSheet, Text, View } from 'react-native';
import { Right,Input,Content,Header,Footer,HeaderTab,Left,Button,Icon, Tab, Tabs,Grid ,Form} from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import PopupDialog ,{width} from 'react-native-popup-dialog';

const MyGroup = observer(class MyGroup extends React.Component {
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

    <View >
      <Button onPress={() => {this.popupDialog.show();}}>
      <View>
        <Text>Shadow Dialog</Text>
        <PopupDialog containerStyle={{zIndex: 10, elevation: 10}} ref={(popupDialog) => { this.popupDialog = popupDialog; }} >

            <Text >Shadow Dialog</Text>
        </PopupDialog>
      </View>
    </Button>
    </View>
  );
}
});

export default MyGroup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    width: 50,
    height: 40
  },
});
