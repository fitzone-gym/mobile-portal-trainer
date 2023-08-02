import styles from '../../styles/home.style';
import Footer_nav from '../../components/navigation/footer_statusbar'
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Home',
                }}
            />
            {/* <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/home.png')} resizeMode='cover' style={styles.backgroundImage}>
                    <ScrollView>                        
                        <Text style={styles.heading}>Home</Text> 
                        <Footer_nav/>
                    </ScrollView>
                </ImageBackground>
            </View> */}
        </SafeAreaView>
    )
}