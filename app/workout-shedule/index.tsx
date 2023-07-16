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
import { Stack as MuiStack } from "@mui/material";
import Button from "@mui/material/Button";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

/*import footer */
import Footer from "../footer_statusbar/index.tsx";

/*for popup */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from '@mui/material';



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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    },
    back: {
      // backgroundColor: "black",
      paddingBottom: 50,
    },
    content: {
      paddingLeft: 20,
      paddingBottom: 20,
      paddingTop: 20,
      paddingRight: 20,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: "100%" /* You must set a specified height */,
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
      marginBottom: "1rem",
    },
    sheduleOptionsButton: {
      alignItems: "left",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 50,
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
      alignItems: "left",
      justifyContent: "center",
      marginTop: 0,
      marginBottom: 50,
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
              <MuiStack spacing={2} direction="row">
                <TouchableOpacity
                  variant="contained"
                  style={styles.fillRedBtn}
                  onPress={() => {
                    router.push("/workout-shedule");
                  }}
                >
                  <MuiStack spacing={1} direction="row">
                    <Text>
                      <LibraryAddRoundedIcon style={styles.btnIcon} />{" "}
                    </Text>
                    <Text style={styles.btnText}>Add exercise</Text>
                  </MuiStack>
                </TouchableOpacity>

                <TouchableOpacity
                  variant="outlined"
                  style={styles.fillWhiteBtn}
                >
                  <MuiStack spacing={1} direction="row">
                    <Text>
                      <AddBoxRoundedIcon style={styles.btnIcon1} />{" "}
                    </Text>
                    <Text style={styles.btnText1}>Add note</Text>
                  </MuiStack>
                </TouchableOpacity>
              </MuiStack>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.workoutShedule}>
            {(["1", "2", "3", "4", "5"] as const).map((anchor) => (
              <View style={styles.individualWork}>
                <View style={styles.individualWorkContent}>
                  <MuiStack spacing={9} direction="row">
                    <View>
                      <Text style={styles.sheduleActivity}>Scot</Text>
                      <Text>
                        <Text style={styles.sheduleActivityType}>set 1</Text>
                        <Text style={styles.sheduleActivityQty}>12 reps</Text>
                      </Text>
                    </View>

                    <View>
                      <MuiStack spacing={1} direction="column">
                        <EditCalendarRoundedIcon
                          style={styles.individualOptionIconEdit}
                          onClick={handleClickOpen}
                        />
                        <DeleteForeverRoundedIcon
                          style={styles.individualOptionIconDelete}
                        />
                      </MuiStack>
                    </View>

                    <View>
                      <MuiStack spacing={2} direction="column">
                        <AssignmentTurnedInRoundedIcon
                          style={styles.individualOptionIconDate}
                        />
                      </MuiStack>
                    </View>
                  </MuiStack>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.footerSection}>
            <Footer />
          </View>
        </View>

        {/* dialog popup */}
        <View>
          <Dialog
            open={open}
            PaperComponent={(props) => (
              <Paper
                sx={{
                  backgroundColor: "black",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
                {...props}
              />
            )}
            aria-labelledby="draggable-dialog-title"
          >
            {/* <React.Fragment> */}
            <h2 style={{ color: "white" }}>Edit exercise</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                size="small"
                type="text"
                variant="outlined"
                label="exerciseName"
                onChange={(e) => setExerciseName(e.target.value)}
                value={exerciseName}
                fullWidth
                required
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Change the border color here
                    },
                    "&:hover fieldset": {
                      borderColor: "blue", // Change the border color on hover here
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "blue", // Change the border color when focused here
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "blue", // Change the label color here
                  },
                }}
              />

              <MuiStack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  size="small"
                  type="text"
                  variant="outlined"
                  label="sets"
                  onChange={(e) => setSets(e.target.value)}
                  value={sets}
                  fullWidth
                  required
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "blue", // Change the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "blue", // Change the border color when focused here
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "blue", // Change the label color here
                    },
                  }}
                />
                <TextField
                  size="small"
                  type="text"
                  variant="outlined"
                  label="reps"
                  onChange={(e) => setReps(e.target.value)}
                  value={reps}
                  fullWidth
                  required
                  sx={{
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change the border color here
                      },
                      "&:hover fieldset": {
                        borderColor: "blue", // Change the border color on hover here
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "blue", // Change the border color when focused here
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "blue", // Change the label color here
                    },
                  }}
                />
              </MuiStack>

              <View style={styles.editFormBtn}>
                <MuiStack spacing={2} direction="row">
                  <TouchableOpacity
                    variant="contained"
                    style={styles.fillBlueBtn}
                    onPress={handleClose}
                  >
                    <MuiStack spacing={1} direction="row">
                      <Text style={styles.btnText}>Accept</Text>
                    </MuiStack>
                  </TouchableOpacity>

                  <TouchableOpacity
                    variant="outlined"
                    style={styles.fillRedBtn}
                    onPress={handleClose}
                  >
                    <MuiStack spacing={1} direction="row">
                      <Text style={styles.btnText}>Cansel</Text>
                    </MuiStack>
                  </TouchableOpacity>
                </MuiStack>
              </View>
            </form>
            {/* </React>  */}
          </Dialog>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
