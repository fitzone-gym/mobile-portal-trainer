import styles from "../../styles/footer.style";
// import { Stack as MuiStack } from "@mui/material";
// // import Button from "@mui/material/Button";
// import AddHomeIcon from "@mui/icons-material/AddHome";
// import ChatIcon from "@mui/icons-material/Chat";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Icon from "react-native-vector-icons/MaterialIcons";


import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { Stack } from "expo-router";

export default function Footer() {
  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.footerBtns}>
          <Text style={styles.footericon}>
            <Icon name="home" size={23} />
          </Text>
          <Text style={styles.footericon}>
            <Icon name="note" size={22} style={{ paddingTop: 10 }} />
          </Text>
          <Text style={styles.footericon}>
            <Icon name="message" size={22} style={{ paddingTop: 10 }} />
          </Text>
          <Text style={styles.footericon}>
            <Icon name="account-circle" size={23} />
          </Text>
        </View>
      </View>
    </View>
  );
}

