import styles from "../../styles/footer.style";
import { Stack as MuiStack } from "@mui/material";
// import Button from "@mui/material/Button";
import AddHomeIcon from "@mui/icons-material/AddHome";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { Stack } from "expo-router";

export default function Footer() {
  return (
    <View>
      <View style={styles.footer}>
        <MuiStack spacing={5} direction="row">
            <Text style={styles.footericon}>
            <AddHomeIcon />
            </Text>
            <Text style={styles.footericon}>
            <ChatIcon />
            </Text>
            <Text style={styles.footericon}>
            <AccountCircleOutlinedIcon />
            </Text>
        </MuiStack>
      </View>
    </View>
  );
}

