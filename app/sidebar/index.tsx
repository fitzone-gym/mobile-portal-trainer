// import styles from "../styles/sidebar.style";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddHomeRoundedIcon from "@mui/icons-material/AddHomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import WidgetsIcon from "@mui/icons-material/Widgets";

import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

  const iconMap = {
    Home: <AddHomeRoundedIcon />,
    Members: <PeopleAltRoundedIcon />,
    Appointment: <BookOnlineRoundedIcon />,
    Unknown: <FactCheckRoundedIcon />,
    Dietplan: <FavoriteRoundedIcon />,
    Payment: <PaymentRoundedIcon />,
    Complaint: <ThreePOutlinedIcon />,
    Myprofile: <AccountCircleRoundedIcon />,
    Logout: <ExitToAppIcon />,
  };

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <View
      style={{
        backgroundColor: "balck",
        height: "100%",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
          backgroundColor: "#E54646",
          height: "100%",
          paddingTop: 5,
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <View style={styles.backBtn}>
          <ArrowCircleLeftRoundedIcon />
        </View>
        <View style={styles.logUserDetail}>
          <View>
            <Image
              source={require("../../assets/images/trainer-1.jpg")}
              style={styles.logUserImage}
            />
          </View>
          <View style={styles.logUserName}>
            <Text style={styles.nameText}>Kamal</Text>
            <Text style={styles.nameText}>Suraweera</Text>
          </View>
        </View>
        <List>
          {["Home", "Members", "Appointment", "Unknown"].map((text, index) => (
            <TouchableOpacity>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white", fontWeight: "bold" }}>
                  {iconMap[text]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{ color: "white", fontWeight: "bold" }}
                />
              </ListItemButton>
            </ListItem>
            </TouchableOpacity>
          ))}
        </List>
        <Divider />
        <List>
          {["Dietplan", "Payment", "Complaint", "Myprofile"].map(
            (text, index) => (
              <TouchableOpacity>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "white", fontWeight: "bold" }}>
                    {iconMap[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
              </TouchableOpacity>
            )
          )}
        </List>

        <List style={styles.logout}>
          {["Logout"].map((text, index) => (
            <TouchableOpacity>
              <ListItem key={text} disablePadding style={styles.listItem}>
                <ListItemButton>
                  <ListItemIcon style={{ color: "white", fontWeight: "bold" }}>
                    {iconMap[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            </TouchableOpacity>
          ))}
        </List>
      </Box>
    </View>
  );

    const styles = StyleSheet.create({
      backBtn: {
        color: "white",
        marginLeft: "78%",
      },
      logUserDetail: {
        flexDirection: "row",
        flexWrap: "wrap",
        spacing: 10,
        backgroundColor: "#000000c0",
        marginLeft: 10,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        borderRadius: 30,
      },
      logUserImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#E54646",
      },
      logUserName: {
        marginLeft: 20,
        justifyContent: "center",
      },
      nameText: {
        color: "white",
        fontWeight: "bold",
      },
      listItemName: {
        color: "white",
      },
      logout:{
        marginTop:"100%"
      }
    });

  return (
    <View>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <WidgetsIcon
              style={{
                color: "#E54646",
                padding: 10,
                backgroundColor: "#000000c0",
                borderRadius:25
              }}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </View>
  );
}


