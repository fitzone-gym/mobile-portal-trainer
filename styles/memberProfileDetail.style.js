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
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    borderLeftBottom: 25,
    borderRightBottom: 25,
  },
  ProfilePageHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E54646",
    marginBottom: 16,
  },
  memberDetailsSection: {
    backgroundColor: "#000000c0",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  memberImage: {
    marginTop:10,
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E54646",
  },
  memberDetails: {
    flexDirection: "row",
    gap: 15,
  },
  detailsList: {
    lineHeight: 50,
  },
  profileDetail: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    lineHeight: 50,
    marginBottom: 40,
  },
  detailsKey: {
    color: "#E54646",
    fontWeight: "600",
  },
  detailsValue: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    fontWeight: 600,
  },
  profileDetailsButton: {
    alignItems: "flex-start", // Left-align the child components
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  fillRedBtn: {
    backgroundColor: "#E54646",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
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
    paddingBottom: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  workoutProgressTopic: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom:20
  },
  workoutProgressArea: {
    marginTop: 20,
    backgroundColor: "#000000c0",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 200 /*extra */,
    marginBottom: 30,
  },
  individualHealthDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  healthDetail: {
    // flexDirection: "row",
    // spacing: 2,
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    // marginTop: 20,
    // width: 50,
    // height: 50,
    // backgroundColor: "blue",
    // marginHorizontal: 2,
  },
  individualHealthDetail: {
    backgroundColor: "#000000c0",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // borderColor: "red",
    borderWidth: 2,

    spacing: 4,
  },
  healthTopic: {
    color: "white",
    fontWeight: "500",
    marginBottom: 10,
    fontSize: 12,
  },
  healthLevel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
export default styles;