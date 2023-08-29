import { StyleSheet } from "react-native";

/*css */
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "black",
},
image: {
    flex: 1,
    justifyContent: "center",
    height: 300/* You must set a specified height */,
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    width: "100%",
    borderLeftBottom: 25,
    borderRightBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
},
content: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
},
dietPlanHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginRight:250
},
contentInline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
},
top:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    padding: 10,
    gap: 10,
    marginRight:60
},
sets:{
    backgroundColor:"#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 8,
    marginLeft: 0,
},
label:{
    fontSize:17,
    fontWeight:"bold",
    color: '#E54646',
    paddingLeft: 8,
    paddingVertical: 5,
},
textInput:{
    fontSize:17,
    fontWeight:"bold",
    color: '#ffffff',
    paddingRight: 8,
    paddingVertical: 5,
},
bottom:{
    width: "60%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:20,
    marginRight:60
},
sets2:{
    backgroundColor:"#000000",
    opacity:0.7,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 2,
    marginLeft: 0,
    paddingHorizontal:10,
    paddingVertical:8
},
label2:{
    fontSize:17,
    color: '#ffffff',
    paddingLeft: 8,
    paddingVertical: 5,
},
textInput2:{
    fontSize:30,
    fontWeight:"bold",
    color: '#ffffff',
},
details:{
    padding:20,
    flex:1,
    flexDirection: "column",
    gap:10,
    height:260
},
detailTypes:{
    backgroundColor:'#3A3B3C',
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding:20,
    flexDirection:'column',
    gap:18,
},
rowdetail:{
    flexDirection: "row",
    alignItems:'center',
    height:30,
    justifyContent: "space-between",
    fontWeight: "bold",
},
label3:{
    color: '#ffffff',
    fontSize: 18,
},
textInput3:{
    width: 170,
    height:40,
},
menus:[
    
]
});

export default styles;
