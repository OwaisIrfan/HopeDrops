import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import PickerInput from '../components/PickerInput'



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
  TextInput
  
  
} from 'react-native';
import { Container, Header, Content, Form, Item,  Label, Picker } from 'native-base';



function Detailssignup(props) {


  

  return(
<ScrollView>
<View style={styles.container1}>


<View style={styles.nmjijiqwig} >
  <Text style={styles.jwvnvnm}>First Name:</Text> 
  <TextInput style={styles.vsbfbsvhje} placeholder="e.g. Jhon" />
</View>
<View style={styles.nmjijiqwig} ><Text style={styles.jwvnvnm}>Last Name:</Text><TextInput style={styles.vsbfbsvhje} placeholder="e.g. Smith" leftIcon={{ type: 'font-awesome', name: 'comment' }} /></View>


<View style={styles.nmjijiqwig} ><Text style={styles.jwvnvnm}>Age:</Text><TextInput style={styles.vsbfbsvhje} placeholder="16+" /></View>
<View style={styles.nmjijiqwig} ><Text style={styles.jwvnvnm}>Location:</Text><TextInput style={styles.vsbfbsvhje} placeholder="Karachi" /></View>
<View style={styles.nmjijiqwig} ><Text style={styles.jwvnvnm}>Gender:</Text><TextInput style={styles.vsbfbsvhje} placeholder="Male/Female" /></View>





<TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("Home")}
 style={styles.jndtfrdh}>
   <FontAwesome5 style={styles.facebookicon} name={'arrow-right'} />
      <Text style={styles.button}>Next</Text>
</TouchableOpacity>



</View> 
</ScrollView>




  );
};


const styles = StyleSheet.create({


  button: {
    color: "#fff",
    fontSize: 16,
    position: 'absolute',
    bottom: 15,
    left: 30,
  },

  facebookicon: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    right: 30,
  },


  jndtfrdh: {
    height: 50,
    width: 120,
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
    backgroundColor: "#ff5e78",
    justifyContent: "center",
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
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 40,
    marginBottom: 30
  },

  jwvnvnm: {
    fontSize: 18,
    marginLeft: 5,
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular'
  },

  nmjijiqwig:{
    width: '90%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent : 'center',
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5
  },


  vsbfbsvhje:{
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#b4b4b4",
    paddingLeft: 20,
    paddingTop: 13,
    marginBottom: 10,
    marginTop: 10
  },
  


  container1: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    paddingBottom: 30,
    paddingTop: 30
  },

});

export default Detailssignup;