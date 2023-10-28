import styles from '../styles/signin.style';
import { View, Text, TextInput, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import axios from '../axios'
import {useAppDispatch} from './redux/store'
import {setUser} from './redux/features/userSlice'

export default function Signin() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleLogin = () =>{
        //simulating a simple login logic
        
        if(email === '' || password === ''){
            setError("Invalid Username or Password");
            alert("Invalid Username or Password")
        }
        else{
            setError("");
                
                axios.post('/auth/login/trainer', {
                    email: email,
                    password: password
                }).then((response)=>{
                
                    if(response.data.success){
                        const currentUser = response.data.data;
                        console.log(currentUser);  

                        dispatch(setUser({
                            user_id: currentUser.user_id,
                            first_name: currentUser.first_name,
                            last_name: currentUser.last_name,
                            image: currentUser.profile_picture,
                            role_id : currentUser.user_role
                            
                        }))
                        
                        router.push('(dashboard)/Dashboard')                                                      
                            }
                    else{
                        setError(response.data.error)
                        console.log(response.data.error)
                        alert(response.data.error)
                    }
                })
            
            .catch((err)=>{
                console.log(err);  
                
            })
        }
    };

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/signin.png')} resizeMode='cover' style={styles.backgroundImage}>
                    <View style={styles.upper}>
                        <View style={styles.top}>
                            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                        </View>
                        <View style={styles.upperdiv}>
                            <Text style={styles.upperTxt}>
                                Exercise smartly and be physically active
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>
                            Sign In
                        </Text>
                        <View style={styles.signinTxt}>
                            <Text style={styles.subContent}>User Name</Text>
                            <TextInput style={styles.txtInput} onChangeText={(text) => setEmail(text)}/>
                            <Text style={styles.subContent}>Password</Text>
                            <TextInput style={styles.txtInput} onChangeText={(text) => setPassword(text)} autoCorrect={false} secureTextEntry={true}  />
                            <TouchableOpacity
                                onPress={() => {
                                    router.push('../TrainerForgetPW')
                                }}
                            >
                                <Text style={styles.pwtxt}>Forget Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={handleLogin}                        
                            
                        >
                            <Text style={styles.btnTxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}