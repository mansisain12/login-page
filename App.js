import React from "react";
import { View, Text, Button, TextInput, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <View style={styles.view}>
      <Text>{"\n"} {"\n"} {"\n"} {"\n"}</Text>
        <Image source={require('./assets/grocery.png')} style={{ width: 200, height: 50, marginLeft: 45 }} />
        <Text style={styles.text}>Welcome back!  {"\n"}</Text>
        <TextInput placeholder="eg:example@gmail.com" style={styles.placeholder}></TextInput>
        <TextInput placeholder="Password" keyboardType="numeric" style={styles.placeholder}></TextInput>
        <Text style={{ textAlign: "center",color:"lightgreen" }}>{"\n"} Forgot Password? </Text>
        <Text>{"\n"}</Text>
        <Button title="Login"></Button>
        <Text>{"\n"}</Text>
        <Text style={{ fontWeight: "600" }}>_________________OR_________________</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.login}>Continue with</Text>
        <Text>{"\n"}</Text>
        <View style={styles.container}>
          <Image source={require('./assets/facebook.jpeg')} style={styles.image} />
          <Image source={require('./assets/google1.jpeg')} style={styles.image} />
        </View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  view: {
    padding: 50,height: 900
  },
  text: {
    textAlign: "center", fontSize: 20,fontWeight:"700"
  },
  placeholder:
  {
    margin: 12, borderWidth: 2, height: 35,backgroundColor:"white",
    borderColor:"white",
    borderBottomColor:"lightgreen",
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    Color: "green",
    width: "40%",
    height: 40,
  },
  login: {
    textAlign: "center", fontSize: 18, fontWeight: "600"
  },
  image: {
    width: 115, height: 40,borderWidth:2,borderColor:"grey"
  }
})
export default App;