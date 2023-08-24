import React, { useEffect, useState } from "react";
import axios from 'axios';
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
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import {useParams} from 'react-router-dom';
import Footer from "../../components/FooterStatusbar"
import baseUrl from '../../baseUrl';

interface Member  {
  id:number;
  first_name:string;
  last_name:string;
  age:number;
  gender:string;
  phone_no:string;
  email:string;
  profile_picture?:string;
}

export default function memberProfileDetailed() {

  const router = useRouter();

  const localParams = useLocalSearchParams()

  console.log(localParams.id);
  

  // const {id} = useParams();
  const [member,setMember] = useState<Member | null>(null);

  useEffect(() => {
    // const memberId = route.params.id;
      axios
            .get(`${baseUrl}/memberDetails/${localParams.id}`)
            .then((response) => {
                setMember(response.data.data); // Set the member data to the state
            })
            .catch((error) => console.error("Error fetching member details", error));

  },[])


  console.log(member);
  

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          // headerLeft: null,
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
                    // source={require("../../assets/images/trainer-1.jpg")}
                    source={{
                      uri: `https://stylioo.blob.core.windows.net/images/${member?.profile_picture}`
                    }}
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
                          <Text style={styles.detailsValue}>{member?.first_name} {member?.last_name}</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>{member?.age}</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>{member?.gender === "M" ? "Male" : "Famale"}</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>{member?.phone_no}</Text>
                        </Text>
                        <Text>
                          <Text style={styles.detailsValue}>{member?.email}</Text>
                        </Text>
                      </View>
                    </View>
                  {/* </Unorderedlist> */}
                </View>
              </View>

              <View >
                <View style={styles.profileDetailsButton}>
                  <TouchableOpacity
                    style={styles.fillRedBtn}
                    onPress={()=>{
                      router.push('/WorkoutSchedule')
                  }} 
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Workout Shedule
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
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
                  {/* <Image
                    source={require("../../assets/images/workoutProgress.png")}
                    style={styles.workoutImage}
                  /> */}
              </View>
            </View>

            <View>
              <Text style={styles.workoutProgressTopic}>Dieting progress</Text>
              <View style={styles.workoutProgressArea}>
                {/* <Image
                    source={require("../../assets/images/dietingProgress.png")}
                    style={styles.dietPlaneImage}
                  />    */}
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
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
