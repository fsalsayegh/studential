import { extendObservable } from 'mobx';

class myStore {

  constructor(){
    extendObservable(this, {
      header: "",
      authenticated: false,
      token:"",
      username: "",
      
    })
  }
}
export default new myStore()
