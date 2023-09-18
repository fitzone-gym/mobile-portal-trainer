import * as React from "react";
import {useState,useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import baseUrl from '../../baseUrl';
import styles from "../../styles/workoutShedule.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from '../../axios'

import {
  TextInput,
  Checkbox,
} from "react-native-paper";
// import axios from "axios";
import DropDown from "react-native-paper-dropdown";

interface Schedule{
  exercise_id:number,
  exercise_name:string,
  reps:number,
  sets:number
}

export default function WorkoutShedule() {
  
const localParams = useLocalSearchParams()
console.log(localParams.user_id);

const[scheduleDetails, setScheduleDetails] = useState<Schedule[]>([]);
const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
const [checked, setChecked] = React.useState(false);
const [deleteId, setDeleteId] = useState<number | null>(null);

const [sets, setSets] = useState<number>(0);
const [reps, setReps] = useState<number>(0)


 // Function to show/hide the Edit dialog
const toggleEditDialog = () => {
  setIsEditDialogVisible(!isEditDialogVisible);
};

// Function to show/hide the Delete dialog
const toggleDeleteDialog = () => {
  // setSelectedExercise(exercise);
  setIsDeleteDialogVisible(!isDeleteDialogVisible);
  setDeleteId(deleteId);
};


//dropdown
const [showDropDown, setShowDropDown] = useState<boolean>(false);
// const [dropDownList, setDropDownList] = React.useState<string[]>([]);
const [exercise, setExercise] = useState<string>('');

const onPressItemHandler = (value: string) => {
  setExercise(value);
  setShowDropDown(false);
};

const openDropDown = () => {
  setShowDropDown(true);
}

const closeDropDown = () => {
  setShowDropDown(false);
}

const searchText = (text: string) => {
  console.log("text", text);
}


useEffect(() => {
  axios
      .get(`/memberDetailsForTrainers/schedule/${localParams.user_id}`) // retrieve the schedule details for relavent user
      .then((response: { data: { data: any }; })=>{
        setScheduleDetails(response.data.data);  
      })
      .catch((error: any) => console.error(error));
      
},[]);
  // console.info(scheduleDetails)

  const deteleExercise = ()=>{
    axios
      .delete(`/memberDetailsForTrainers/deleteSchedule/${deleteId}`)
      .then((response: { data: { data: any }; })=>{
        setScheduleDetails(response.data.data);  
      })
      .catch((error: any) => console.error(error));      
  }


  const addSchedule = () => {
    console.log(exercise, sets, reps)
  }



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
                    onPress={toggleEditDialog}
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
                  <View  key={scheduleDetail.exercise_id} style={styles.individualWork }>
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
                                // onPress={() => toggleDeleteDialog(scheduleDetail.exercise_id)}
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
              {/* <Text style={styles.editFormLabel}>Exercise Name:</Text> */}
              {/* <TextInput
                style={styles.editFormInput}
                placeholder="Enter exercise name"
                // value={editedExerciseName}
                // onChangeText={setEditedExerciseName}
              /> */}

<View style={{
                      // position: "relative"
                      zIndex: 10,
                      marginBottom: 10

                    }}>
                      <Text style={styles.editFormLabel}>Exercise Name:</Text>
                      <TextInput
                        placeholder="select exercise name"
                        onFocus={openDropDown}
                        onChangeText={(text) => searchText(text)}
                        // onBlur={closeDropDown}
                        value={exercise}
                      ></TextInput>
                      <FlatList
                        style={{
                          display: showDropDown ? 'flex' : 'none',
                          backgroundColor: "#fff",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 75,
                          zIndex: 1,
                          elevation: 1,
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.7,
                          shadowRadius: 3.84,
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                        }}
                        data={
                          scheduleDetails.map((scheduleDetail: any) => (
                            scheduleDetail.name
                          ))
                        }
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={{
                              backgroundColor: "#fff",
                              paddingBottom: 5,
                              paddingTop: 3,
                              paddingLeft: 5,
                            }}
                            onPress={() => onPressItemHandler(item)}
                          >
                            <Text>{item}</Text>
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                      />
                      {/* </View> */}
                    </View>



              <Text style={styles.editFormLabel}>Number of Sets:</Text>
              <TextInput
                style={styles.editFormInput}
                placeholder="Enter number of sets"
                value={sets.toString()}
                onChangeText={(text) => setSets(parseInt(text))}
                // keyboardType="numeric"
              />

              <Text style={styles.editFormLabel}>Number of Reps:</Text>
              <TextInput
                style={styles.editFormInput}
                placeholder="Enter number of reps"
                value={reps.toString()}
                onChangeText={(text) => setReps(parseInt(text))}
                // keyboardType="numeric"
              />

              <TouchableOpacity
                style={styles.saveButton}
                onPress={addSchedule}
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
                <Text style={styles.confirmationText}> Are you sure you want to delete this workout?</Text>         
                <TouchableOpacity 
                style={styles.deleteButton}
                onPress={deteleExercise}
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
