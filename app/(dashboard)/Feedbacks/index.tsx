import React from 'react';

import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

export default function Feedbacks() {
    const router = useRouter()

    return (
        <SafeAreaView>
            <View>
                <Text>Payment Page</Text>
            </View>
        </SafeAreaView>
    )
}