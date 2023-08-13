import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { React, Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      goldPrice: 0,
    };
  }

  getGoldPrice = async () => {
    var price = await fetch("http://192.168.1.19:8082/getGoldPrice")
      .then((response) => response.json())
      .then((data) => this.setState({ goldPrice: data.goldPrice }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    console.log("Getting Gold Price");
    this.getGoldPrice();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Current Gold Price : {"\u20B9"}
          {this.state.goldPrice}
        </Text>
        <View style={{ margin: 10 }}></View>
        <Button title="Get Latest Price" onPress={() => this.getGoldPrice()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
