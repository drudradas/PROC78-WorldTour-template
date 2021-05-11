import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TextInput, 
    StyleSheet, 
    Platform, 
    StatusBar, 
    ImageBackground 
} from 'react-native';


export default class WorldMap extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
       

        return (
            <View style={{ flex: 1, backgroundColor: "#A8DADC" }}>
              
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <Text style={styles.titleText}>World Map</Text>
                    
                    
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})