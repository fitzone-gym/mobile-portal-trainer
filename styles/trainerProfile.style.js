import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{

    },
    
    backgroundimage: {
        width: '100%',
        minHeight: 850,
    },

    fullcontent:{
        marginLeft:20,
        marginRight:20,
        marginBottom:20,

    },

    topicons:{
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        // height:100,
    },

    sidebaricon:{

    },

    bellicon:{
        
    },

    bottomcontainer:{
        
    },

    text:{
        color: 'white',
        fontSize: 32,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'left',
      },

      imageanddetails:{
        flexDirection:'column',
        alignItems: 'center',
      },

      trainerimage:{
        width: 110,
        height: 134,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
      },

      basicdetails:{
        opacity:0.8,
        height:134,
        width:330,
        backgroundColor:'#222222',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        padding:20,
        flexDirection:'row',
        marginTop:10,
      },

      labelofbasicinfo:{
        color:'#E54646',
        fontWeight: 'bold',
      },

      basicinfo:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        marginLeft:10,
        fontSize:14,
      },

      workingExandmembers:{
        flexDirection:'row',
        alignItems: 'center',

      },

      Workexperience:{
        opacity:0.8,
        height:154,
        width:200,
        backgroundColor:'#222222',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        padding:20,
        alignItems:'center',
        marginTop:10,
      },

      workingextext:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize:14,
      },
      workingexyers:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:60,
      },

      members:{

      },

      lowercontent:{
        flexDirection:'column',
        // alignItems: 'center',
      },

      topictext:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:20,
        paddingTop:10,
      },

      textbox:{
        opacity:0.8,
        minHeight:134,
        width:330,
        backgroundColor:'#222222',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        padding:20,
        marginTop:10,
      },

      newtextbox:{
        opacity:0.8,
        minHeight:134,
        // width:300,
        backgroundColor:'#222222',
        padding:10,
        marginTop:10,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
      },

      detailsList: {
        lineHeight: 50,
      },
      
      detail: {
        fontSize: 13,
        borderWidth: 1, // Use borderWidth instead of border
        borderColor: "white", // Specify the border color
        borderRadius: 15,
        padding: 5,
        margin: 4,
        lineHeight: 30, // lineHeight is valid in React Native
        color: "white",
      },

      startedbutton:{
        margin:20,
        backgroundColor: '#E54646',
      },

      textboxtext:{
        color:'#FFFFFF',
        fontWeight: 500,
        marginLeft:10,
        fontSize:14,
      },

      textboxtexttitle:{
        color:'#838383',
        fontWeight:'bold',
        marginBottom:10,
        fontSize:14,
      },

      // getstartedbutton:{
      //     margin:20,
      //     width: 330,
      //     height: 50,
      //     backgroundColor: '#E54646',
      //     borderRadius: 10,
      //     flex: 1,
      //     alignItems: 'center',
      //     justifyContent: 'center',
      // },

      // getstartedbuttonText:{
      //   fontWeight: 'bold',
      //   fontSize:15,
      //   color: 'white',

      // },

      

})

export default styles