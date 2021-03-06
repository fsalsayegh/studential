import React from 'react';
import { StyleSheet, Text, View ,ListView, Image,FlatList} from 'react-native';
import {Drawer,Card,CardItem,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon
} from 'native-base';

import MyComment from './Comment.js';
import {Link} from 'react-router-native'
import store from '../../Store.js'
import { observer } from "mobx-react";
import MyFavorite from './MyFavorite.js';
import MyCreate from '../Header/MyCreate.js';

const MyItem = observer(class MyItem extends React.Component {
  constructor(){
    super();
    this.state ={
      boolenStar:false,

     }
  }

  active(){
    let x = this.state.boolenStar;

    if (x === false){
      this.setState({boolenStar:true})
    }else{
      this.setState({boolenStar:false})
    }
  }

  // let y = this.props.item
  // let z ={
  //   username: y.username
  //   favorite: y
  // }

 render() {

   if(this.state.boolenStar === true){
     store.favorite.push(this.props.item.username)
   }

   return (
     <View>
       <Card>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: 'https://static.pexels.com/photos/248159/pexels-photo-248159.jpeg'}} />
             <Body>
               <Text style={{fontWeight: 'bold'}}>username: {this.props.item.username}</Text>
               <Text>{ "" }</Text>
             </Body>
             <Button transparent>
               <Link to="/detail">
                  <Text>detail</Text>
               </Link>
             </Button>
           </Left>
         </CardItem>

         <CardItem cardBody>
           <Image size={30} source={{uri: 'https://media.wiley.com/product_data/coverImage300/55/11180937/1118093755.jpg'}} style={{height: 200, width: 200, flex: 1 ,resizeMode: "contain"}}/>
         </CardItem>

         <CardItem>
           <Text style={{fontWeight: 'bold' }}>Caption:  </Text><Text>operating system book</Text>
         </CardItem>

         <CardItem>
           <Text style={{fontWeight: 'bold' }}>Major: </Text><Text>{store.selected}</Text>
         </CardItem>

         <CardItem>
           <Text style={{fontWeight: 'bold'}}>Courses: </Text><FlatList data={store.selectedItems} renderItem={({item}) => <Text>{item.label}</Text>} />
         </CardItem>

         <CardItem>
           <Left>
             <Button transparent onPress={this.active.bind(this)}>
               <Icon active={this.state.boolenStar} name="star" />
               <Text> favorite</Text>
             </Button>
           </Left>

           <Body>
             <Button transparent>
               <Link to="/z">
                  <Icon  name="chatbubbles" />
               </Link>
               <Text>comments</Text>
             </Button>
           </Body>

           <Right>
             <Button transparent>
               <Icon name="cart"/>
               <Text> Add Cart</Text>
             </Button>
           </Right>
         </CardItem>
       </Card>
     </View>
   );
 }
});
export default MyItem;


//<Text note>email: {this.props.item.email}</Text>

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

//another way to render a list when using renderRow
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
