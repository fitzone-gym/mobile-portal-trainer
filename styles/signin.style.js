import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100%',
    }, 

    backgroundImage:{
        flex: 1,
        justifyContent: 'center',
        height: '100%',
    },

    top: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    logo:{
        width:115,
        height:100,
    },
    bottom:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222222',
        opacity: 0.7,
        margin:1,
        padding:20,
        borderRadius:17,
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

    },
    btn: {
        width: 315, 
        height: 56,
        marginTop: 10,
        backgroundColor: '#E54646',        
        
        borderRadius: 30,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    btnTxt:{
        fontSize: 23,
        color: 'white',

    },
})

export default styles;