import React, { useState } from "react";
import { Button, BigButton, Logo, Main, Spike, Timer } from "../../components";

function HomeScreen({ navigation }: any) {
  const [show, setShow] = useState(false);
  return (
    <Main navigation={navigation}>
      {show ? (
        <Timer
          visible={true}
          callback={() => {
            setShow(false);
          }}
        />
      ) : null}
      <Spike />
      <Logo />
      <BigButton
        title="PLAY"
        onPress={() => navigation.navigate("GameSetup")}
      />
      <Button title="PACKS" onPress={() => navigation.navigate("Settings")} />
      <Button title="TEST" onPress={() => setShow(true)} />
    </Main>
  );
}

export default HomeScreen;
