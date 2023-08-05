import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',        
    }, 
    backgroundImage:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    scrollView:{
        color: 'white'
    },    
    heading: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlign: 'left',
    },

    scrollView:{
        width: '100%'
    },
    cnt:{
        margin:10,
        padding:5,
        marginTop:0,
    },
    row:{
        flex:1,
        flexDirection: 'row',
        marginTop:10,
        borderRadius:30,
        backgroundColor:'black',
        padding:3,
        opacity:0.7,
    },
    profilePic:{
        borderRadius:30,
        alignItems:'center',
    },
    profileImg:{
        width: 60,
        height: 60,
        borderRadius:30,
        borderColor:'#E54646',
        borderWidth:2
    },
    welcomeNote:{
        paddingLeft:10,
    },
    details:{
        flex:1,
        flexDirection: 'row',
        marginTop:10,
        height:120  ,
        alignItem: 'center',
    },
    totalCount:{
    
        width:"30%",
        backgroundColor:"black",
        aspectRatio:1,
        borderRadius:20,
        opacity:0.7,
        alignItems:'center',
        justifyContent:"center",
    },
    appoinmentCount:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        width:"70%",
        height:"40%",
        marginLeft:5,
        borderRadius:10,
        backgroundColor:"#686A6C"
    }

})

export default styles