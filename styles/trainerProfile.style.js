import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    paddingLeft:20,
    paddingBottom:20,
    paddingTop:20,
    paddingRight:20
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "75%" /* You must set a specified height */,
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
    border: "2px solid #E54646",
    justifyContent: "center",
  },
  trainerDetails: {
    backgroundColor: "#000000c0",
    marginBottom: "10rem",
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
});

export default styles


