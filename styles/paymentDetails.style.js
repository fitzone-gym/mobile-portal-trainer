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
    paddingTop: 20,
    paddingRight: 20,
},

paymentPageHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
},
contentInline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
},
contentDetails:{
    padding:20,
},
detailContent:{
    backgroundColor:'#ffffff', 
    height:650,   
    borderRadius:8
}
});

export default styles;
