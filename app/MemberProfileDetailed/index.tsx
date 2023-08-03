import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/memberProfileDetail.style";
import Unorderedlist from "react-native-unordered-list";
import { Stack, useRouter } from "expo-router";
import Footer from "../FooterStatusbar/index.tsx"

export default function memberProfileDetailed() {
  const router = useRouter();
  return (
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

            <View style={styles.memberDetailsSection}>
              <View style={styles.memberDetails}>
                <View>
                  <Image
                    source={require("../../assets/images/trainer-1.jpg")}
                    style={styles.memberImage}
                  />
                </View>

                <View>
                  {/* <Unorderedlist style={styles.detailsList}> */}
                    <View style={styles.profileDetail}>
                      <View>
                        <Text>
                          <Text style={styles.detailsKey}>Name</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsKey}>Age</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsKey}>Gender</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsKey}>Mobile Number</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsKey}>Email</Text>
                        </Text>
                      </View>

                      <View>
                        <Text>
                          <Text style={styles.detailsValue}>Anne Karona</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>25</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>Male</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>071-4554455</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>Ann@gmail.com</Text>
                        </Text>
                      </View>
                    </View>
                  {/* </Unorderedlist> */}
                </View>
              </View>

              <View >
                <View style={styles.profileDetailsButton}>
                  <TouchableOpacity
                    variant="contained"
                    style={styles.fillRedBtn}
                    onPress={() => {
                      router.push("/WorkoutShedule");
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Workout Shedule
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    variant="outlined"
                    style={styles.fillWhiteBtn}
                  >
                    <Text style={{ color: "#E54646", fontWeight: "bold" }}>
                      Diet Plan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.workoutProgressTopic}>Workout progress</Text>
              <View style={styles.workoutProgressArea}>
                <Text style={styles.detailsValue}> progress</Text>
              </View>
            </View>

            <View>
              <Text style={styles.workoutProgressTopic}>Dieting progress</Text>
              <View style={styles.workoutProgressArea}>
                <Text style={styles.detailsValue}> progress</Text>
              </View>
            </View>

            <View>
              <Text style={styles.workoutProgressTopic}>Health & Injuries</Text>
              <View style={styles.healthDetail}>
                <View style={styles.individualHealthDetails}>
                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Sugar level</Text>
                    <Text style={styles.healthLevel}> 220</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Cholestrol level</Text>
                    <Text style={styles.healthLevel}> 220</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Blood preasure</Text>
                    <Text style={styles.healthLevel}> 220</Text>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.workoutProgressArea}>
                  <Text style={styles.detailsValue}> Injuries</Text>
                </View>
              </View>

              <View>
                <Text style={styles.workoutProgressTopic}>
                  Supplimentery protine
                </Text>
                <View style={styles.workoutProgressArea}>
                  <Text style={styles.detailsValue}> progress</Text>
                </View>
              </View>

              <View style={styles.footerSection}>
                <Footer />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memberProfileDetailed;