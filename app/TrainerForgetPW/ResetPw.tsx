import styles from "../../styles/forgetPassword.style";

import react from "react";
import { useRouter } from "expo-router";
import {Route} from "expo-router/build/Route";

import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, TextInput } from "react-native";

export default function changePassword(){
const router = useRouter();

const [password, onChangePassword] = react.useState('');
const [forgetPassword, onChangeForgetPassword] = react.useState('');

return(
    <SafeAreaView>
        <View style={styles.MainContainer}>
            <ImageBackground source={require('../../assets/images/forget-password.png')}
            style={{
                width: '100%',
                height: 700,

            }}>


            <View style={styles.fillLines}>                            
                    <View style={styles.fillLine3}></View>
                    <View style={styles.fillLine3}></View>
                    <View style={styles.fillLine1}></View>
            </View>
            <View style={styles.content}>
                <View style={styles.forgetPasswordText}>
                    <Text style={styles.forgetPasswordHeading}>Set New Password</Text>
                </View>

                <View style={styles.forgetPasswordSubText}>
                    <Text style={styles.forgetPasswordSubheading}>Password must be at least 8 characters with numbers and symbols</Text>
                </View>

                <View style={styles.emailEnterBox}>
                    <Text style={styles.emailHeading}>Password :</Text>
                    <TextInput
                                style={styles.input}
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder="Enter Your Password"
                                placeholderTextColor={'#838383'}

                    />
                </View>

                <View style={styles.emailEnterBox2}>
                    <Text style={styles.emailHeading}>Confirm Password :</Text>
                    <TextInput
                                style={styles.input}
                                onChangeText={onChangeForgetPassword}
                                value={forgetPassword}
                                placeholder="Enter Your Password again"
                                placeholderTextColor={'#838383'}
                    />
                </View>

                <TouchableOpacity style={styles.ContinueButton1} onPress={()=>{router.push('/sign-up')}}>
                    <Text style={styles.forgetPasswordButtonText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>        
    </SafeAreaView>
);
}