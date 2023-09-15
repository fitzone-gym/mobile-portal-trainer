import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        // backgroundColor:'blue'
    }, 

    backgroundImage:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center'
    },

    logo:{
        width:100,
        height:100,
    },

    top: {
        marginTop: 50,
        // backgroundColor:'red'
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
        marginTop: 40,
        backgroundColor: '#E54646',  
        borderRadius: 30,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    btnTxt:{
        fontSize: 20,
        color: 'white',
    },

    underTxt:{
        width: "75%",
        height: "20%",
        marginTop:25,
        marginBottom:0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    txt:{
        color: 'white',
        textAlign: 'center',
    }

})

export default styles;