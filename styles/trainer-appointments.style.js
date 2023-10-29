import { StyleSheet } from "react-native";

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
      height: 178 /* You must set a specified height */,
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize: "cover",
      width: "100%",
      borderLeftBottom: 25,
      borderRightBottom: 25,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    appointmentPageHeading: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginBottom: 20,
    },
    appointmentList: {
      margin: 20,
    },
    appointmentDate: {
      fontSize: 17,
      // fontWeight: 500,
      color: "white",
      marginBottom: 20,
    },
    appointments: {
      backgroundColor: "#222222",
      borderRadius: 20,
      paddingBottom:20
    },
    individualAppointment: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#E54646",
      padding: 20,
    },
    individualAppointmentNotBook:{
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#E54646",
      padding: 20,
      paddingBottom:50, 
      backgroundColor:"#E54646",
    },
    individualAppointmentContent: {
      display: "flex",
      flexDirection: "row",
      gap: 80,
    },
    time: {
      color: "white",
      marginBottom:10
    },
    member: {
      color: "white",
      display:"flex",
      flexDirection:"row",
      gap:12
    },
    name: {
      paddingTop:8,
      alignItems:"center",
      justifyContent:"center",
      color: "white",
    },
    status: {
      color: "#959595",
    },
    userImage: {
      width: 35,
      height: 35,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: "#E54646",
    },
  });

export default styles;
