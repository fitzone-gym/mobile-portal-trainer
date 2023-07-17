import styles from '../../styles/home.style';
// import Tabs from "../../components/navigation/tabs.js";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';

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
                <ImageBackground source={require('../../assets/images/home.png')} resizeMode='cover' style={styles.backgroundImage}>
                    <ScrollView>                        
                        <Text style={styles.heading}>Home</Text> 
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}