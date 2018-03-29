import React from 'react';
import { ListView,StyleSheet, Text, View } from 'react-native';
import { Right,Input,Content,Header,Footer,HeaderTab,Left,Button,Icon, Tab, Tabs,Grid ,Form} from 'native-base';
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

    <View>
      <Button onPress={() => {this.popupDialog.show()}} >
          <Text style={{color: "white" ,fontFamily: 'Verdana'}}>Add</Text>
          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog}} >
            <View style={styles.container}>
              <Text>Shadow Dialog</Text>
            </View>
          </PopupDialog>
      </Button>
    </View>
  );
}
});

export default MyGroup;
//style={styles.container}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
