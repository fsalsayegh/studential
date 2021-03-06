import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from './Components/Registration_Forms/MyForm.js';
import { Container,Content,Header,Footer, Drawer,FooterTab,Button,Icon } from 'native-base';
import SideBar from './Components/Drawer/MenuItem';
import MyHeader from './Components/Header/MyHeader.js';
import { observer } from "mobx-react";
import auth from './auth';
import store from './Store';
import {Link,NativeRouter,Route} from 'react-router-native'
import MyFeed from './Components/Feed/MyFeed';
import MyComment from './Components/Feed/Comment.js';
import MyProfile from './Components/Profile/MyProfile.js';
import MyMessage from './Components/Footer/Chat/MyMessage.js';
import MyCreate from './Components/Header/MyCreate.js';
import MyFavorite from './Components/Feed/MyFavorite.js';
import EditProfile from './Components/Profile/EditProfile.js';
import MyFollowing  from './Components/Profile/Following.js';
import MySearch  from './Components/Header/MySearch.js';
import MyDetail  from './Components/Feed/Detail.js';
import Img from './Components/Footer/CameraRoll.js';
import Cam from './Components/Footer/Camera.js';

export default observer(class App extends React.Component {
  closeDrawer(){
    this.drawer._root.close()
  };

  openDrawer(){
    this.drawer._root.open()
    console.log("hhh")
  };

  render() {
    return (
      <NativeRouter>
        <Container>
          <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={(<SideBar navigator={this.navigator} closeDrawer={() => this.closeDrawer.bind(this)} />)}
            onClose={() => this.closeDrawer()}>

          <MyHeader openDrawer={this.openDrawer.bind(this)}/>
          <Container>
            <Content>
              {store.check ? <Route exact path="/" component={MyFeed}/> : <Route exact path="/" component={MyForm}/> }
              <Route exact path="/z" component={MyComment}/>
              <Route exact path="/profile" component={MyProfile}/>
              <Route exact path="/message" component={MyMessage}/>
              <Route exact path="/add" component={MyCreate}/>
              <Route path ="/myfav" component={MyFavorite}/>
              <Route path='/EditProfile' component={EditProfile}/>
              <Route path='/Following' component={MyFollowing}/>
              <Route path='/MySearch' component={MySearch}/>
              <Route path='/detail' component={MyDetail}/>
              <Route path='/person' component={Img}/>
              {/* <Route path='/eye' component={Cam}/> */}

            </Content>

            <Footer>
              <FooterTab>
                <Button  vertical transparent>
                  <Link to="/">
                    <View>
                        <Icon name="home" />
                        <Text  style={{marginLeft: 10}}>Home</Text>
                    </View>
                  </Link>
                </Button>

                  <Button  vertical transparent>
                    <Link to="/MySearch">
                      <View>
                        <Icon name="search" />
                        <Text  style={{marginLeft: 10}}>Search</Text>
                      </View>
                    </Link>
                  </Button>

                  <Button  vertical transparent>
                    <Link to="/message">
                      <View>
                         <Icon name="chatbubbles" />
                         <Text  style={{marginLeft: 10}}>Chat</Text>
                       </View>
                     </Link>
                   </Button>

                   <Button  vertical transparent>
                     <Link to="/person">
                       <View>
                          <Icon name="person" />
                        </View>
                      </Link>
                    </Button>

                    <Button  vertical transparent>
                      <Link to="/eye">
                        <View>
                           <Icon name="eye" />
                         </View>
                       </Link>
                     </Button>

              </FooterTab>
            </Footer>
          </Container>
        </Drawer>
      </Container>
    </NativeRouter>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// {store.check ? <Route exact path="/" component={MyFeed}/> : <Route exact path="/" component={MyForm}/> }
