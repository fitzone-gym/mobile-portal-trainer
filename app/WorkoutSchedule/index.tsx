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
  GestureResponderEvent,
  Modal,
} from "react-native";

import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import baseUrl from '../../baseUrl';
import styles from "../../styles/workoutShedule.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Button, 
  Dialog,
  Portal,
  PaperProvider,
  TextInput,
  IconButton,
  MD3Colors,
  Checkbox
} from "react-native-paper";
import axios from "axios";

interface Schedule{
  exercise_id:number,
  exercise_name:string,
  reps:number,
  sets:number
}

export default function WorkoutShedule() {
  
const localParams = useLocalSearchParams()
console.log(localParams.id);

const[scheduleDetails, setScheduleDetails] = useState<Schedule[]>([]);
const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
const [checked, setChecked] = React.useState(false);



 // Function to show/hide the Edit dialog
 const toggleEditDialog = () => {
  setIsEditDialogVisible(!isEditDialogVisible);
};

// Function to show/hide the Delete dialog
const toggleDeleteDialog = () => {
  setIsDeleteDialogVisible(!isDeleteDialogVisible);
};


useEffect(() => {
  axios
      .get(`${baseUrl}/memberDetailsForTrainers/schedule/${localParams.id}`)
      .then((response: { data: { data: any; }; })=>{
        setScheduleDetails(response.data.data);  
      })
      .catch((error: any) => console.error(error));
      
},[]);

  console.info(scheduleDetails)

  const router = useRouter();

  // edit form
  function setEditedSets(arg0: number): void {
    throw new Error("Function not implemented.");
  }
  function setEditedReps(arg0: number): void {
    throw new Error("Function not implemented.");
  }

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
                    onPress={() => {
                      router.push({
                        pathname:'../WorkoutSchedule/scheduleForm',
                        params:{
                          id:localParams.id
                        }
                      })
                    }}
                  >
                    <Text style={styles.addNoteBtn}>                    
                        <Text style={styles.btnText}>Add exercise</Text>
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.fillWhiteBtn}
                    onPress={() => {
                      router.push("/addNote");
                    }}
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
                  <View style={styles.individualWork }>
                      <View style={styles.addNoteBtn}>
                        <View>
                          <Text style={styles.sheduleActivity}>{scheduleDetail.name}</Text>
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
                                name="create"
                                style={styles.individualOptionIconEdit}
                                onPress={toggleEditDialog}
                              />
                              <Icon
                                name="delete-outline"
                                style={styles.individualOptionIconDelete}
                                onPress={toggleDeleteDialog}
                              />
                            </View>
                          </View>
                          {/* check buttons */}
                          <View style={styles.addNoteBtn}>
                            <Checkbox
                              status={checked ? 'checked' : 'unchecked'}
                              color="#E54646"
                              onPress={() => {
                                setChecked(!checked);
                              }}
                            />
                          </View>
                        </View>
                      </View>
                  </View>
                ))
                ):(<Text>No data</Text>)}             
            </View>
{/* ------------------------------------------ */}
          {/* Edit Dialog */}
          <Modal
            visible={isEditDialogVisible}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent2}>
                <Icon
                    name="close"
                    style={styles.closeButton}
                    onPress={toggleEditDialog}
                  />  
                    {/* Edit Schedule Form */}
            <View style={styles.editForm}>
              <Text style={styles.editFormLabel}>Exercise Name:</Text>
              <TextInput
                style={styles.editFormInput}
                placeholder="Enter exercise name"
                // value={editedExerciseName}
                // onChangeText={setEditedExerciseName}
              />

              <Text style={styles.editFormLabel}>Number of Sets:</Text>
              <TextInput
                style={styles.editFormInput}
                placeholder="Enter number of sets"
                // value={editedSets.toString()}
                // onChangeText={(text) => setEditedSets(parseInt(text))}
                // keyboardType="numeric"
              />

              <Text style={styles.editFormLabel}>Number of Reps:</Text>
              <TextInput
                style={styles.editFormInput}
                placeholder="Enter number of reps"
                // value={editedReps.toString()}
                // onChangeText={(text) => setEditedReps(parseInt(text))}
                // keyboardType="numeric"
              />

              <TouchableOpacity
                style={styles.saveButton}
                // onPress={handleEditSchedule}
              >
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
              
              </View>
            </View>
          </Modal>

          {/* Delete Dialog */}
          <Modal
            // transparent={true}
            visible={isDeleteDialogVisible}
            animationType="slide" >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Icon
                  name="close"
                  style={styles.closeButton}
                  onPress={toggleDeleteDialog}
                />       
                <Text style={styles.confirmationText}>Are you sure you want to delete this workout?</Text>         
                <TouchableOpacity 
                style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>  
{/* ------------------------------------------- */}
        </ImageBackground>
        </View>        
      </ScrollView>
    </SafeAreaView>
  );
}
