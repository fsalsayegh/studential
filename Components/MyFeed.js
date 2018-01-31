import React from 'react';
import { StyleSheet, Text, View ,ListView, Image} from 'react-native';
import { Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import MyItem from './MyItem';
import { observer } from "mobx-react";
import store from '../Store';

const MyFeed = observer(class MyFeed extends React.Component {
 // constructor(){
 //   super();
 //   this.state ={
 //     dataSource: new ListView.DataSource({
 //       rowHasChanged:(row1, row2) => row1 !==row2
 //     }),
 //   }
 // }

 componentWillMount(){
   store.mainpage = true
   store.headright = true
   fetch('https://jsonplaceholder.typicode.com/users').then(
     (x) => x.json()
   ).then(
     (y) => {
       store.dataSource = store.dataSource.cloneWithRows(y)

   })
}


 render() {
   return (
    <View>
       <ListView dataSource={store.dataSource} renderRow={(item) => <MyItem item={item}/>} />
  </View>
   );
 }
});
export default MyFeed;


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
