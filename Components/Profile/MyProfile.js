import React from 'react';
import { FlatList,Picker,StyleSheet, Text, View } from 'react-native';
import { Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../../Store.js'
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';
// import MyTest from './Test';
import {Link,NativeRouter,Route} from 'react-router-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const MyProfile = observer(class MyProfile extends React.Component {
  constructor(){
    super();
    this.state ={

    }
  }


componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Profile'
    store.leftheader = true
  }

  // <Text>   Books   Groups   Following   Followers   </Text>
  // <Text>      3             2             14               20   </Text>

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Thumbnail source={{uri: 'https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png'}} />
              <View style={{marginLeft: 20}}>
                <Button transparent>
                  <Text> Books {'\n'}
                              {""} {""}{""} {""}{""} {""}{""} {""}3
                  </Text>
                </Button>
              </View>

              <View>
                <Button transparent>
                  <Text> Groups {'\n'}
                       {""} {""}{""} {""}{""} {""}{""} {""}{""} {""}2
                  </Text>
                </Button>
              </View>

              <View >
                <Button transparent>
                  <Link to="/Following">
                    <Text> Following {'\n'}
                         {""} {""}{""} {""}{""} {""}{""} {""}{""} {""}{""}{""}{""}3
                    </Text>
                  </Link>
                </Button>
              </View>

              <View>
                <Button transparent>
                  <Text> Followers {'\n'}
                     {""} {""}{""} {""}{""} {""}{""} {""}{""} {""}14
                  </Text>
                </Button>
              </View>
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
                <Text style={{textAlign: "center"}}>Biography</Text> <Text>{" "}</Text>
                  <Text>Major: {store.selected} </Text> <Text>{" "}</Text>
                  <Text>Courses: </Text><FlatList data={store.selectedItems} renderItem={({item}) => <Text>{item.label}</Text>} /> <Text>{" "}</Text>
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
