import styles from '../../styles/signin.style';
import { View, Text,TextInput, Image, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import { Stack , useRouter} from 'expo-router';
import React from 'react';

export default function signin() {

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
                        <View style={styles.upper}>
                            <View style={styles.top}>
                                <Image source={require('../../assets/images/logo.png')}/>
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
                                <TextInput style={styles.txtInput}  />
                                <Text style={styles.subContent}>Password</Text>
                                <TextInput style={styles.txtInput} autoCorrect={false} secureTextEntry={true} />
                                <TouchableOpacity
                                    onPress={()=>{
                                        router.push('../TrainerForgetPW')
                                    }}
                                >
                                    <Text style={styles.pwtxt}>Forget Password ?</Text>
                                </TouchableOpacity>
                            </View>                            
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    router.push('../TrainerDashboard')
                                }}
                            >
                                <Text style={styles.btnTxt}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
}