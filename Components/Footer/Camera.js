// import React from 'react';
// import {TouchableOpacity,CameraRoll,ScrollView,StyleSheet, Text, View, Image,ListView } from 'react-native';
// import {Thumbnail,Button, Form, Input,Item, Left,Label,Icon,Header,Right,Grid,Col,Tabs,Tab,ListItem,Body} from 'native-base';
// import { Camera, Permissions,ImagePicker} from 'expo';
// import MyLogin from '../Registration_Forms/Tab_Login.js';
// import MySignup from '../Registration_Forms/Tab_Signup.js';
// import store from '../../Store';
// import { observer } from "mobx-react";
// import { Dropdown } from 'react-native-material-dropdown';
// import SelectMultiple from 'react-native-select-multiple'
//
//  const Cam = observer(class Cam extends React.Component {
//
//    constructor(){
//      super();
//      this.state ={
//      }
//    }
//
//    componentDidMount(){
//      let list =[];
//          fetch('http://127.0.0.1:8000/api/majorlist/').then(
//            (x) => x.json()
//          ).then(
//              (y) =>{
//             for(i=0; i< y.length; i++){
//               list.push({value: y[i].name})
//             }
//             store.majorlistdropdown = list
//          })
//       }
//
//       selectedItem(item){
//         store.selected = item
//         console.log("selected"+ store.selected)
//         }
//
// render(){
// // let list = [];
// //     fetch('http://127.0.0.1:8000/api/majorlist/').then(
// //       (x) => x.json()
// //     ).then(
// //         (y) =>{
// //        for(i=0; i< y.length; i++){
// //          list.push({value: y[i].name})
// //        }
// //     })
//   return(
//     <View>
//       <Dropdown label='Choose your major' data={store.majorlistdropdown} onChangeText={this.selectedItem.bind(this)}/>
//     </View>
//
//   )}
// })
// export default Cam;
//
//
//
//
//
// {/* <ListView dataSource={this.state.dataSource} renderRow={(item) =>
//     <View>
//       <Text>{item.id}</Text>
//     </View>
//   }/> */}
//
//
//
// //camera flip
// // state = {
// //     hasCameraPermission: null,
// //     type: Camera.Constants.Type.back,
// //   };
// //
// // async componentWillMount() {
// //  const { status } = await Permissions.askAsync(Permissions.CAMERA);
// //  this.setState({ hasCameraPermission: status === 'granted' });
// // }
// //
// //
// // render() {
// // const { hasCameraPermission } = this.state;
// //    if (hasCameraPermission === null) {
// //      return <View />;
// //    } else if (hasCameraPermission === false) {
// //      return <Text>No access to camera</Text>;
// //    } else {
// //      return (
// //        <View style={{ flex: 1 }}>
// //          <Camera style={{ flex: 1 }} type={this.state.type}>
// //            <View
// //              style={{
// //                flex: 1,
// //                backgroundColor: 'transparent',
// //                flexDirection: 'row',
// //              }}>
// //              <TouchableOpacity
// //                style={{
// //                  flex: 0.1,
// //                  alignSelf: 'flex-end',
// //                  alignItems: 'center',
// //                }}
// //                onPress={() => {
// //                  this.setState({
// //                    type: this.state.type === Camera.Constants.Type.back
// //                      ? Camera.Constants.Type.front
// //                      : Camera.Constants.Type.back,
// //                  });
// //                }}>
// //                <Text
// //                  style={{ fontSize: 18, marginBottom: 520, color: 'white' }}>
// //                  {' '}Flip{' '}
// //                </Text>
// //              </TouchableOpacity>
// //            </View>
// //          </Camera>
// //        </View>
// //  );
// // }
// // }
// // })
// // export default Cam;
//
//
//
//
//
//
//
//
// //another way to render a list when using renderRow
// // {/* <List dataArray={items}
// //   renderRow={(item) =>
// //     <ListItem avatar>
// //       <Left>
// //         <Thumbnail Circular size={80} source={{ uri: item.url }} />
// //       </Left>
// //       <Body>
// //         <Text>{item.name}</Text>
// //         <Text note> {item.note}</Text>
// //       </Body>
// //       <Right>
// //         <Text note>{item.time}</Text>
// //       </Right>
// //     </ListItem>
// //   }>
// //   </List> */}
