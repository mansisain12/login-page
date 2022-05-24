import React from "react";
import { View,Text,TouchableOpacity, Alert, TouchableHighlight,StyleSheet } from "react-native";

class Methods extends React.Component{

    onPressButton(){
        Alert.alert("you tapped the button")
    }
    onLongPressButton(){
        Alert.alert("you long pressed the button")
    }



    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this.onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingTop:60,alignItems:"center"
    },
    button:{
        marginBottom:30,width:260,alignItems:"center",backgroundColor:"green"
    },
    buttonText:{
        padding:20,color:"white",fontSize:18
    }
})

export default Methods;