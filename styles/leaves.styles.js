import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        container: {
            minHeight: '100%',        
        },
    },
    backgroundImage:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    scrollView:{
        color: 'white',
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
    leaveForm: {
        marginHorizontal:50,
        marginTop:10,
        width:290,
        backgroundColor:'#ccc',
        padding:20,
        borderRadius:20
    },
    labels:{
        padding:0,
    },
    leaveBtn: {
        marginTop:20,
        padding:20,
        color: "white",
        backgroundColor: "#E54646",
        borderRadius:10,
    },
    leaveBtnTxt:{
        fontSize:16,
        fontWeight: "bold",
        textAlign: "center",
    },
    reason:{
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1, 
        marginTop: 20, 
        padding: 10 
    },
    dateInput:{
        height: 55, 
        borderColor: 'gray',
        borderWidth: 1, 
        marginTop: 12, 
        marginBottom: 20, 
        padding: 10 ,
        borderRadius:5,
    },
    
    subContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    leaveHistoryttl:{
        marginTop:30,
        marginLeft:20,
        fontSize:25,
        color:"#E54646",
        marginBottom:10
    },
    leaveHistory:{
        marginBottom:40,
    },
    Pending:{
        marginHorizontal:50,
        marginTop:10,
        width:350,
        backgroundColor:'#ccc',
        opacity:0.7,
        padding:20,
        borderRadius:20

    },
    accept:{
        marginHorizontal:50,
        marginTop:10,
        width:350,
        backgroundColor:'#ccc',
        opacity:0.7,
        padding:20,
        borderRadius:20

    },
    reject:{
        marginHorizontal:50,
        marginTop:10,
        width:350,
        backgroundColor:'#ccc',
        opacity:0.7,
        padding:20,
        borderRadius:20
    },
    ttl:{
        color:"#fff",
        fontWeight:"bold",
        textAlign:"center",
    },
    set:{
        flex:1,
        flexDirection:"row",
        marginTop:10,
        gap:10,
        backgroundColor:"#000000",
        padding:10,
        borderRadius:20,
        fontWeight:"bold",

    }

})

export default styles;