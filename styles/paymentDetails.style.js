import { StyleSheet } from "react-native";

/*css */
const styles = StyleSheet.create({

container: {
    flex: 1,
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
detailContent:{
    backgroundColor:'#000000', 
    height:650,   
    borderRadius:8,
    margin:15,
    gap:10,
},
detailsRow:{
    padding:20,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap:8,
    borderBottomColor:"#E54646",
    borderWidth:0.3,
    borderRadius:10,
},
left:{

},
leftDown:{
    gap:6,
},

right:{
    marginTop:10,
    gap:8,
},
fullName:{
    flexDirection:'row',
    paddingVertical:10,
}
});

export default styles;
