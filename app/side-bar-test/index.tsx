import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Sidebar } from "../sidebar/index.tsx";

const Drawer = createDrawerNavigator();

const SidebarTest = () => {
  // State to manage the visibility of the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />}
        // Pass the sidebarOpen state as a prop to the Sidebar component
        screenOptions={{
          drawerOpenRoute: "DrawerOpen",
          drawerCloseRoute: "DrawerClose",
          drawerToggleRoute: "DrawerToggle",
          drawerStyle: { width: sidebarOpen ? 200 : 0 },
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          itemStyle: { marginVertical: 0 },
        }}
        drawerType="front"
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Add more screens here */}
      </Drawer.Navigator>

      {/* Button to toggle the sidebar */}
      <TouchableOpacity
        onPress={toggleSidebar}
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        <Text>Toggle Sidebar</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

// Example HomeScreen component
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default SidebarTest;
