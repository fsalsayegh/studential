import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { iconRight,Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
import MyTest from './Test';
import {Link,NativeRouter,Route} from 'react-router-native'

const MyFollowing = observer(class MyFollowing extends React.Component {
  constructor(){
    super();
    this.state ={
      followinglist:[
        {username: "fatmalsayegh",url: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg'},
        {username: "william",url: 'http://7.s.dziennik.pl/pliki/5654000/5654760-mezczyzna.jpg'},
        {username: "james", url: 'https://www.bme.cornell.edu/engineering/customcf/iws_ai_faculty_display/ai_images/caa238-profile.jpg'},
      ],
      buttoncolorgreen: true,
      buttoncolored: false,
      buttontext: "UnFollow"

    }
  }


componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Following List'
    store.leftheader = true
  }


  changeMe(){
    if ((this.state.buttoncolorgreen === true) && (this.state.buttontext==="UnFollow")){
      this.setState({buttoncolorgreen :  false})
      this.setState({buttontext: "Follow"})
      this.setState({buttoncolored :  true})
    }else{
      this.setState({buttoncolorgreen :  true})
      this.setState({buttontext: "UnFollow"})
      this.setState({buttoncolored :  false})


    }
  }


  render() {

    return (
      <View>
        <FlatList data={this.state.followinglist} renderItem={({item}) =>
          <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.url}} />
                  <Text>  {item.username}</Text>
                <Body>
                  <Button style={{alignSelf: 'flex-end' }} onPress={this.changeMe.bind(this)} success={this.state.buttoncolorgreen} danger={this.state.buttoncolored}>
                    <Text style={{ fontWeight: "bold", color: "white"}}>{this.state.buttontext}</Text>
                  </Button>
                </Body>
                </Left>
              </CardItem>
            </Card>

          } />
      </View>
    );
  }
});
export default MyFollowing;

// {/* <Card>
//     <CardItem>
//       <Left>
//         <Thumbnail source={{uri: 'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_960.jpg?1508330040'}} />
//         <Text> fatmalsayegh</Text>
//       <Body>
//         <Button style={{alignSelf: 'flex-end' }} onPress={this.changeMe.bind(this)} success={this.state.buttoncolorgreen} danger={this.state.buttoncolored}>
//           <Text style={{ fontWeight: "bold", color: "white"}}>{this.state.buttontext}</Text>
//         </Button>
//       </Body>
//       </Left>
//     </CardItem>
//   </Card> */}
