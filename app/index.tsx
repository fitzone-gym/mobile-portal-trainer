import styles from '../styles/index.styles';

import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';

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
                            <Image source={require('../assets/images/f.png')} style={styles.logo}/>
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
                                    router.push('/trainer-signin')
                                }}
                            >
                                <Text style={styles.btnTxt}>Get Started</Text>
                            </TouchableOpacity>
                            <Text style={styles.txt}>Already have an account?-Sign in-</Text>
                        </View>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
}