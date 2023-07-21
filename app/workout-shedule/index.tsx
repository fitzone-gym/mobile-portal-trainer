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
// import { Stack as MuiStack } from "@mui/material";
// import Button from "@mui/material/Button";
// import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
// import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
// import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
// import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
// import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

/*import footer */
import Footer from "../footer_statusbar/index.tsx";

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
  const [visible, setVisible] = React.useState(true);

  const showDialog = () => setVisible(true);

  const handleClose = () => setVisible(false);

  /*for edit form */
  const[exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const[reps, setReps] = useState("");

  function handleSubmit(event){
    event.preventDefault();
  }

  /*css */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    back: {
      paddingBottom: 50,
    },
    content: {
      paddingLeft: 20,
      paddingBottom: 20,
      paddingTop: 20,
      paddingRight: 20,
      // minHeight: "100%",
      // backgroundColor: "black",
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: "25%" /* You must set a specified height */,
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize: "cover",
      width: "100%",
      borderLeftBottom: 25,
      borderRightBottom: 25,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    sheulePageHeading: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginBottom: 20,
    },
    sheduleOptionsButton: {
      // alignItems: "left",
      // justifyContent: "center",
      

      marginTop: 20,
      marginBottom: 50,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    fillRedBtn: {
      backgroundColor: "#E54646",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      paddingTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 7,
      borderRadius: 5,
    },
    fillWhiteBtn: {
      backgroundColor: "white",
      color: "#E54646",
      fontWeight: "bold",
      textTransform: "none",
      borderColor: "white",
      paddingTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 7,
      borderRadius: 5,
      marginLeft: 20,
    },
    btnText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
    btnIcon: {
      color: "white",
    },
    btnText1: {
      color: "#E54646",
      fontWeight: "bold",
      fontSize: 14,
    },
    btnIcon1: {
      color: "#E54646",
    },
    sheduleActivity: {
      fontWeight: "bold",
      color: "#dcdfe2",
      fontSize: 23,
    },
    sheduleActivityType: {
      fontWeight: "bold",
      color: "#E54646",
      fontSize: 20,
    },
    sheduleActivityQty: {
      fontWeight: "bold",
      color: "#dcdfe2",
      fontSize: 20,
      marginLeft: 20,
    },
    addNoteBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    editDeleteIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 10,
    },
    individualOptionIconEdit: {
      color: "#dcdfe2",
      fontSize: 22,
      cursor: "pointer",
    },
    individualOptionIconDelete: {
      color: "#dcdfe2",
      fontSize: 25,
      cursor: "pointer",
    },
    individualOptionIconDate: {
      backgroundColor: "#E54646",
      color: "#dcdfe2",
      padding: 5,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      cursor: "pointer",
    },
    individualWork: {
      backgroundColor: "rgba(34, 34, 34, 0.88)",
      padding: 10,
      borderRadius: 10,
      paddingLeft: 18,
      marginTop: 10,
      marginBottom: 10,
    },
    fillBlueBtn: {
      backgroundColor: "blue",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      paddingTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 7,
      borderRadius: 5,
    },
    editFormBtn: {
      alignItems: "flex-start", // Left-align the child components
      justifyContent: "center",
      marginTop: 0,
      marginBottom: 20,
    },
    setsReps: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      marginBottom: 20,
    },
    acceptCanselBtn: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
      // justifyContent: "space-between",
    },
  });
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "",
          //   headerLeft: null,
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
                              set 1
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
                              name="calendar-edit"
                              style={styles.individualOptionIconEdit}
                              onClick={showDialog}
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
                <Footer />
              </View>
            </View>

            {/* dialog popup */}
            {/* <PaperProvider style={{ backgroundColor: "black" }}>
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
                      opacity: "1",
                      borderRadius: "none",
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
            </PaperProvider> */}
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
