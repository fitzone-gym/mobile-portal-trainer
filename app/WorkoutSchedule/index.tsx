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
import styles from "../../styles/workoutShedule.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from '../../axios'

import {
  TextInput,
  Checkbox,
} from "react-native-paper";

interface Schedule{
  exercise_id:number,
  exercise_name:string,
  reps:number,
  sets:number
}

export default function WorkoutShedule() {
  
const localParams = useLocalSearchParams()

const[scheduleDetails, setScheduleDetails] = useState<Schedule[]>([]);
const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
const [sets, setSets] = useState<number>(0);
const [reps, setReps] = useState<number>(0);

//dropdown
const [showDropDown, setShowDropDown] = useState<boolean>(false); // to show dropdown
const [exercise, setExercise] = useState<any>({}); // to track the selected exercise
const [exerciseDetailsList, setExerciseDetailsList] = useState<any>([]) // to show list in drop down

const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
const [checked, setChecked] = React.useState(false);
const [deleteId, setDeleteId] = useState<number | null>(null);


 // Function to show/hide the Add dialog
const toggleAddDialog = () => {
  setIsAddDialogVisible(!isAddDialogVisible);
};

// Function to show/the Delete dialog
const toggleDeleteDialog = (scheduleId:number) => {
  setIsDeleteDialogVisible(!isDeleteDialogVisible);
  setDeleteId(scheduleId);
};
// close the delete dialog box
const toggleDeleteDialogClose = () => {
  setIsDeleteDialogVisible(false)
}

const onPressItemHandler = (value: any) => {
  setExercise(value);
  setShowDropDown(false);
};

const openDropDown = () => {
  axios
  .get('/memberDetailsForTrainers/exercise') // retrieve the schedule details for relavent user
  .then((response: { data: { data: any }; })=>{
    setExerciseDetailsList(response.data.data);  
    console.log("results: ", response.data.data);
    
  })
  .catch((error: any) => console.error(error)); 
  setShowDropDown(true);
}

// const closeDropDown = () => {
//   setShowDropDown(false);
// }

// const searchText = (text: string) => {
//   console.log("text", text);
// }


const getAllSchedules = () => {
  axios
      .get(`/memberDetailsForTrainers/schedule/${localParams.user_id}`) // retrieve the schedule details for relavent user
      .then((response: { data: { data: any }; })=>{
        setScheduleDetails(response.data.data);  
      })
      .catch((error: any) => console.error(error));
}

useEffect(() => {
  getAllSchedules()
},[]);


  const deteleSchedule = ()=>{;
    console.log(deleteId);
    axios
      .delete(`/memberDetailsForTrainers/deleteSchedule/${deleteId}`)
      .then((response)=>{
        if(response.data.success){
          alert("Successfully deleted");
          setIsDeleteDialogVisible(false);
          getAllSchedules();
        }else{
          alert("Failed to delete")
        } 
        console.log(response.data.success);
      })
      .catch((error: any) => {
        console.error(error);   
        alert("failed"); 
      })        
  }


  const addSchedule = () => {
    console.log(exercise.exercise_id, exercise.name, sets, reps)

    axios.post("/memberDetailsForTrainers/schedule", {
      user_id: localParams.user_id,
      exercise_id: exercise.exercise_id,
      exercise_name: exercise.name,
      sets,
      reps
    }).then(res => {
      if(res.data.success) {
        alert("Successfully Added")
        setIsAddDialogVisible(false)
        getAllSchedules()
      }else {
        alert("Failed to Add")
      }
    }).catch(err => {
      console.log(err);
      alert("Failed to Add")
      
    })
  }  

  // Define the type for the checked items
  type CheckedItems = {
    [key: string]: boolean;
  };

  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const handleCheckboxChange = (exercise_id: number) => {
    // console.log(checkedItems);
    setCheckedItems((prev) => ({
      ...prev,
      [exercise_id]: !prev[exercise_id],
    }));
    getAllSchedules();
  };

  useEffect(() =>{
    console.log(checkedItems);
  },[checkedItems]);

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
                    onPress={toggleAddDialog}
                  >
                    <Text style={styles.addNoteBtn}>                    
                        <Text style={styles.btnText}>Add exercise</Text>
                    </Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity
                    style={styles.fillWhiteBtn}
                    onPress={() => {
                      router.push("/addNote");
                    }}
                  >
                    <Text style={styles.addNoteBtn}>
                      <Text style={styles.btnText1}>Add note</Text>
                    </Text>
                  </TouchableOpacity> */}
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
                                name="delete-outline"
                                style={styles.individualOptionIconDelete}
                                onPress={() => toggleDeleteDialog(scheduleDetail.exercise_id)}
                              />
                            </View>
                          </View>
                          {/* check buttons */}
                          <View>
                            <Checkbox
                            status={checkedItems[scheduleDetail.exercise_id]? 'checked' : 'unchecked'}
                            color="#E54646"
                            onPress={() => handleCheckboxChange(scheduleDetail.exercise_id)}
                            />
                          </View>
                        </View>
                      </View>
                  </View>
                ))
                ):(<Text></Text>)}             
            </View>

