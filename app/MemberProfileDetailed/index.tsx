import React, { useEffect, useState } from "react";
import axios from '../../axios'
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
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

interface Member  {
  user_id:number;
  first_name:string;
  last_name:string;
  age:number;
  gender:string;
  phone_no:string;
  email:string;
  profile_picture?:string;
}

interface HelthInjuries{
  weight:number;
  height:number;
  suger_level:number;
  cholesterol_level:number;
  blood_presure:number;
  diabetes_level:number;
  injuries:string;
  supplements:string;
  last_update_date:Date;
}
export default function memberProfileDetailed() {

  const router = useRouter();
  const localParams = useLocalSearchParams()

  const [member,setMember] = useState<Member | null>(null);

  useEffect(() => {
    // const memberId = route.params.id;
      axios
            .get(`/memberDetailsForTrainers/memberDetails/${localParams.user_id}`) // this user_id is member_id
            .then((response) => {             
                setMember(response.data.data); // Set the member data to the state
            })
            .catch((error) => console.error("Error fetching Member Details", error));

  },[])
  console.log(member);

  const [helthInjuries, setHelthInjuries] = useState<HelthInjuries | null>(null);

  useEffect(() =>{
      axios.get(`/memberDetailsForTrainers/helthInjuries/${localParams.user_id}`)
      .then((response) =>{
        setHelthInjuries(response.data.data[0]);
      })
      .catch((error) => console.error("Error fetching helth and Injuries details", error));
  },[])
  console.log(helthInjuries);


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
              <Text style={styles.ProfilePageHeading}>About {member?.first_name}</Text>
            </View>

            <View style={styles.memberDetailsSection}>
              <View style={styles.memberDetails}>
                <View>
                  <Image
                    style={styles.memberImage}
                    source={{
                      uri: `https://stylioo.blob.core.windows.net/images/${member?.profile_picture}`
                    }}
                    
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
                      router.push({
                        pathname:'/WorkoutSchedule',
                        params:{
                          user_id:localParams.user_id
                        }
                      })
                  }} 
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Workout Shedule
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.fillWhiteBtn}
                    onPress={()=>{
                      router.push('/DietPlan')
                  }} 
                  >
                    <Text style={{ color: "#E54646", fontWeight: "bold" }}>
                      Diet Plan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* <View>
              <Text style={styles.workoutProgressTopic}>Workout progress</Text>
              <View style={styles.workoutProgressArea}>
                
              </View>
            </View>

            <View>
              <Text style={styles.workoutProgressTopic}>Dieting progress</Text>
              <View style={styles.workoutProgressArea}>
              
              </View>
            </View> */}

            <View>
              <Text style={styles.workoutProgressTopic}>HEALTH LEVEL</Text>
              <View style={styles.healthDetail}>
                  {/* <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Sugar Level</Text>
                    <Text style={styles.healthLevel}> {helthInjuries?.suger_level} mg/dL</Text>
                  </View> */}
                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Weight</Text>
                    <Text style={styles.healthLevel}>{helthInjuries?.weight} kg</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Height</Text>
                    <Text style={styles.healthLevel}>{helthInjuries?.height} cm</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Cholestrol Level</Text>
                    <Text style={styles.healthLevel}>{helthInjuries?.cholesterol_level} mg/dL</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Blood Presure</Text>
                    <Text style={styles.healthLevel}>{helthInjuries?.blood_presure} mm Hg</Text>
                  </View>

                  <View style={styles.individualHealthDetail}>
                    <Text style={styles.healthTopic}> Diabetes Level</Text>
                    <Text style={styles.healthLevel}>{helthInjuries?.diabetes_level} mg/dL</Text>
                  </View>
              </View>

              <View>
              <Text style={styles.workoutProgressTopic}>
                  INJURIES
                </Text>
                <View style={styles.workoutProgressArea}>
                  {helthInjuries?.injuries === "no" ?(
                    <Text  style={styles.detailsValue}>NO INJURIES</Text>                    
                  ):(
                    <Text style={styles.detailsValue}> {helthInjuries?.injuries.toUpperCase()}</Text>
                  )}                  
                </View>
              </View>

              <View>
                <Text style={styles.workoutProgressTopic}>
                  SUPPLIMENTERY PROTIENE
                </Text>
                <View style={styles.workoutProgressArea}>
                  <Text style={styles.detailsValue}>{helthInjuries?.supplements.toUpperCase()}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
