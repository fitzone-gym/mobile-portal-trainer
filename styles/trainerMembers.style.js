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
        marginTop:100 
    },
    containerBottom:{
        height:'77%',
        backgroundColor:'red'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'center',
    },
    age: {
        fontSize: 14,
        marginTop: 5,
        alignSelf: 'center',
    },
    });
    
export default styles