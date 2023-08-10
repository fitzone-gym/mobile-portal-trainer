import React from 'react';
import styles from "../../styles/footer.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Button
} from "react-native-paper"


import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { Stack ,useRouter} from "expo-router";

export default function Footer() {
  const router = useRouter() 
  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.footerBtns}>
          
          <Text style={styles.footericon}>
          <Button  mode="contained" onPress={() => {
            router.push('/TrainerDashboard')
                }}>
                <Icon name="home" size={23} />
          </Button>            
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

