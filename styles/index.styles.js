import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        minHeight: '200%',
        // backgroundColor:'blue'
    }, 

    backgroundImage:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center'
    },

    logo:{
        width:115,
        height:100,
    },

    top: {
        marginTop: 10
    },

    bottom:{
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
        color: 'white',
        textAlign: 'center'
    },

    subHeading: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',        
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

    txt:{
        color: 'white',
        textAlign: 'center',
    }

})

export default styles;