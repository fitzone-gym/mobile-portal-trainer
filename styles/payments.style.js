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
    height: 178 /* You must set a specified height */,
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    width: "100%",
    borderLeftBottom: 25,
    borderRightBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
paymentRecodes:{
    padding:20,
    flex:1,
    flexDirection: "column",
    gap:10,
},
paymentRecode:{
    backgroundColor:'#3A3B3C',
    width: "100%",
    borderRadius: 10,
    padding:20,
    flexDirection:'column',
    gap:18,
},
rowTop:{
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
},
rowDown:{
    flexDirection: "column",
    gap:3,
}

});

export default styles;
