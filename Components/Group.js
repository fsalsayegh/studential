import React from 'react';
import { ListView,StyleSheet, Text, View } from 'react-native';
import { Right,Input,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon, Tab, Tabs,Grid ,Form} from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import PopupDialog from 'react-native-popup-dialog';

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
        <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} >
            <Text>Shadow Dialog</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
});
