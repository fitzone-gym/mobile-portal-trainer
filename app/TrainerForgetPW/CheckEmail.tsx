import styles from "../../styles/forgetPassword.style";
import React from 'react';

import{ useRouter ,Stack} from 'expo-router';
import{ Route } from 'expo-router/build/Route';
// import { OtpInput } from "react-native-otp-entry";

import{Text, View, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';

export default function forgetPasswordOTP(){

const router = useRouter();
return(
<SafeAreaView>
    <Stack.Screen
                options={{
                    title: '',
                }}
            />
    <View style={styles.MainContainer}>
        <ImageBackground source={require('../../assets/images/forget-password.png')}
            style={{
                width: '100%',
                height: 700,
        }}>

        <View style={styles.fillLines}>                            
            <View style={styles.fillLine3}></View>
            <View style={styles.fillLine1}></View>
            <View style={styles.fillLine3}></View>
        </View>

        <View style={styles.forgetPasswordText}>
            <Text style={styles.forgetPasswordHeading}>Check email for OTP</Text>
        </View>

        <View style={styles.forgetPasswordSubText}>
            <Text style={styles.forgetPasswordSubheading}>To reset your password, please enter the 4 digit pin sent to your email.</Text>
        </View>

        {/* <View style={styles.otpBox}>
            <OtpInput numberOfDigits={4} onTextChange={(text)=>console.log(text)} focusColor="#E54646" focusStickBlinkingDuration={500}/>
        </View> */}

        <TouchableOpacity style={styles.otpDoneButton} onPress={()=>{router.push('/TrainerForgetPW/ResetPW.tsx')}}>
            <Text style={styles.doneButtonText}>Continue</Text>
        </TouchableOpacity>
        </ImageBackground>
    </View>            
</SafeAreaView>

);
}