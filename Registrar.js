import React from 'react';
import { StyleSheet,Text,  View ,  TextInput,TouchableOpacity} from 'react-native';
import {firebaseAuth} from './FireBase';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Autenticar extends React.Component {
   state= {usuario:'', password:''}
    
  
  send = ()=>{
        const email = this.state.usuario;
        const password = this.state.password;
         firebaseAuth.createUserWithEmailAndPassword(email, password).then(function(accept){
             console.warn(accept); 
         }).catch(function(error) {
             console.warn(error);
      });

  }
   render() {    
     
     return (
             
             <View  style={styles.container} >
                <Text>Registrar Nuevo Usuario</Text>
               <TextInput style={styles.input} 
               placeholder="Usuario"
               onChangeText={(user)=>this.setState({usuario:user})} />
             <TextInput style={styles.input} 
               placeholder="Password"
               onChangeText={(pass)=>this.setState({password:pass})} />
               <TextInput style={styles.input} 
               placeholder="Repeat Password"
                />
               <TouchableOpacity onPress={this.send} >
            <Icon name="location-arrow" size={30} color="gray" /> 
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

