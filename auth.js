import {observer} from 'mobx-react';
import {AsyncStorage} from 'react-native';
import store from './Store';

const auth = observer(new class auth {
  login(username,password){
    this.getToken(username,password)
  }
  logout(){
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('username')
    store.authenticated = false
    store.token = ""
    store.username = ""
  }

  //(x) => store.token = x) ... x represents the result inside token
  firstLoad() {
      AsyncStorage.getItem('token').then((x) =>{
        store.token = x
        if (x !== null){
          store.authenticated = true
        }
      })
    AsyncStorage.getItem('username').then((x)=>store.username = x )
  }

  //(err,result) => a function with 2 parameters and result represent whatever inside token
  // loggedIn(){
  //   AsyncStorage.getItem('token', (err,result) => {
  //     if (!err && result != null){
  //       return true
  //     }
  //     else {
  //       return false
  //     }
  //   })
  // }
  signup(username,password,email,major,course){
    fetch("http://127.0.0.1:8000/api/signup/", {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
     },
     body: JSON.stringify({
       "username": username,
       "password": password,
       'email': email,
       'major': major,
       'course': course,
     })}
   ).then(function(res) {
     //console.log(username,password,email,major,course)
     // console.log(course);
     console.log(res);
     this.getToken(username,password)
     console.log(res.username)
   }.bind(this)).catch((error) => console.log(error)).done();

  }

  getToken(username,password){
     fetch("http://127.0.0.1:8000/api/signin/", {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      })}
    ).then((res) =>{
      if (res.status == '200' ||res.status == '201' ){
         return res.json()
      }
    else { alert('something wronge happend')}
  })
    .then((res) => {
      store.authenticated = true
      store.token = res.token
      store.username = res.username
      AsyncStorage.setItem('token', res.token);
      AsyncStorage.setItem('username', res.username);
      console.log(username,password);
      console.log(res)
      //alert(res.username)

    }).catch((error) => console.log(error)).done();
  }
})
export default auth;
