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
        justifyContent: 'space-between',
        alignItem: 'center',
    },
    totalCount:{
    
        width:"33%",
        backgroundColor:"black",
        aspectRatio:1,
        borderRadius:20,
        opacity:0.7,
        alignItems:'center',
        justifyContent:"center",
    },
    
    appoinmentCount:{
        width:"53%",
        backgroundColor:"black",
        borderRadius:20,
        opacity:0.7,
        alignItems:'center',
        justifyContent:"center",
    },
    specialAnnounce:{
        marginTop:20,
    },
    data:{
        backgroundColor:'#000000',
        opacity:0.7,
        padding:18,
        borderRadius:30,
        borderLeftColor:'#E54646',
        borderWidth:2,
    },
    upNext:{
        alignItems:'center',
        marginBottom:20,
    },
    upNextInner:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#34282C',
        opacity:0.7,
        padding:6,
        borderRadius:30,
        borderColor:'#E54646',
        width:'100%'
        
    },
    proPic:{
        marginHorizontal:10
    },
    Name:{

    }
})

export default styles