import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { AuthContext } from "../components/context";

const Sidebar = ({ navigation }) => {
  // const paperTheme = useTheme();

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    container: {
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
    },
    logUserImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: "#E54646",
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingBottom: 7,
      backgroundColor: "#000000c0",
      marginTop: 10,
      marginLeft: 10,
      marginRight: 200,
      borderRadius: 50,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: "bold",
      color: "white",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: "#e8e3e3",
    },
    row: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 15,
    },
    paragraph: {
      fontWeight: "bold",
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: "#f4f4f4",
      borderTopWidth: 1,
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  return (
    <View
      style={{ flex: 1, backgroundColor: "#E54646", borderRightTopRadius: 15 }}
    >
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={require("../../assets/images/trainer-1.jpg")}
                style={styles.logUserImage}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              // onPress={() => {
              //   props.navigation.navigate("Home");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Members"
              // onPress={() => {
              //   props.navigation.navigate("Profile");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Appoinments"
              // onPress={() => {
              //   props.navigation.navigate("BookmarkScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="file-document-outline" color={color} size={size} />
              )}
              label="Requests"
              // onPress={() => {
              //   props.navigation.navigate("SettingsScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Complaints"
              // onPress={() => {
              //   props.navigation.navigate("SupportScreen");
              // }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-circle-outline" color={color} size={size} />
              )}
              label="My profile"
              // 
              
            />
            {/* </Drawer.Section> */}
          </View>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}> */}
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          // onPress={() => {
          //   signOut();
          // }}
        />
        {/* </Drawer.Section> */}
      </View>
    </View>
  );
};

// export default DrawerContent;
export default Sidebar;
