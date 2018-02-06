import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
import MyTest from './Test';
import {Link,NativeRouter,Route} from 'react-router-native'

const MyProfile = observer(class MyProfile extends React.Component {
  constructor(){
    super();
    this.state ={
      // year:[
      //   { value: "Freshman"},
      //   { value: "Sophomore"},
      //   { value: "Junior"},
      //   { value: "Senior"},
      // ],
    }
  }


componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Profile'
    store.leftheader = true
  }

  
  render() {

    return (
      <View>

        <Card>
          <CardItem>
              <Thumbnail source={{uri: 'https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png'}} />
              <Body>
                <Text>   Books   Groups   Following   Followers   </Text>
                <Text>      3             2             14               20   </Text>
              </Body>

          </CardItem>
          <CardItem cardBody>
            <Button transparent >
              <Link to="/EditProfile">
            <Text style={{color: "gray"}}> Edit Profile </Text>
            </Link>
            </Button>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text style={{textAlign: "center"}}>Biography</Text>
                  <Text>
                    {" "}
                  </Text>

                    <Text>Major: {store.selected} </Text>

                  <Text>
                    {" "}
                  </Text>
                  <Text>Courses: </Text><FlatList data={store.selectedItems} renderItem={({item}) => <Text>{item.label}</Text>} />
                  <Text>
                    {" "}
                  </Text>
                <Text> Uni: AUM</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>

          </CardItem>
        </Card>
        </View>
    );
  }
});


export default MyProfile;

// onValueChange(itemValue, itemIndex){
//   // let x = this.state.language;
//   this.setState({major: itemValue})
//   console.log(this.state.major)
// }


{/* <Text>      3             2             14               20   </Text> */}
// {/* <Picker  mode="dropdown" placeholder="Select One" selectedValue={this.state.category} onValueChange={this.onValueChange.bind(this)}>
//   <Picker.Item label="Computer Engneering" value="Computer Engneering" />
//   <Picker.Item label="Electrical Engneering" value="Electrical Engneering" />
//   <Picker.Item label="Mechanical Engneering"  value="Mechanical Engneering"/>
// </Picker> */}
