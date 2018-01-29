import React from 'react';
import { ListView,StyleSheet, Text, View } from 'react-native';
import { Right,Input,Container,Content,Header,Footer,HeaderTab,Left,Button,Icon } from 'native-base';


class MyComment extends React.Component {
  constructor(){
    super();
    this.state ={
      name_user: "",
      mess: [],
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !==row2
      }),
     }
  }

  submit(){
    let x = this.state.mess;
    x.push(this.state.name_user)
    this.setState({mess: x,name_user: "",dataSource: this.state.dataSource.cloneWithRows(x)})
  }

  renderItem(x){
   return(
       <Text note>{x}</Text>
   )
  }

  render() {
    return (
          <View>
            <Input placeholder="add a comment" value={this.state.name_user} onChangeText={(nickname) => this.setState({name_user: nickname})}/>
            <Button onPress={this.submit.bind(this)}>
              <Text>comment</Text>
            </Button>
            <Right>
                 <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} />
            </Right>
          </View>
    );
  }
}

export default MyComment;
