import * as React from "react";
import {useState} from 'react';
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


/*import footer */
import BottomNav from "../../components/BottomNav/index.tsx";
import AppBar from "../../components/AppBar/index.tsx";

import styles from "../../styles/workoutShedule.style";

import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


/*for popup */
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Paper, { PaperProps } from "@mui/material/Paper";
// import Draggable from "react-draggable";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Container from '@mui/material';



import {
  Button, 
  Dialog,
  Portal,
  PaperProvider,
  TextInput,
} from "react-native-paper";


function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function WorkoutShedule() {
  /*for routing*/
  const router = useRouter();

  /*popup dialog */
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setVisible(true);
  // };

  // const handleClose = () => {
  //   setVisible(false);
  // };

  /*new */
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const handleClose = () => setVisible(false);

  /*for edit form */
  const[exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const[reps, setReps] = useState("");

  function handleSubmit(event){
    event.preventDefault();
  }
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "",
          //   headerLeft: null,
        }}
      />
      <AppBar />
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
                    // variant="contained"
                    style={styles.fillRedBtn}
                    onPress={() => {
                      router.push("/workout-shedule");
                    }}
                  >
                    <Text style={styles.addNoteBtn}>
                      <Text>
                        <Icon name="folder-plus" style={styles.btnIcon} />{" "}
                      </Text>
                      <Text style={styles.btnText}>Add exercise</Text>
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // variant="outlined"
                    style={styles.fillWhiteBtn}
                  >
                    <Text style={styles.addNoteBtn}>
                      <Text>
                        <Icon
                          name="plus-box-multiple"
                          style={styles.btnIcon1}
                        />{" "}
                      </Text>
                      <Text style={styles.btnText1}>Add note</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <View style={styles.workoutShedule}>
                {(["1", "2", "3", "4", "5"] as const).map((anchor) => (
                  <View style={styles.individualWork}>
                    <View style={styles.individualWorkContent}>
                      <View style={styles.addNoteBtn}>
                        <View>
                          <Text style={styles.sheduleActivity}>Scot</Text>
                          <Text>
                            <Text style={styles.sheduleActivityType}>
                              set 1&nbsp;&nbsp;
                            </Text>
                            <Text style={styles.sheduleActivityQty}>
                              12 reps
                            </Text>
                          </Text>
                        </View>

                        <View>
                          {/* /*change direction */}
                          <View style={styles.editDeleteIcon}>
                            <Icon
                              name="clipboard-edit"
                              style={styles.individualOptionIconEdit}
                              onPress={showDialog}
                            />
                            <Icon
                              name="delete-forever"
                              style={styles.individualOptionIconDelete}
                            />
                          </View>
                        </View>

                        <View>
                          {/* /*change direction */}
                          <View style={styles.addNoteBtn}>
                            <Icon
                              name="clipboard-check"
                              style={styles.individualOptionIconDate}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              <View style={styles.footerSection}>
                <BottomNav />
              </View>
            </View>

            {/* dialog popup */}
            <PaperProvider style={{ backgroundColor: "black" }}>
              <View
                stye={{
                  paddingTop: 50,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Portal
                  style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    opacity: 0,
                  }}
                >
                  <Dialog
                    visible={visible}
                    onDismiss={handleClose}
                    style={{
                      backgroundColor: "black",
                      opacity: 1,
                      // borderRadius: "none",
                    }}
                  >
                    <Dialog.Content>
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 20,
                          marginBottom: 10,
                        }}
                      >
                        Edit exercise
                      </Text>

                      <TextInput
                        mode="outlined"
                        label="Exercise Name"
                        value={exerciseName}
                        onChangeText={(text) => setExerciseName(text)}
                        placeholder=""
                        style={{
                          marginBottom: 16,
                          borderColor: "white", // Change the border color here
                          height: 40,
                        }}
                        theme={{
                          colors: {
                            primary: "blue", // Change the label and focused border color here
                          },
                        }}
                      />

                      <View style={styles.setsReps}>
                        <TextInput
                          mode="outlined"
                          label="Sets"
                          value={sets}
                          onChangeText={(text) => setSets(text)}
                          placeholder=""
                          style={{
                            marginBottom: 16,
                            borderColor: "white", // Change the border color here
                            height: 40,
                            width: "50%",
                          }}
                          theme={{
                            colors: {
                              primary: "blue", // Change the label and focused border color here
                            },
                          }}
                        />

                        <TextInput
                          mode="outlined"
                          label="Reps"
                          value={reps}
                          onChangeText={(text) => setReps(text)}
                          placeholder=""
                          style={{
                            marginBottom: 16,
                            borderColor: "white", // Change the border color here
                            height: 40,
                            width: "50%",
                          }}
                          theme={{
                            colors: {
                              primary: "blue", // Change the label and focused border color here
                            },
                          }}
                        />
                      </View>

                      <View style={styles.editFormBtn}>
                        <View style={styles.acceptCanselBtn}>
                          <TouchableOpacity
                            style={styles.fillBlueBtn}
                            onPress={handleClose}
                          >
                            <View>
                              <Text style={styles.btnText}>Accept</Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={styles.fillRedBtn}
                            onPress={handleClose}
                          >
                            <View>
                              <Text style={styles.btnText}>Cancel</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Dialog.Content>
                  </Dialog>
                </Portal>
              </View>
            </PaperProvider>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
