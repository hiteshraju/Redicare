import React , {useEffect, useState} from 'react';
import { Text , View , TouchableOpacity, StatusBar , Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const New = () =>{



    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otp, setotp] = useState(null);
    const [value, setcode] = useState('');

    // state = {otp : []};

    function reload()
    {
        axios.get("http://redicare.space/rcd/api/ios_token_otp.php?ios_token="+token).then(response => {
            const data = response.data
            setotp(data.otp);
            });
            //alert("Hello");
    }
  
    useEffect(() => {
      async function setToken() {
        try {
          token = await AsyncStorage.getItem('usertoken');
          //alert(token);
         // console.log("Second");
          //console.log(token);
          setUserToken(token);
          setLoading(false);


        // axios.get("http://redicare.space/rcd/api/ios_token_otp.php?ios_token="+token).then(response => response.data) 
        // setotp(data.otp);

        axios.get("http://redicare.space/rcd/api/ios_token_otp.php?ios_token="+token).then(response => {
            const data = response.data
            setotp(data.otp);
            });
           

                    

        // axios.get("http://redicare.space/rcd/api/ios_token_otp.php?ios_token="+token).then(response => setotp(response.data));
        // code = otp.otp ;
        // console.log(code);
        // setcode(code);
        //console.log(code)

        } catch(e) {
          console.log(e);
        }
      }  
      setToken();
    }, []);


    return(
        
        <View style={styles.card}>
            <StatusBar backgroundColor={'#FFF'}  barStyle="dark-content"></StatusBar>
                <View style={styles.div1} >
                    <Text style={styles.text}> Your OTP is : </Text>
                    <Text style={styles.code}>{otp}</Text>
                </View>
                <View style={styles.div2} >
                    <Text style={styles.note}> Welcome To Redicare CD19 Application. Thanks for subscribing with Mobile OTP for Redicare CD19. You will receive OTP in your mobile also as Notification, whenever you try to login </Text>
                </View>
                <View style={styles.div2} >
                    <View style={styles.button}>
                        <TouchableOpacity onPress={reload}  style={styles.getstarted} >
                            <Text style={styles.buttonText}>Refresh Code</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Note : Refresh when already using an App.</Text>
                    </View>
                </View>
        </View>
    );
};

const styles = {

    card:{
        padding:15,
        margin:5,
        marginTop:10,
        marginBottom:1,
        backgroundColor:'#FFF',
        flexDirection:'column',
        flex:1,
        borderRadius:5
    },

    div1:{
        flex:2,
        flexDirection:'row'
    },
    div2:{
        flex:3,
        flexDirection:'column',
    },

    details:{
        paddingLeft:10,
        textAlign:'center',
        flexDirection:'row'
    },

    orderdetails:{
        fontSize:12,
        fontFamily:'Montserrat-Medium',
        paddingLeft:10,
        paddingTop:25,
        color:'#00336F'
    },
    date:{
        fontSize:34,
        textAlign:'center',
        fontFamily:'Montserrat-Medium',
        color:'#00336F',
        paddingTop:8,
        paddingLeft:10
    },
    note:{
        fontSize:15,
        fontFamily:'Montserrat-Medium',
        paddingLeft:10,
        paddingTop:45,
        color:'#00336F',
        textAlign:'center'
    },
    logout:{
        alignSelf: 'stretch',
        height:50,
        backgroundColor:'#589507',
        borderRadius:5,
        marginTop:50,
        flex:1,
        color:'#000'
    },
    getstarted:{
        alignSelf: 'stretch',
        height:50,
        backgroundColor:'#00336F',
        borderRadius:5,
        marginTop:10
       
    },
    buttonText:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:15,
        color:'#FFF',
        fontFamily:'Montserrat-Regular',
    },
    text:{
        fontSize:15,
        fontFamily:'Montserrat-Medium',
        paddingLeft:10,
        paddingTop:45,
        color:'#00336F'
    },
    code:{
        fontSize:45,
        fontFamily:'Montserrat-Medium',
        paddingLeft:10,
        paddingTop:25,
        color:'#00336F'
    }



};

export default New;

