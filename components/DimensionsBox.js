import { Text, View, StyleSheet } from "react-native";

export default function DimensionsBox() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    padding: 20,
  
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
