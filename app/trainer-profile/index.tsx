import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import Unorderedlist from "react-native-unordered-list";
import styles from "../../styles/trainerProfile.style";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import Button from '@mui/material/Button';


const TrainerProfile = () => (
  <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        title: "",
        headerLeft: null,
      }}
    />

    <ScrollView style={styles.back}>
      <ImageBackground
        source={require("../../assets/images/hero-image1.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.pageHeading}>Hire trainer</Text>
          </View>
          <View style={styles.profile}>
            <View>
              <Image
                source={require("../../assets/images/trainer-1.jpg")}
                style={styles.trainerImage}
              />
            </View>
            <View style={styles.trainerDetails}>
              <Unorderedlist style={styles.detailsList}>
                <Text>
                  <Text style={styles.detailsKey}>Name</Text>
                  <Text style={styles.detailsValue}>Anne Karona</Text>
                </Text>
                <Text>
                  <Text style={styles.detailsKey}>Age</Text>
                  <Text style={styles.detailsValue}>25</Text>
                </Text>
                <Text>
                  <Text style={styles.detailsKey}>Gender</Text>
                  <Text style={styles.detailsValue}>Male</Text>
                </Text>
                <Text>
                  <Text style={styles.detailsKey}>Mobile Number</Text>
                  <Text style={styles.detailsValue}>071-4554455</Text>
                </Text>
                <Text>
                  <Text style={styles.detailsKey}>Email</Text>
                  <Text style={styles.detailsValue}>Ann@gmail.com</Text>
                </Text>
              </Unorderedlist>
            </View>
          </View>
        </View>

        <View style={styles.trainerPackage}>
          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                1 Month package
                <Text style={styles.packagePrice}>18 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>1 Yoga pass</Text>
                <Text style={styles.detail}>1 Full body massage</Text>
                <Text style={styles.detail}>1 Foot massage</Text>
                <Text style={styles.detail}>Kitchen</Text>
                <Text style={styles.detail}>Washing room</Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                6 Month plan
                <Text style={styles.packagePrice}>64 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>2 Yoga pass</Text>
                <Text style={styles.detail}>2 Full body massage</Text>
                <Text style={styles.detail}>3 foot massage</Text>
                <Text style={styles.detail}>3 steam spa</Text>
                <Text style={styles.detail}>Kitchen</Text>
                <Text style={styles.detail}>Washing room</Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                Annual paln
                <Text style={styles.packagePrice}>95 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>4 Yoga pass</Text>
                <Text style={styles.detail}>4 Full body massage</Text>
                <Text style={styles.detail}>5 foot massage</Text>
                <Text style={styles.detail}>5 steam spa</Text>
                <Text style={styles.detail}>Pool Pass</Text>
                <Text style={styles.detail}>Kitchen</Text>
                <Text style={styles.detail}>Washing room</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View>
        <Button variant="contained" color="error" style={styles.hireBtn}>
          Hire Now
        </Button>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default TrainerProfile;
