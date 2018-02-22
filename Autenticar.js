import React from 'react';
import { StyleSheet,Text,  View ,  TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {firebaseAuth} from './FireBase';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Autenticar extends React.Component {
   state= {usuario:'', password:''}
    
    send = ()=>{
        Actions.registrar();
    }
    
    autenticar= ()=>{
        const email = this.state.usuario;
        const password = this.state.password;
        firebaseAuth.signInWithEmailAndPassword(email, password)
                .then(function(accept){
                    console.warn(accept); 
                })
                .catch(function(error) {
          console.warn(error);
      });
    }
  
   render() {    
     
     return (
         
             <View  style={styles.container} >
               <TextInput style={styles.input} 
               placeholder="Usuario"
               onChangeText={(user)=>this.setState({usuario:user})} />
             <TextInput style={styles.input} 
               placeholder="Password"
               onChangeText={(pass)=>this.setState({password:pass})} />
               <TouchableOpacity onPress={this.autenticar} >
            <Icon name="location-arrow" size={30} color="gray" /> 
                </TouchableOpacity>
                
                 <TouchableOpacity onPress={this.send} >
                 <Text>Registrar </Text>
                </TouchableOpacity>
            </View>         
     
         
  
    );
  }
}
const styles = StyleSheet.create({

  container: {

      marginTop:50,
      flex:1
  },
  

});

