import React from 'react';
import styles from '../../styles/dashboard.style';
import Footer_nav from '../../components/FooterStatusbar';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';

export default function chat() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'chat',
                }}
            />
        </SafeAreaView>
    )
}