
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: "black",
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
    height: "50%" /* You must set a specified height */,
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    width: "100%",
    borderLeftBottom: 25,
    borderRightBottom: 25,
  },
  pageHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 32,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
  },
  trainerImage: {
    width: 120,
    height: 130,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#E54646",
    justifyContent: "center",
  },
  trainerDetails: {
    backgroundColor: "#000000c0",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  individualDetailSet:{
    lineHeight: 30,
  },
  detailsList: {
    lineHeight: 30,
  },
  detailsKey: {
    color: "#E54646",
    fontWeight: "bold",
  },
  memberDetails: {
    flexDirection: "row",
    gap: 10,
    marginBottom:20
  },
  detailsList: {
    lineHeight: 50,
  },
  // detailsItem: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 10,
  //   textAlign: "left",
  // },
  detailsKey: {
    color: "#E54646",
    fontWeight: "600",
  },
  detailsValue: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  trainerPackage: {
    marginBottom: 18,
  },
  packages: {
    backgroundColor: "#222222",
    marginBottom: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  packageHeading: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize:16
  },
  detail: {
    fontSize: 13,
    borderWidth: 1, // Use borderWidth instead of border
    borderColor: "white", // Specify the border color
    borderRadius: 15,
    padding: 5,
    margin: 4,
    lineHeight: 30, // lineHeight is valid in React Native
    color: "white",
  },

  packagePrice: {
    color: "#E54646",
    marginLeft: 30,
    fontSize:16
    
  },

  hireBtn: {
    backgroundColor: "#000000c0",
    borderWidth: 1,
    borderColor: "blue",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    alighItem: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  hireBtnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;


