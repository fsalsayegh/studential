import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from './Components/MyForm.js';
import { Container,Content,Header,Footer } from 'native-base';
import MyFooter from './Components/MyFooter.js';
import MyHeader from './Components/MyHeader.js';
import { observer } from "mobx-react";
import auth from './auth';
import store from './Store';

export default observer(class App extends React.Component {
  render() {
    return (

      <Container>
        <MyHeader />
        <MyFooter />
      </Container>
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
