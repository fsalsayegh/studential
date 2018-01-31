import React from 'react';
import { StyleSheet, Text, View ,ListView, Image} from 'react-native';
import { Drawer,Card,CardItem,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import MyComment from './Comment.js';
import {Link} from 'react-router-native'


class MyItem extends React.Component {

 render() {
   return (
     <Card>
       <CardItem>
         <Left>
           <Thumbnail source={{uri: 'https://static.pexels.com/photos/248159/pexels-photo-248159.jpeg'}} />
           <Body>
             <Text>username: {this.props.item.username}</Text>
             <Text note>email: {this.props.item.email}</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem cardBody>
         <Image source={{uri: 'https://static.pexels.com/photos/248159/pexels-photo-248159.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
       <Left>
         <Button transparent>
           <Icon active name="thumbs-up" />
           <Text>12 Likes</Text>
         </Button>
       </Left>
       <Body>
            <Button transparent>
              <Link to="/z">
                <Icon active name="chatbubbles" />
              </Link>
              <Text>comments</Text>
            </Button>

       </Body>
       <Right>
         <Text>11h ago</Text>
       </Right>
     </CardItem>
   </Card>


   );
 }
}

export default MyItem;




// constructor(){
//   super();
//   this.state ={
//     name_user: "",
//     mess: [],
//     dataSource: new ListView.DataSource({
//       rowHasChanged:(row1, row2) => row1 !==row2
//     }),
//    }
// }

// submit(){
//   <Path exact path="/z" component={MyComment} />
// }
// submit(){
//   let x = this.state.mess;
//   x.push(this.state.name_user)
//   this.setState({mess: x,name_user: "",dataSource: this.state.dataSource.cloneWithRows(x)})
// }

// renderItem(x){
//  return(
//      <Text note>{x}</Text>
//  )
// }

//------------------------------------------------------------------------------------

// {/* <ListItem>
//   <Body>
//     <Text>username: {this.props.item.username}</Text>
//     <Text note>email: {this.props.item.email}</Text>
//     <Form>
//       <Input placeholder="nickname" value={this.state.name_user} onChangeText={(nickname) => this.setState({name_user: nickname})}/>
//       <Button transparent onPress={this.submit.bind(this)}>
//         <Icon name="chatboxes"/>
//       </Button>
//     </Form>
//
//   </Body>
//   <Right>
//     <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} />
//   </Right>
// </ListItem> */}



// {/* <ListItem avatar>
//   <Left>
//     <Thumbnail Circular size={80} source={{ uri: ’https://pbs.twimg.com/media/DT3zAZFW4AEwueG.jpg' }} />
//   </Left>
//   <Body>
//     <Text>Sara Alsayegh</Text>
//     <Text note> book for sell!</Text>
//   </Body>
//   <Right>
//     <Text note>3:43 pm</Text>
//   </Right>
// </ListItem> */}
// var list={
//   name:“fatma”,
//   age:“23"
// }
// items.push(list)
// username: {x.results.username} {" "}
// book: {x.results.book} {" "}
// feed: {x.results.feed} {" "}


// {/* <List dataArray={items}
//   renderRow={(item) =>
//     <ListItem avatar>
//       <Left>
//         <Thumbnail Circular size={80} source={{ uri: item.url }} />
//       </Left>
//       <Body>
//         <Text>{item.name}</Text>
//         <Text note> {item.note}</Text>
//       </Body>
//       <Right>
//         <Text note>{item.time}</Text>
//       </Right>
//     </ListItem>
//   }>
//   </List> */}




// constructor(){
//   super();
//   this.state ={
//     dataSource: new ListView.DataSource({
//       rowHasChanged:(row1, row2) => row1 !==row2
//     }),
//   }
// }
// componentWillMount(){
//   fetch('http://127.0.0.1:8000/api/list/').then(
//     (x) => x.json()
//   ).then(
//     (y) => this.setState({dataSource: this.state.dataSource.cloneWithRows(y.results)})
//   )
// }
// renderItem(x){
// return(
//   <ListItem avatar>
//       <Left>
//         <Thumbnail square size={80} source={{ uri: x.book }} />
//       </Left>
//       <Body>
//         <Text>{x.username}</Text>
//         <Text note>{x.feed}</Text>
//       </Body>
//       <Right>
//         <Text note>{x.timestamp}</Text>
//       </Right>
//     </ListItem>
// )
// }

// render() {
//   return (
//    <View>
//     <Form>
//       <Input placeholder="nickname"/>
//       <Button >
//         <Text>
//           submit
//         </Text>
//       </Button>
//     </Form>
//       <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} />
//  </View>
//   );
// }
