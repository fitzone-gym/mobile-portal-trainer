import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        minHeight: '100%',
        // flex: 1,
        // alignItems: 'center',        
    }, 

    backgroundImage:{
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo:{
        width:115,
        height:100,
    },

    top: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    
    bottom:{
        // flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // backgroundColor: '#222222',
        // opacity: 0.7,
        // margin:20,
        // padding:20,
        // borderRadius:17,
        // maxWidth: '80%',
        // maxHeight:'80%',
        // backgroundColor:'red',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222222',
        opacity: 0.7,
        margin:20,
        padding:20,
        borderRadius:17,
        maxHeight:'44%'
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E54646',
        textAlign: 'center'
    },

    subContent: {
        fontSize: 15,
        color: 'white',
    },
    txtInput:{
        fontSize: 14,
        color: 'white',
        opacity: 0.4,
        padding:8,
        borderColor: 'white',
        borderStyle:'solid',
        borderRadius:0.8
    },
    pwtxt:{
        flex: 1,
        color: '#E54646',
        fontSize: 14,
        textAlign: 'right',
    },

    btn: {
        width: 250, 
        height: 50,
        marginTop: 8,
        backgroundColor: '#E54646',    
        borderRadius: 30,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'red',
    },
    btnTxt:{
        fontSize: 23,
        color: 'white',

    },
})

export default styles;