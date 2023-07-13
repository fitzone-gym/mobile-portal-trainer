import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Unorderedlist from "react-native-unordered-list";
import styles from "../../styles/trainerProfile.style";


const TrainerProfile = () => (
  <SafeAreaView style={styles.container}>
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
                <Text style={styles.detailsValue}>Female</Text>
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
    </ImageBackground>

    <View>

    </View>
  </SafeAreaView>
);

export default TrainerProfile;
