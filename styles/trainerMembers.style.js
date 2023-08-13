import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },  
    containerTop:{
        height:'23%',
        // backgroundColor:'red'

    },
    topcontainerimage:{
        height:'100%',
        width:'100%',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    },
    text:{
        fontSize:25, 
        marginLeft:30, 
        marginTop:100 ,
        color:'#ffffff'
    },
    containerBottom:{
        height:'77%',
        backgroundColor:'red'
    },
    mainCard:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
    },

    trainercards:{
        backgroundColor:'#222222',
        height:158,
        width: 170,
        margin: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    memberimage:{
        width:80,
        height:80,
        borderColor: 'red',
        borderWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignSelf: 'center',
        marginTop:15,

    },

    membercardname:{
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    membercardtext:{
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    
    });
    
export default styles