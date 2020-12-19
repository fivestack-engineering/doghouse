import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { SelectedPack } from "../components";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { AvailablePack } from "./AvailablePack";

export const Packs: React.FC = observer(
  (): JSX.Element => {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Selected Packs:</Text>
          <ScrollView
            style={styles.selectedPackContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {GameState.cardPacks.map((val, ind) => (
              <SelectedPack name={val.name} key={ind}></SelectedPack>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text2}>Packs:</Text>
          <ScrollView
            contentContainerStyle={styles.packSelectionContainer}
            showsVerticalScrollIndicator={false}
          >
            {GameState.cardPacks.map((val, ind) => (
              <AvailablePack name={val.name} key={ind}></AvailablePack>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: { flex: 24 },
  container2: { flex: 76 },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  text2: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
    marginTop: 14,
  },
  selectedPackContainer: { flexDirection: "row" },
  packSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