{/* ------------------------------------------ */}
          {/* Add Dialog  box modal*/}
          <Modal
            visible={isAddDialogVisible}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent2}>
                <Icon
                    name="close"
                    style={styles.closeButton}
                    onPress={toggleAddDialog}
                  />  
                    {/* Add Schedule Form */}
                <View style={styles.addForm}>
                  <View style={{
                          zIndex: 10,
                          marginBottom: 10

                        }}>
                          <Text style={styles.addFormLabel}>Exercise Name:</Text>
                          <TouchableOpacity
                          onPress={openDropDown}
                          >
                            <Text 
                            style={styles.addDropDownLabel}
                            >{exercise.name || "Select exercise name"}
                            </Text>
                            
                          </TouchableOpacity>

                          <FlatList
                          showsVerticalScrollIndicator={true}
                            style={{
                              display: showDropDown ? 'flex' : 'none',
                              backgroundColor: "#ccc",
                              position: "absolute",
                              height: 200,
                              left: 0,
                              right: 0,
                              top: 30,
                              zIndex: 1,
                              elevation: 3,
                              shadowColor: "#fff",
                              paddingLeft: 5,
                          
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
                              exerciseDetailsList
                            }
                            renderItem={({ item }: any) => (
                            <TouchableOpacity
                                style={{
                                  paddingBottom: 5,
                                  paddingTop: 8,
                                  paddingLeft: 5,
                                  marginBottom:2,
                                }}
                                onPress={() => onPressItemHandler({name: item.name, exercise_id: item.exercise_id})}
                              >
                                <Text style={styles.inputColor}>{item.name}</Text>
                            </TouchableOpacity>
                              )}
                            keyExtractor={(item, index) => index.toString()}
                          />
                  </View>

                <Text style={styles.addFormLabel}>Number of Sets:</Text>
                <TextInput
                  style={styles.editFormInput}
                  placeholder="Enter number of sets"
                  value={sets.toString()}
                  onChangeText={(text) => setSets(parseInt(text))}
                  // keyboardType="numeric"
                />

                <Text style={styles.addFormLabel}>Number of Reps:</Text>
                <TextInput
                  style={styles.editFormInput}
                  placeholder="Enter number of reps"
                  value={reps.toString()}  // why?
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



{/* ----------Delete Dialog *----------------------- */}
          <Modal
            transparent={true}
            visible={isDeleteDialogVisible}
            animationType="slide" >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Icon
                  name="close"
                  style={styles.closeButton}
                  onPress={toggleDeleteDialogClose}
                />       
                <Text style={styles.confirmationText}> Are you sure you want to delete this workout?</Text>         
                <TouchableOpacity 
                style={styles.deleteButton}
                onPress={deteleSchedule}
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
