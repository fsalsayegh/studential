import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Input,Item,Button,Label,Icon,Grid,Tabs,Tab } from 'native-base';
import { observer } from "mobx-react";
import auth from '../auth';
import store from '../Store';
import { Dropdown } from 'react-native-material-dropdown';
import SelectMultiple from 'react-native-select-multiple'

const MySignup = observer(class MySignup extends React.Component {
  constructor() {
        super();
        this.state = {
           username: '',
           password: '',
           inputSuccess:'',
           inputSuccess2:'',
           name_user: 'close-circle',
           name_pass:'close-circle',
           email:'',


         };
    }


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

    alert_signup(){
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
      }else{
        store.check=true

      }
    }
    // auth.signup(username,password,email,major,course)

    //when the user selects or de-selects an item
    onSelectionsChange(selectedItems){
    //selectedItems is array of { label, value }
    store.selectedItems = selectedItems
    console.log(selectedItems)
  }

  selectedItem(item){
    store.selected = item
    console.log("selected"+ store.selected)
    }


  render() {
    //let variable= Object.values(store.major)
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

        <View className='Email-input'>
        <Label stackedLabel style={{fontSize: 15, fontWeight: 'bold', marginLeft: 20, marginRight: 20}}>Email</Label>
        <Item  regular style={{marginLeft: 20, marginRight: 20}}>
          <Input  style={{fontSize: 12}}  placeholder='Please enter your email' onChangeText={(email)=> this.setState({email: email}) } />
        </Item>
      </View>

        <Text>
          {" "}
        </Text>

        <View className='password-input'>
          <Label stackedLabel style={{fontSize: 15,fontWeight: "bold", marginLeft: 20, marginRight: 20}}> Password</Label>
          <Item style={{marginLeft: 20, marginRight: 20}} success={this.state.inputSuccess2 ? true : false} error={this.state.inputError ? true : false}  regular>
            <Input secureTextEntry style={{fontSize: 12}} placeholder="Please enter your password" onChangeText={this.changeMePass.bind(this)} />
            <Icon name={this.state.name_pass}/>
          </Item>
        </View>

          <Text>
            {" "}
          </Text>

        <View className='major-input' style={{marginLeft: 20, marginRight: 20}}>
          <Label style={{fontSize: 15,fontWeight: "bold"}} stackedLabel> Major</Label>
            <Dropdown  label='Choose your major' data= {store.major} onChangeText={this.selectedItem.bind(this)} />
        </View>

        <View className='Course-input' style={{marginLeft: 20, marginRight: 20}}>
          <Label style={{fontSize: 15,fontWeight: "bold"}}> Course</Label>
          <SelectMultiple items={store.course} selectedItems={store.selectedItems} onSelectionsChange={this.onSelectionsChange.bind(this)} />
        </View>

        <View className='Signup-button'>
        <Button color='#ff5c5c' style={{marginTop: 20, marginLeft: 20, marginRight: 20}} borderd block onPress={this.alert_signup.bind(this)}>
          <Text style={{color: "white" ,fontFamily: 'Verdana'}}>Signup</Text>
        </Button>
      </View>
    </View>
    );
  }
});
export default MySignup;
