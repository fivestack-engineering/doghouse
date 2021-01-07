import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";

type props = {
  callback: any;
  resetAnimation: boolean;
  animationCallback: any;
};

export const Dice: React.FC<props> = observer(
  (props: props): JSX.Element => {

    const [moveY, setMoveY] = useState(new Animated.Value(0));
    const [moveX, setMoveX] = useState(new Animated.Value(0));

    const startAnimation=()=>{
      Animated.timing(moveY,{
        toValue : 270,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
      Animated.timing(moveX,{
        toValue : -125,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    }

    const resetAnimation=()=>{
      Animated.timing(moveY,{
        toValue : 0,
        duration : 1000,
        easing: Easing.bezier(0.25,0.1,0.25,1),
        useNativeDriver: true,
      }).start();
      Animated.timing(moveX,{
        toValue : 0,
        duration : 1000,
        easing: Easing.bezier(0.25,0.1,0.25,1),
        useNativeDriver: true,
      }).start();
      props.animationCallback();
    }

    if (props.resetAnimation) {
      resetAnimation();
    }

    const animatedStyle = {
      transform: [
        { 
          translateY : moveY
        },
        {
          translateX: moveX
        }
      ],
     }

    return (
      <Animated.View
      style={[styles.container, animatedStyle]}
      >
        <TouchableOpacity
          style={styles.dice}
          onPress={() => {
            GameState.rollDice();
            startAnimation();
            props.callback();
          }}
        >
          <Text style={styles.diceText}>{GameState.dice + 1}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  diceText: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
