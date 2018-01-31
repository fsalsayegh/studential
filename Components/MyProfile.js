import React from 'react';
import { Picker,StyleSheet, Text, View } from 'react-native';
import { Image,CardItem,Card,Input,Form,List,Body,ListItem,Thumbnail,Container,Content,Header,Footer,HeaderTab,Left,Right,Button,Icon } from 'native-base';

class MyProfile extends React.Component {
  constructor(){
    super();
    this.state ={
      language:[]

    }
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png'}} />
              <Body>
                <Text>   Books   Groups   Following   Followers   </Text>
                <Text>      3             2             14               20   </Text>
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
                <Text>                                  biography   </Text>
                  <Text>
                    {" "}
                  </Text>
                <Text> Major: </Text>

                <Form>
                  <Picker selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                      <Picker.Item label="Java"  />
                      <Picker.Item label="JavaScript"  />
                      <Picker.Item label="hhhh"  />
                    </Picker>
                  </Form>

                  <Text>
                    {" "}
                  </Text>
                <Text> Year: </Text>
                  <Text>
                    {" "}
                  </Text>
                <Text> Uni: </Text>
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
                  <Text>                                  contributions   </Text>
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
}


export default MyProfile;
