import React from 'react';

import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

export default function Payments() {
    const router = useRouter()

    return (
        <SafeAreaView>
            <View>
                <Text>Payment Page</Text>
            </View>
        </SafeAreaView>
    )
}