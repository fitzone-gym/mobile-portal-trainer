import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#ffffff",
    marginBottom: 16,
    marginTop: 26,
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
    marginTop: 10,
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E54646",
  },
  workoutImage:{
    width:"70%"
  },
  dietPlaneImage:{
    width:"70%"
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
  fillButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
},
  outlineButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
},
  workoutProgressTopic: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom:20
  },
  workoutProgressArea: {
    marginVertical: 20,
    backgroundColor: "#000000c0",
    borderRadius: 25,
    borderColor:"#E54646",
    borderWidth:1,
    padding:30,
    alignItems: "center",
    justifyContent: "center",
    height: 100 ,
    
  },
  individualHealthDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  healthDetail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  individualHealthDetail: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: "#000000c0",
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:5,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
  },
  healthTopic: {
    color: "#ffffff",
    fontWeight: "500",
    marginBottom: 10,
    fontSize: 16,
  },
  healthLevel: {
    color: "#E54646",
    width: 120,
    fontWeight: "bold",
    fontSize: 21,
    
  },
});
export default styles;