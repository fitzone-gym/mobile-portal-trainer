import {StyleSheet} from "react-native";

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
  },
  ProfilePageHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E54646",
    marginBottom: "1rem",
  },
  trainerDetailsSection: {
    backgroundColor: "#000000c0",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 15,
    borderRadius: 25,
  },
  trainerImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E54646",
  },
  trainerDetails: {
    flexDirection: "row",
    gap: 10,
  },
  detailsList: {
    lineHeight: 30,
  },
  detailsKey: {
    color: "#E54646",
    fontWeight: "600",
  },
  detailsValue: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    paddingLeft: 40,
    fontWeight: 600,
  },
  profileDetailsButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  fillRedBtn: {
    backgroundColor: "#E54646",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
  },
  fillWhiteBtn: {
    backgroundColor: "white",
    color: "#E54646",
    fontWeight: "bold",
    textTransform: "none",
    borderColor: "white",
  },
  workoutProgressTopic: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  workoutProgressArea:{
    
  }
});
export default styles;