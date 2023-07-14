import {StyleSheet} from "react-native";

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
    marginBottom: "2rem",
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
    marginBottom: "1rem",
    borderWidth: 2,
    borderColor: "#E54646",
    justifyContent: "center",
  },
  trainerDetails: {
    backgroundColor: "#000000c0",
    // marginBottom: "1rem",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  detailsList: {
    lineHeight: 30,
  },
  detailsKey: {
    color: "#E54646",
    fontWeight: "bold",
  },
  detailsValue: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    paddingLeft: 40,
    fontWeight: 600,
  },
  trainerPackage:{
    marginBottom:18
  },
  packages: {
    backgroundColor: "#222222",
    marginBottom: "1rem",
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
  },
  detail: {
    fontSize: 12,
    border: "1px solid gray",
    borderRadius: 15,
    padding: 5,
    margin: 4,
    lineHeight: 30,
    color: "white",
  },
  packagePrice: {
    color: "#E54646",
    marginLeft: 30,
  },

  hireBtn: {
    backgroundColor: "#E54646",
    height: 40,
    borderRadius: 10,
    marginLeft:20,
    marginRight:20,
    color:"white",
    fontWeight:"bold",
    textTransform:"none",
    fontSize:15
  },
});

export default styles


