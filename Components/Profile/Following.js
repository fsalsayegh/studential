import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { iconRight,Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../../Store.js'
import MyFollowingList from './FollowingList.js';
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
// import MyTest from './Test';
import {Link,NativeRouter,Route} from 'react-router-native'


const MyFollowing = observer(class MyFollowing extends React.Component {
  constructor(){
    super();
    this.state ={
      followinglist:[
        {
          username: "fatmalsayegh",
          url: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg',
          followed: true
        },
        {
          username: "william",
          url: 'http://7.s.dziennik.pl/pliki/5654000/5654760-mezczyzna.jpg',
          followed: true
        },
        {
          username: "james",
          url: 'https://www.bme.cornell.edu/engineering/customcf/iws_ai_faculty_display/ai_images/caa238-profile.jpg',
          followed: true
        },
      ],

    }
  }


componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Following List'
    store.leftheader = true
  }




  // if (!list[i].followed){
  //   this.setState({buttoncolorgreen :  false})
  //   this.setState({buttontext: "Follow"})
  //   this.setState({buttoncolored :  true})
  // }else{
  //   this.setState({buttoncolorgreen :  true})
  //   this.setState({buttontext: "UnFollow"})
  //   this.setState({buttoncolored :  false})
  // }


  render() {
    console.log(this.state.followinglist);
    return (
      <View>
        <FlatList data={this.state.followinglist} renderItem={({item}) => <MyFollowingList item={item}/>
          } />
      </View>
    );
  }
});
export default MyFollowing;
