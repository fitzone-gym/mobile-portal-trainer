import * as React from "react";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";



const theme = {
  dark: true,
  colors: {
    primary: "white", // Modify the primary color to your preference
    background: "blue", // Modify the background color to your preference
    surface: "#121212", // Modify the surface color to your preference
    text: "red", // Modify the text color to your preference
  },
};

const MyComponent = () => (
  <Appbar.Header theme={theme} style={{display:"flex", gap:240}}>
    <Appbar.Action
      icon="menu"
      color="red"
      onPress={() => {}}
      style={{ backgroundColor: "#383838" , marginLeft:20}}
    />
    <Appbar.Action
      icon="bell-outline"
      color="red"
      onPress={() => {}}
      style={{ backgroundColor: "#383838"}}
    />
  </Appbar.Header>
);

export default MyComponent;
