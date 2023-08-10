import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{
        backgroundColor: '#1E1E1E',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500,
        width:'100%',
    },

    topcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 189,
        width:'100%',
    },

    topcontainerimage: {
        width: '100%',
        height: '100%',
    },

    topicons:{
        flex: 1,
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sidebaricon:{
        marginLeft:20,
    },

    bellicon:{
        marginRight:20,
    },

    text:{
        marginLeft:20,
        marginBottom:10,
        color: 'white',
        fontSize: 32,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    bottomcontainer:{
        flexDirection:'row',
        backgroundColor: '#1E1E1E',
        flexWrap: 'wrap',
        minHeight: 550,
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

    trainerimage:{
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

    trainercardname:{
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    trainercardtext:{
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },

    heading: {
        fontSize: 20,
        color: 'white'
    },
    btn: {
        width: 300,
        height: 100,
        backgroundColor: '#1d5a9f',
        color: 'white',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default styles