import { View, Text, StyleSheet } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 60,
  },
  title: {
    color: "white",
  },
});
