
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {CheckBox, Button} from 'react-native-elements'
import styles from '../../styles/signup.style'


export default function () {     

const [isChecked, setIsChecked] = useState(false);
const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
};

const handleRegister = () => {
    if (isChecked) {
    // Perform registration logic here
    } else {
    // Display a message or prevent registration
    }
};

const router = useRouter()

return (
    <SafeAreaView>
        <Stack.Screen
            options={{
                title: '',
            }}
        />
        
        <View style={styles.container}>
            <ImageBackground source= {require('../../assets/images/signin.png')}resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.form}>
                    <Text style={styles.heading}>
                        SIGN UP
                    </Text>

                    <View style={styles.signinTxt}>
                        <Text style={styles.subContent}>First Name</Text>
                        <TextInput style={styles.txtInput}  />
                        <Text style={styles.subContent}>Last Name</Text>
                        <TextInput style={styles.txtInput}/>  
                        <Text style={styles.subContent}>Email</Text>
                        <TextInput style={styles.txtInput}/>    
                        <Text style={styles.subContent}>Mobile No</Text>
                        <TextInput style={styles.txtInput}/>   
                        <Text style={styles.subContent}>Age</Text>
                        <TextInput style={styles.txtInput}/>
                    </View>    

                    <View style = {styles.terms}> 
                        <CheckBox
                            title="I agreed to all Terms, Privacy Policy and Fees"
                            checked={isChecked}
                            onPress={handleCheckboxChange}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText} 
                            checkedColor='#E54646'
                        />
                    </View>

                    <Button 
                        title="SIGN UP"
                        onPress={handleRegister}
                        disabled={!isChecked} // Disable the button if checkbox is not checked
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.titleStyle}
                    />
                    
                    <View style={styles.underTxt}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity
                                onPress={()=>{
                                    router.push('../TrainerSignin')
                                }}
                            >
                                <Text style={styles.pwtxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    </SafeAreaView>
)
}