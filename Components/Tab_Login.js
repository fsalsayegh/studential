import React from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';
import { Thumbnail,Form, Input,Item,Button,Label,Icon,Grid,Tabs,Tab} from 'native-base';
import auth from '../auth';
import store from '../Store';
import { observer } from "mobx-react";

const MyLogin = observer (class MyLogin extends React.Component {
  constructor() {
        super();
        this.state = {
           username: '',
           password: '',
           inputSuccess:'',
           inputSuccess2:'',
           name_user: 'close-circle',
           name_pass: 'close-circle'

         };
    }

    alertlogin(){
      let username = this.state.username;
      let password = this.state.password;

      if((password.length < 7) && (username.length < 3)){
        alert("The password and the username are short")
      }
      else if (username.length < 3){
        alert("The username is short")
      }else if (password.length < 7){
        alert("The password is short")
      }else if (username.length === ""){
        alert("The username is empty")
      }else {
        store.check=true

      }
    }
    // auth.login(username,password)

    changeMeUser(username){

      if(username.length >= 3){
        this.setState({inputSuccess: true})
        this.setState({name_user: 'ios-checkmark-circle'})
      }else if(username.length < 3){
        this.setState({inputSuccess: false})
        this.setState({name_user: 'close-circle'})
      }
      this.setState({username: username})
    }

    changeMePass(password){

      if(password.length < 7){
        this.setState({inputSuccess2: false})
        this.setState({name_pass: 'close-circle'})
      }else if(password.length >= 7){
        this.setState({inputSuccess2: true})
        this.setState({name_pass: 'ios-checkmark-circle'})
      }
      this.setState({password: password}) //used as ref to take the value

    }

  componentWillMount(){
      store.mainpage = false
      store.headright = false
      store.leftheader = true
    }

  render() {
    return (
      <View>
        <View className='username-input'>
          <Label stackedLabel style={{fontSize: 15, fontWeight: "bold", marginLeft: 20, marginRight: 20}}> Username</Label>
          <Item success={this.state.inputSuccess ? true : false}  regular style={{marginLeft: 20, marginRight: 20}}>
            <Input  style={{fontSize: 12}} value={this.state.username} placeholder="Please enter your username" onChangeText={this.changeMeUser.bind(this)} />
            <Icon name={this.state.name_user}/>
          </Item>
        </View>

        <Text>
          {" "}
        </Text>

        <View className='password-input'>
          <Label stackedLabel style={{fontSize: 15,fontWeight: "bold", marginLeft: 20, marginRight: 20}}> Password</Label>
          <Item style={{marginLeft: 20, marginRight: 20}} success={this.state.inputSuccess2 ? true : false} regular>
            <Input secureTextEntry style={{fontSize: 12}} placeholder="Please enter your password" onChangeText={this.changeMePass.bind(this)} />
            <Icon name={this.state.name_pass}/>
          </Item>
          <Button color='#ff5c5c' style={{marginTop: 20, marginLeft: 20, marginRight: 20}} borderd block  onPress={this.alertlogin.bind(this)}>
             <Text style={{color: "white", fontFamily: 'Verdana'}}>Login</Text>
          </Button>
        </View>
        <Text style ={{marginTop: 100, marginLeft:160, fontWeight: "bold"}}>
          Studential {'\n'}{'\n'}
          <Thumbnail source={{uri: '/Users/fatmalsayegh/Desktop/splash.png'}} />
        </Text>
    </View>

    );
  }
});

export default MyLogin;

{/* <Image source={{uri: '/Users/fatmalsayegh/Desktop/ff87e203183f06807353568b23080139--wallpapers-iphone--abstract-wallpaper.jpg'}} style={{flex:1 ,alignSelf: 'stretch',width: null, position: 'fixed'}}>
</Image> */}
