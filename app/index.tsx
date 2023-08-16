import React from 'react';
import { View, Text } from 'react-native';
import GetStarted from './getStarted';
import { Redirect } from 'expo-router';

export default function Home() {
    return (
        <GetStarted />
        // <Redirect href="/(dashboard)/Dashboard"></Redirect>
    )
}