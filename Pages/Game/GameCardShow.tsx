import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Cards, Button } from "../../components";

function GameCardShow() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Reset"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Game" }],
          });
        }}
      ></Button>
      <Text>Dice Roll</Text>
      <Cards navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default GameCardShow;