import * as React from "react";
import {useState,useEffect} from 'react';
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

import { Stack, useRouter } from "expo-router";

import styles from "../../styles/workoutShedule.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Button, 
  Dialog,
  Portal,
  PaperProvider,
  TextInput,
} from "react-native-paper";
import axios from "axios";

interface Schedule{
  exercise_id:number,
  exercise_name:string,
  reps:number,
  sets:number
}

export default function WorkoutShedule() {

const[scheduleDetails, setScheduleDetails] = useState<Schedule[]>([]);
useEffect(() => {
  axios
      .get("http://localhost:5400/members/schedule")
      .then((response: { data: { data: any; }; })=>{
        setScheduleDetails(response.data.data);  
      })
      .catch((error: any) => console.error(error));
      
},[]);

console.info(scheduleDetails)

  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "workout schedule",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground
            source={require("../../assets/images/hero-image1.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.content}>
              <View>
                <Text style={styles.sheulePageHeading}>workout shedule</Text>
              </View>

              <View style={styles.sheduleOptionsButton}>
                <View style={styles.addNoteBtn}>
                  <TouchableOpacity
                    style={styles.fillRedBtn}
                    // onPress={() => {
                    //   router.push("/workout-shedule");
                    // }}
                  >
                    <Text style={styles.addNoteBtn}>                    
                      {/* <Button icon="book-plus-outline"> */}
                        <Text style={styles.btnText}>Add exercise</Text>
                      {/* </Button>                       */}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // variant="outlined"
                    style={styles.fillWhiteBtn}
                    // onPress={() => {
                    //   router.push("/addNote");
                    // }}
                  >
                    <Text style={styles.addNoteBtn}>
                      <Text style={styles.btnText1}>Add note</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

{/*---------- show workout schedule */}
            <View style={styles.content}>
                {scheduleDetails.length > 0? (
                scheduleDetails.map((scheduleDetail:any)=>(
                  <View style={styles.individualWork}>
                      <View style={styles.addNoteBtn}>
                        <View>
                          <Text style={styles.sheduleActivity}>{scheduleDetail.exercise_name}</Text>
                          <Text>
                            <Text style={styles.sheduleActivityType}>
                              Sets {scheduleDetail.sets}&nbsp;&nbsp;
                            </Text>
                            <Text style={styles.sheduleActivityQty}>
                              {scheduleDetail.reps} Reps
                            </Text>
                          </Text>
                        </View>
                        <View style={styles.allbuttons}>
                          <View style={styles.editDelete}>
                            {/* /*change direction */}
                            <View style={styles.editDeleteIcon}>
                              <Icon
                                name="circle-edit-outline"
                                style={styles.individualOptionIconEdit}
                                // onPress={showDialog}
                              />
                              <Icon
                                name="delete-forever"
                                style={styles.individualOptionIconDelete}
                              />
                            </View>
                          </View>
                            {/* check buttons
                            <View style={styles.addNoteBtn}>
                              <Icon
                                name="clipboard-check"
                                style={styles.individualOptionIconDate}
                              />
                            </View> */}
                        </View>
                      </View>
                  </View>
                ))
                ):(<Text>No data</Text>)}                
            </View>
{/* --------------------------- */}
        </ImageBackground>
        </View>        
      </ScrollView>
    </SafeAreaView>
  );
}
