import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Content,Header,Footer,Button, Icon, FooterTab, Left,Right } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import MyForm from './MyForm';
import MyFeed from './MyFeed';
import MyComment from './Comment.js';
import MyProfile from './MyProfile.js';
import store from '../Store';
import { observer } from "mobx-react";

const MyFooter= observer(class MyFooter extends React.Component {


  render() {
    return (
      <NativeRouter>
        <Container>
          <Content>
            <Route exact path="/" component={MyFeed}/>
            <Route exact path="/x" component={MyForm}/>
            <Route exact path="/z" component={MyComment}/>
            <Route exact path="/profile" component={MyProfile}/>
          </Content>

          <Footer>
            <FooterTab>
              <Button  vertical>
                <Link to="/">
                  <View>
                      <Icon name="home" />
                  </View>
                </Link>
              </Button>

                <Button  vertical>
                  <Link to="/x">
                    <View>
                      <Icon name="apps" />
                    </View>
                  </Link>
                </Button>

                <Button  vertical>
                  <Link to="/profile">
                    <View>
                      <Icon name="person" />
                    </View>
                  </Link>
                </Button>

            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>

    );
  }
});
export default MyFooter;

//<Icon ios='ios-menu'



// {/* <Button transparent vertical>
//   <View>
//     <Icon name="person" />
//   </View>
// </Button> */}
