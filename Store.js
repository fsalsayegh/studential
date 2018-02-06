import { extendObservable } from 'mobx';
import { StyleSheet, Text, View ,ListView, Image} from 'react-native';

class myStore {

  constructor(){
    extendObservable(this, {
      header: "",
      authenticated: false,
      token:"",
      username: "",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !==row2
      }),
      name_icon:'',
      mainpage: false,
      headright: false,
      header:'',
      feedlist:[],
      check:"",
      leftheader: false,
      major:[
        { label: "Computer Engineering", value: "Computer Engineering"},
        { label: "Electrical Engneering", value: "Electrical Engineering"},
        { label: "Mechanical Engineering", value: "Mechanical Engineering"},
      ],
      selected: "",
      course:[
        { label: "Operating System" ,value:"Operating System"},
        { label: "Nano ", value: "Nano"},
        { label: "physics " ,value: "physics"},
      ],
      selectedItems: [],
      favorite:""



    })
  }
}
export default new myStore()
