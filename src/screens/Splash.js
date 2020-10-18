import React from 'react';
import { Button, View, Text , Image , Dimensions , StatusBar , Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

function SplashScreen({ navigation }) {
  return (
    <View style={styles.mainstyles}>
    <StatusBar backgroundColor={'#FFF'}  barStyle="dark-content"></StatusBar>
        <View style={styles.header}>
            <Text style={styles.headerText}>Redicare</Text>
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.text}>Welcome to Redicare</Text> 
            <Text style={styles.text}>SignIn with your Account Details</Text>
            <View style={styles.button}>
            <TouchableOpacity style={styles.getstarted} onPress = {() => navigation.navigate('Login')} >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Avail your Push Notifications here</Text>

            </View>
        </Animatable.View>
    </View>
  );
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.18;
const styles = 
{
    header: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo :{
        width:'100%',
        height:150,
    },
    footer: {
        flex: 1,
        backgroundColor: '#00336F',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text:{
        color:'#FFF',
        marginTop:7,
        fontFamily:'Montserrat-Medium',
        fontSize:14
    },
    mainstyles:{
        flex:1,
        backgroundColor: '#fff'
    },
    headerstyles:{
        flex:1,
        margin:10
    },
    imagestyles:{
        width: 150, 
        height: 150, 
        borderRadius: 200/ 2,
        marginLeft:'30%',
        marginTop:'10%'
    },
    footerstyles:{
        flex:1,
        margin:10
    },
    getstarted:{
        alignSelf: 'stretch',
        height:50,
        backgroundColor:'#FFF',
        borderRadius:5,
        marginTop:10
       
    },
    buttonText:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:15,
        color:'#00336F',
        fontFamily:'Montserrat-Medium',
    },
    headerText:{
        color:'#00336F',
        fontSize:48,
        textAlign:'center'
    },
    logostyles:{
        width: height_logo,
        height: height_logo
    },
    tagline:{
        fontSize:18
    },
    caption:{
        color:'#589507',
        fontSize:20,
        fontFamily:'Montserrat-Medium',
    }
};
export default SplashScreen;