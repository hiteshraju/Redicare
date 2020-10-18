import React , {useEffect, useState} from 'react';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';

import { NavigationContainer, HeaderBackButton } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator , View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SettingsStack = createStackNavigator();

const Route = () => {

    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function setToken() {
        try {
          token = await AsyncStorage.getItem('usertoken');
          //alert(token);
          console.log(token);
          setUserToken(token);
          setLoading(false);
        } catch(e) {
          console.log(e);
        }
      }  
      setToken();
    }, []);
  
    if(loading) {
      if (userToken) {
        return <Splash/>;
      }
      else {
        return(
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large"/>
          </View>
        );
      }
    }
  
    return (
      <NavigationContainer>
        { userToken == null ? (
          <SettingsStack.Navigator screenOptions={{
            headerShown: false,
          }}>
          <SettingsStack.Screen name="Splash" component={Splash} />
          <SettingsStack.Screen name="Login" component={Login} />
          <SettingsStack.Screen name="Home" component={Home}/>
          </SettingsStack.Navigator> ):
          <SettingsStack.Navigator screenOptions={{headerShown: false,}}>
          <SettingsStack.Screen name="Home" component={Home}/>
          <SettingsStack.Screen name="Login" component={Login} />
          </SettingsStack.Navigator>
        }
      </NavigationContainer>
  );
};
export default Route;