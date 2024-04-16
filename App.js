import { View, Text, StyleSheet, Dimensions } from "react-native";
import DimensionsBox from "./components/DimensionsBox";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
        <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,

    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    padding: 20,
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 500 ? "60%" : "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: windowWidth > 500 ? 24 : 50,
  },
});
