import React,{Component} from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';
import{createAppContainer} from 'react-native'
import{createStackNavigator} from 'react-navigation-stack'

class App extends React.Component{
  render(){
    return(
      <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:80}}> Home Screen</Text>
        <Button>
          onPress={()=>{this.props.navigation.navigate('myprofile')}}
          title="go to profile screen"
        </Button>
      </View>
    );
  }
}

function profile(props)
{
  return(
    <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:80}}> profile Screen</Text>
    <Button>
          onPress={()=>{props.navigation.navigate('Home')}}
          title="go to profile screen" </Button>
  </View>
  )
}

const appNavigator=createStackNavigator({
  Home:{
    screen:App,
  },
  myprofile:{
    screen:profile
  }
})

export default App;