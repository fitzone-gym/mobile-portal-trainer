import styles from '../styles/home.style';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
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
            
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Home</Text>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            router.push('/sidebar')
                        }}
                    >
                        <Text>Click</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}