import React from "react";
import { View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

// const theme = {
//   ...DefaultTheme,
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "#6200ea", // Set your primary color for the dark theme
//     background: "#121212", // Set your background color for the dark theme
//     surface: "#121212", // Set your surface color for the dark theme
//     text: "#ffffff", // Set your text color for the dark theme
//   },
// };

export default function MyComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          style={{ backgroundColor: "#E54646", height: 58, borderRadius: 20 }}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={color}
                style={{ color: "white" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          //   tabBarLabel: "file",

          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                name="file"
                size={size}
                color={color}
                style={{ color: "white" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          //   tabBarLabel: "chat",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                name="chat"
                size={size}
                color={color}
                style={{ color: "white" }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          //   tabBarLabel: "profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon
                name="account-circle"
                size={size}
                color={color}
                style={{ color: "white" }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function Chat() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
