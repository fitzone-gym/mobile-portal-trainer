import styles from '../styles/index.styles';

import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
                <View style={styles.container}>
                    <ImageBackground source= {require('../assets/images/index.png')}resizeMode='cover' style={styles.backgroundImage}>
                        <View style={styles.top}>
                            <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.bottom}>

                            <Text style={styles.heading}>
                            Increase your target to be healthier to continue exercising
                            </Text>

                            <Text style={styles.subHeading}>
                                This application can improve yourself to have exercise 
                                smartly and be physically active
                            </Text>

                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    router.push('/TrainerSignin')
                                }}
                            >
                                <Text style={styles.btnTxt}>Get Started</Text>
                            </TouchableOpacity>

                            <View style={styles.underTxt}>
                                <Text style={styles.txt}>Don't you have an account?</Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        router.push('/TrainerSignup');
                                    }}
                                >
                                    <Text  style={{ color: '#E54646' }}>Sign up</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
}