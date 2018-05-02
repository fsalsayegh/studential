import React from 'react';
import {TouchableOpacity,CameraRoll,ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import {Thumbnail,Button, Form, Input,Item, Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab} from 'native-base';
import { Camera, Permissions,ImagePicker} from 'expo';
import MyLogin from '../Registration_Forms/Tab_Login.js';
import MySignup from '../Registration_Forms/Tab_Signup.js';
import store from '../../Store';
import { observer } from "mobx-react";

 const Img = observer(class Img extends React.Component {

   state = {
   image: null,
 };

   _pickImage = async () => {
     let result = await ImagePicker.launchImageLibraryAsync();

     console.log(result);
     if (!result.cancelled) {
       this.setState({ image: result.uri });
       CameraRoll.saveToCameraRoll(result.uri)
     }
   };


render() {
  let { image } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={this._pickImage} transparent>
            <Text>choose an image</Text>
          </Button>
          {image && <Thumbnail source={{ uri: image }} />}
        </View>
    </View>
    );
  }
})
export default Img;


// _handleButtonPress = () => {
// CameraRoll.getPhotos({
//     first: 20,
//     assetType: 'Photos',
//   })
//   .then(r => {
//     this.setState({photos: r.edges});
//   })
//   .catch((err) => {
//      //Error Loading Images
//   });
// };


{/* <ScrollView>
  <Image  style={{ width: 300, height: 100}} source={{uri: '/Users/fatmalsayegh/Desktop/splash.png'}} />
  <Image style={{ width: 300, height: 100}} source={{uri: '/Users/fatmalsayegh/Desktop/Social-Media-School-Students-Reporters.png'}} />
</ScrollView> */}


{/* <View>
  <Button title="Load Images" onPress={this._handleButtonPress} />
  <ScrollView>
   {this.state.photos.map((p, i) => {
   return (
     <Image key={i} style={{height: 200, width: 200, flex: 1 ,resizeMode: "contain"}} source={{ uri: p.node.image.uri }}/>
    );
  })}
</ScrollView>
</View> */}
