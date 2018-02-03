import React from 'react';
import { Picker,StyleSheet, Text, View } from 'react-native';
import { Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';
import store from '../Store.js'
import { observer } from "mobx-react";
import { Dropdown } from 'react-native-material-dropdown';

const MyProfile = observer(class MyProfile extends React.Component {
  constructor(){
    super();
    this.state ={
      major:[
        { value: "Computer Engneering"},
        { value: "Electrical Engneering"},
        { value: "Mechanical Engneering"}
      ],
      year:[
        { value: "Freshman"},
        { value: "Sophomore"},
        { value: "Junior"},
        { value: "Senior"},
      ]

    }
  }


  // onValueChange(itemValue, itemIndex){
  //   // let x = this.state.language;
  //   this.setState({major: itemValue})
  //   console.log(this.state.major)
  // }

  componentWillMount(){
    store.mainpage = false
    store.headright = false
    store.header = 'Profile'
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
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text style={{textAlign: "center"}}>biography</Text>
                  <Text>
                    {" "}
                  </Text>

                    <Dropdown label='Major' data={this.state.major}/>

                  <Text>
                    {" "}
                  </Text>
                  <Dropdown label='Year' data={this.state.year}/>
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



          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{textAlign: "center"}}>contributions</Text>
                    <Text>
                      {" "}
                    </Text>

                </Body>
              </Left>
            </CardItem>

          </Card>
        </View>
    );
  }
});


export default MyProfile;




{/* <Text>      3             2             14               20   </Text> */}
// {/* <Picker  mode="dropdown" placeholder="Select One" selectedValue={this.state.category} onValueChange={this.onValueChange.bind(this)}>
//   <Picker.Item label="Computer Engneering" value="Computer Engneering" />
//   <Picker.Item label="Electrical Engneering" value="Electrical Engneering" />
//   <Picker.Item label="Mechanical Engneering"  value="Mechanical Engneering"/>
// </Picker> */}
