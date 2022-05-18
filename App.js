import React from "react";
import { View, Text, Button, TextInput, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={{ padding: 50, backgroundColor: "lightgreen", height: 900 }}>

      <Image source={require('./assets/grocery1.jpeg')} style={{ width: 150, height: 150, marginLeft: 70 }} />
      <Text style={{ textAlign: "center", fontSize: 25 }}>Welcome back!</Text>
      <TextInput placeholder="eg:example@gmail.com" style={{ margin: 12, borderWidth: 2, height: 35, borderRadius: 15 }}></TextInput>
      <TextInput placeholder="Password" keyboardType="numeric" style={{ margin: 12, borderWidth: 2, borderRadius: 15, height: 35 }} />
      <Text style={{ textAlign: "center" }}> Forgot Password? </Text>
      <Text>{"\n"}</Text>
      <Button title="Login"></Button>
      <Text>{"\n"}</Text>
      <Text style={{ fontWeight: "600" }}>_________________OR_________________</Text>
      <Text>{"\n"}</Text>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600" }}>Continue with</Text>
      <Text>{"\n"}</Text>
      <View style={styles.container}>
        <Button title="Facebook" style={styles.button}></Button>
        <Button title="Google" style={styles.button}></Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "blue",
    width: "40%",
    height: 40,
  }
})
export default App;