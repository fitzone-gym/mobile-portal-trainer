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
import { Stack } from "expo-router";
import Unorderedlist from "react-native-unordered-list";
import styles from "../../styles/trainerProfile.style";
import Footer from "../footer_statusbar/index.tsx";

const details = [
  { key: "Name", value: "Anne Karona" },
  { key: "Age", value: "25" },
  { key: "Gender", value: "Male" },
  { key: "Mobile Number", value: "071-4554455" },
  { key: "Email", value: "Ann@gmail.com" },
];

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
              {/* <Unorderedlist style={styles.detailsList}> */}
              <Text style={styles.individualDetailSet}>
                <Text style={styles.detailsKey}>
                  Name&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.detailsValue}>Anne Karona</Text>
              </Text>
              <Text style={styles.individualDetailSet}>
                <Text style={styles.detailsKey}>
                  Age&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.detailsValue}>25</Text>
              </Text>
              <Text style={styles.individualDetailSet}>
                <Text style={styles.detailsKey}>
                  Gender&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.detailsValue}>Male</Text>
              </Text>
              <Text style={styles.individualDetailSet}>
                <Text style={styles.detailsKey}>
                  Mobile Number&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.detailsValue}>071-4554455</Text>
              </Text>
              <Text style={styles.individualDetailSet}>
                <Text style={styles.detailsKey}>
                  Email&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.detailsValue}>Ann@gmail.com</Text>
              </Text>
              {/* </Unorderedlist> */}
              {/* {details.map((detail, index) => (
                <View key={index} style={styles.detailsItem}>
                  <Text style={styles.detailsKey}>{detail.key}</Text>
                  <Text style={styles.detailsValue}>{detail.value}</Text>
                </View>
              ))} */}
            </View>
          </View>
        </View>

        <View style={styles.trainerPackage}>
          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                1 Month package
                <Text style={styles.packagePrice}>&nbsp;&nbsp;18 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  1 Yoga pass<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  1 Full body massage<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  1 Foot massage<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Washing room<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                6 Month plan
                <Text style={styles.packagePrice}>&nbsp;&nbsp;64 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  2 Yoga pass<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  2 Full body massage<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  3 foot massage<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  3 steam spa<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Washing room<Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                Annual paln
                <Text style={styles.packagePrice}>&nbsp;&nbsp;95 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  4 Yoga pass <Text style={{ color: "blue" }}> | </Text>
                </Text>
                <Text style={styles.detail}>
                  4 Full body massage <Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  5 foot massage <Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  5 steam spa <Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Pool Pass <Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen <Text style={{ color: "blue" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>Washing room </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View>
        <TouchableOpacity
          variant="contained"
          color="error"
          style={styles.hireBtn}
        >
          <Text style={styles.hireBtnText}>Hire Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerSection}>
        <Footer />
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default TrainerProfile;
