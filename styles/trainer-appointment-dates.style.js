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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 200 /* You must set a specified height */,
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
  appointmetDetailButtonsSection: {
    padding: 5,
  },
  appointmentDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  individualDetail: {
    padding: 10,
    backgroundColor: "#000000c0",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 120,
    // borderColor: "red",
    // borderWidth: 2,
    borderRadius: 20,
  },
  detailText: {
    color: "white",
  },
  detailTextQty: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  month: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "#E54646",
    fontSize: 23,
    fontWeight: "bold",
  },
  year: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  calenderView:{
    padding:30
  }
});

export default styles;
