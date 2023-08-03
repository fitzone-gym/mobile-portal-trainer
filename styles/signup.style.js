import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    
    container: {
        minHeight: '100%',       
    }, 
    backgroundImage:{
        flex: 1,
        justifyContent:'space-between',
        height: '110%',
        width: '100%',
    },

    form:{
        alignItems: 'center',
        backgroundColor: '#222222',
        opacity: 0.9,
        margin:17,
        padding:0,
        borderRadius:17,
        height:"96%",
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E54646',
        marginTop:10
    },
    signinTxt:{
        justifyContent: 'center',
        padding:20,
        width:"100%",
    },
    subContent: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign:'left'
    },
    txtInput:{
        fontSize: 14,
        color: 'white',
        padding:3,
        borderBottomWidth: 1, 
        borderColor: '#E54646',
        marginBottom:30
    },
    terms:{
        marginBottom:20,
    },
    underTxt:{
        flexDirection: 'row',
        width:"61%",
        alignItems:'center',
        justifyContent: 'space-between',
    },

    pwtxt:{
        color: '#E54646',
        fontSize: 16,
        textAlign: 'right',
    },

    checkboxContainer: {
    backgroundColor: 'transparent', 
    borderWidth: 0, 
    },

    checkboxText: {
    fontWeight: 'normal', 
    },

    buttonStyle: {
    width: 250, 
    height: 50,
    marginBottom: 20,
    backgroundColor: '#E54646',   
    borderRadius: 30,
    },

    titleStyle:{
        fontSize: 20,
        color: 'white',
    }
})

export default styles;