import React, {Component} from 'react';
import {View,TextInput,Text, StyleSheet} from 'react-native';

const myStyle = StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    fontSize:24,
    color:'green'
  }
});


export class MyComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return <View>
      <Text>{this.props.name}</Text>
    </View>
  }
}


export default class App extends Component{
  constructor(props){
    super(props);
    console.log("constructor called");
  }

  render(){
    return <View style={myStyle.viewStyle}>
      <Text style={myStyle.textStyle}>Hello World</Text>
      <MyComponent name="My Custom Component loaded" />
    </View>
  }
}