import styles from '../../styles/signin.style.js';
import { View, Text,TextInput, Image, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import { Stack , useRouter} from 'expo-router';

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
                    <ImageBackground source= {require('../../assets/images/signin.png')}resizeMode='cover' style={styles.backgroundImage}>
                        <View style={styles.top}>
                            <Image source={require('../../assets/images/f.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.heading}>
                                Sign In
                            </Text>
                            <View>
                                <Text style={styles.subContent}>User Name</Text>
                                <TextInput style={styles.txtInput} placeholder="Enter username" />
                                <Text style={styles.subContent}>Password</Text>
                                <TextInput style={styles.txtInput} placeholder="Enter password" secureTextEntry={true} />
                            </View>                            
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    router.push('/trainer-dashboard')
                                }}
                            >
                                <Text style={styles.btnTxt}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
}