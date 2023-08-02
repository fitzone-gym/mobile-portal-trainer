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
    
    heading: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlign: 'left',
    },

    scrollView:{
        width: '100%',
        // backgroundColor:'red'
    }

})

export default styles