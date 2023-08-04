import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    MainContainer:{
        flex:1,
        minHeight:'100%',
    },

    fillLines:{
        flexDirection:'row',
        paddingTop:'10%',
        paddingLeft:'8%',
        paddingRight:'10%',
        gap:10,
    },

    fillLine1:{
        width:100,
        height:5,
        backgroundColor:'#E54646',
        borderRadius:10,
    },
    fillLine2:{
        width:100,
        height:5,
        backgroundColor:'#9A9A9A',
        borderRadius:10,
    },
    fillLine3:{
        width:100,
        height:5,
        backgroundColor:'#9A9A9A',
        borderRadius:10,
    },
    content:{
        marginTop:40,
        height:"90%",
        width:"100%",
        alignItems: 'center',
    },
    forgetPasswordText:{
        marginTop:20,
    },
    forgetPasswordHeading:{
        color:'#E54646',
        fontSize:27
    },

    forgetPasswordSubText:{
        margin:40,
    },

    forgetPasswordSubheading:{
        color:'#9A9A9A',
        fontSize:18,
        textAlign: 'center',
    },

    emailEnterBox:{
        marginLeft:47,
        padding:20,
        width:"90%",
    },
    passwordBox:{
        marginLeft:47,
        padding:20,
        width:"90%"
    },

    passwordBox2:{
        marginLeft:47,
        padding:20,
        width:"90%",
    },

    Heading:{
        color:'#ffffff',
        alignItems: 'center',
    },
    
    input: {
        height: 40,
        borderColor:'#ffffff',
        borderRadius:5,
        borderWidth: 1,
        borderColor:'#E54646',
        padding: 10,
        width: '83%',
        marginTop: 10,
        color:'#ffffff',
    },

    ContinueButton1:{
        marginTop: "30%",
        width:'70%',
        height:45,      
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:40,
    },
    forgetPasswordButtonText:{
        color:'#ffffff',
        fontSize:20,
        paddingLeft:'27%',
        paddingRight:'25%',

    },
    otpBox:{
        width:'80%',
    },

    otpDoneButton:{
        marginTop: "30%",
        width:'70%',
        height:45,      
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:40,
    },

    doneButtonText:{
        color:'#ffffff',
        fontSize:20,
        paddingLeft:'36%',
        paddingRight:'25%',
    },

    otp:{
        color:'#ffffff',
    },

    resetButton:{
        marginTop: "30%",
        width:'60%',
        height:45,      
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:40
    },

    resetPasswordButtonText:{
        color:'#ffffff',
        fontSize:20,
        paddingLeft:'36%',
        paddingRight:'25%',
    }

})

export default styles