import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input,CardItem,Card,Container,Content,Header,Footer,Button, Icon, FooterTab, Left,Right } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import store from '../Store';

import { observer } from "mobx-react";

const MySearch= observer(class MySearch extends React.Component {
  constructor() {
        super();
        this.state = {
           list:'',
           newtext: "",
           url: "http://www.google.com/?q="
         };
    }

    filterList(){
      let keyword = this.state.list;
      this.setState({list: keyword})
      console.log(this.state.url+this.state.newtext)

  }

  componentWillMount(){
      store.mainpage = false
      store.headright = false
      store.header = ''
      store.leftheader = true
    }
  render() {
    return (

      <View>
        <Card>
          <CardItem>
            <Icon name="ios-search" />
            <Input placeholder="Search for.." onChangeText={(text) => {this.setState({newtext:text})} }/>
          </CardItem>
        </Card>

      </View>
    );
  }
});
export default MySearch;











// {/* <Button  vertical>
//   <Link to="/profile">
//     <View>
//       <Icon name="person" />
//     </View>
//   </Link>
// </Button> */}

//<Icon ios='ios-menu'


// {/* <Button transparent vertical>
//   <View>
//     <Icon name="person" />
//   </View>
// </Button> */}
