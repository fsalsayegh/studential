import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { iconRight,Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../../Store.js'
import { observer } from "mobx-react";


const MyFollowingList = observer(class MyFollowingList extends React.Component {

componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Following List'
    store.leftheader = true
  }


  changeMe(){

    let list = this.props.item;
    list.followed = !list.followed
    console.log(list);
    this.setState({list: list})
  }

  render() {
return (
      <Card>
        <CardItem>
            <Left>
              <Thumbnail source={{uri: this.props.item.url}} />
              <Text>  {this.props.item.username}</Text>
              <Text>  {this.props.item.followed}</Text>
            <Body>
              <Button style={{alignSelf: 'flex-end' }} onPress={this.changeMe.bind(this)} success={!this.props.item.followed} danger={this.props.item.followed}>
                <Text style={{ fontWeight: "bold", color: "white"}}>{this.props.item.followed ? 'Unfollow' : 'Follow'}</Text>
              </Button>
            </Body>
        </Left>
      </CardItem>
    </Card>
    );
  }
});
export default MyFollowingList;


//{/* <Card>
    // <CardItem>
    //   <Left>
    //     <Thumbnail source={{uri: item.url}} />
    //     <Text>  {item.username}</Text>
    //     <Text>  {item.followed}</Text>
    //   <Body>
    //     <Button style={{alignSelf: 'flex-end' }} onPress={this.changeMe.bind(this, item.username)} success={!item.followed} danger={item.followed}>
    //       <Text style={{ fontWeight: "bold", color: "white"}}>{item.followed ? 'Unfollow' : 'Follow'}</Text>
    //     </Button>
    //   </Body>
    //   </Left>
    // </CardItem>
  //</Card> */}
