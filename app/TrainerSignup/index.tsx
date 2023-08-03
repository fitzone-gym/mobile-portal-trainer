
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Signup page',
                }}
            />
        </SafeAreaView>
    )
}