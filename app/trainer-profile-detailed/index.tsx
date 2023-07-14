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
import styles from "../../styles/trainerProfileDetail.style";
import Unorderedlist from "react-native-unordered-list";
import { Stack as MuiStack } from "@mui/material";
import Button from "@mui/material/Button";
import {Stack} from "expo-router";

const TrainerProfileDetailed = () => (
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
            <Text style={styles.ProfilePageHeading}>Profile</Text>
          </View>

          <View style={styles.trainerDetailsSection}>
            <View style={styles.trainerDetails}>
              <View>
                <Image
                  source={require("../../assets/images/trainer-1.jpg")}
                  style={styles.trainerImage}
                />
              </View>

              <View>
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

            <View style={styles.profileDetailsButton}>
              <MuiStack spacing={2} direction="row">
                <Button
                  variant="contained"
                  style={styles.fillRedBtn}
                >
                  Workout Shedule
                </Button>
                <Button variant="outlined" style={styles.fillWhiteBtn}>
                  Diet Plan
                </Button>
              </MuiStack>
            </View>
        </View>

        <View>
            <Text style={styles.workoutProgressTopic}>Workout progress</Text>
            <View style={styles.workoutProgressArea}>

            </View>
        </View>
        </View>
      </ImageBackground>
    </ScrollView>
  </SafeAreaView>
);

export default TrainerProfileDetailed;