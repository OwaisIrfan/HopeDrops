import React from 'react';
import Alreadylogin from '../components/Alreadylogin';
import Home from './Home';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';





function Login(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
       
    <Image
    source={require("../../assets/images/bloodlogo.png")}
    resizeMode="contain"
    style={styles.image}
    ></Image>

<Text style={styles.signUp}>Sign Up</Text>
<Text style={styles.signptext}>It's easier to Sign up Now</Text>



<TouchableOpacity onPress={() => props.navigation.navigate("Detailssignup") }
 style={styles.jndtfrdh}>
   <FontAwesome5 style={styles.facebookicon} name={'facebook'} />
      <Text style={styles.button}>Continue with Facebook</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => props.navigation.navigate("Home")}
 style={styles.nfrgtnjrft}>
   <FontAwesome5 style={styles.gtnhjgtfrdhs} name={'phone-alt'} />
      <Text style={styles.gfnfgfgfnde}>Continue with GSM</Text>
</TouchableOpacity>


      <View style={styles.rvfenvn}>
<Text style={styles.alreadysigntext}>Already have account?</Text>

<TouchableOpacity>
  <Text style={styles.hsdeenhjnmr}>Login</Text>
</TouchableOpacity>
      </View>



  </View>
  </ScrollView>
  
  );
};


const styles = StyleSheet.create({

  facebookicon: {
    color: '#fff',
    fontSize: 27,
    
  },
  gtnhjgtfrdhs:{
    color: 'grey',
    fontSize: 16,
    
  },

  icon: {
    color: "#000",
    fontSize: 20,
  },

  gfnfgfgfnde: {
    color: "#000000",
    fontSize: 15,
    fontFamily: 'ProductSansRegular',
    marginLeft: 18
  },

  nfrgtnjrft: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    shadowRadius: 10,
    minWidth: 88,
    paddingLeft: 15,
    paddingRight: 16,
    height: 42,
    width: 230,
    
    borderWidth: 2,
    borderColor: "#b4b4b4",
    borderRadius: 100,
  },

  jndtfrdh: {
    height: 42,
    width: 270,
    
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,},
    shadowOpacity: 0.60,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "#5960ff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 10,
    paddingRight: 16,
    marginBottom: 10
  },

  
  rvfenvn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column",
    width: '100%',
    
    marginTop: 40
    
    

  },
  
  container: {
    width : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    paddingTop: 30
    
  
  },

  signptext:{
    
    fontFamily: 'ProductSansRegular',
    color: "#121212",
    fontSize: 14,
    marginBottom: 20
  },

 
  hsdeenhjnmr: {
    color: "#1687a7",
    fontSize: 15,
    fontFamily: 'ProductSansRegular',
    
    textDecorationLine: 'underline'
  },

  alreadysigntext:{
    
    fontFamily: 'ProductSansRegular',
    color: "#121212",
    fontSize: 14,
    height: 20,
    
  },

  signUp: {
    
    fontFamily: 'ProductSansRegular',
    color: "#121212",
    fontSize: 28,
    marginBottom: 5,
    marginTop: 10
  },

  image: {   
    width: 180,
    height : 180,
    
    
    
  },
 

button: {
  color: "#fff",
  fontSize: 15,
  fontFamily: 'ProductSansRegular',
  marginLeft: 21
},

  gfhtrh: {
    height: 42,
    width: 230,
    
    borderWidth: 2,
    borderColor: "#b4b4b4",
    borderRadius: 100,
    
  }

 
});

export default Login;
