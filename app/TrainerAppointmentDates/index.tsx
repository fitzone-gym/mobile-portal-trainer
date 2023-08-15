import * as React from "react";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Stack, useRouter } from "expo-router";


/*import footer */
import BottomNav from "../../components/BottomNav/index.tsx";
import AppBar from "../../components/AppBar/index.tsx";
import styles from "../../styles/trainer-appointment-dates.style";

import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";




export default function appointments() {
  /*for routing*/
  const router = useRouter();  
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "",
          //   headerLeft: null,
        }}
        
      />
      <AppBar/>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/hero-image1.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.content}>
              <View>
                <Text style={styles.appointmentPageHeading}>Appointments</Text>
              </View>
              <View style={styles.appointmetDetailButtonsSection}>
                <View style={styles.appointmentDetails}>
                  <View style={styles.individualDetail}>
                    <Text style={styles.detailText}>Today</Text>
                    <Text style={styles.detailText}>appoint:</Text>
                    <Text style={styles.detailTextQty}>6</Text>
                  </View>
                  <View style={styles.individualDetail}>
                    <Text style={styles.detailText}>Remaining</Text>
                    <Text style={styles.detailText}>appoint:</Text>
                    <Text style={styles.detailTextQty}>6</Text>
                  </View>
                  <View style={styles.individualDetail}>
                    <Text style={styles.month}>July</Text>
                    <Text style={styles.date}>14</Text>
                    <Text style={styles.year}>2023</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.calenderView}></View>

          <View style={styles.footerSection}>
           <BottomNav />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
