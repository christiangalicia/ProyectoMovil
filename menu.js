import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import HomeView from './HomeVIew';
import ArtistDetail from './ArtistDetail';
import Autenticar from './Autenticar';
import Registrar from './Registrar';
export default class Menu extends React.Component {

    render() {
        return (
                <View style={styles.container}>   
                    <Router>
                        <Scene key="root" hideNavBar={true}>
                            <Scene key="login">
                                <Scene key="autenticar" component={Autenticar}   hideNavBar={true} />
                                <Scene key="registrar" component={Registrar} />       
                
                            </Scene>
                            <Scene key="apphome">
                                <Scene key="home" component={HomeView}   hideNavBar={true} />
                                <Scene key="artistView" component={ArtistDetail} />       
                
                            </Scene>
                
                        </Scene>
                    </Router>
                </View>

                );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 25,
    }

});


