
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/signup.style'

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Signup page',
                }}
            />
            
            <View style={styles.container}>
                <ImageBackground source= {require('../../assets/images/signin.png')}resizeMode='cover' style={styles.backgroundImage}>
                    <View style={styles.form}>
                        <Text style={styles.heading}>
                            Sign Up
                        </Text>

                        <View style={styles.signinTxt}>
                            <Text style={styles.subContent}>User Name</Text>
                            <TextInput style={styles.txtInput}  />
                            <Text style={styles.subContent}>Password</Text>
                            <TextInput style={styles.txtInput}  secureTextEntry={true} />
                        </View>    

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                router.push('../TrainerDashboard')
                            }}
                        >
                            <Text style={styles.btnTxt}>Sign in</Text>
                        </TouchableOpacity>

                        <View>
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