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
      headright: false



    })
  }
}
export default new myStore()
