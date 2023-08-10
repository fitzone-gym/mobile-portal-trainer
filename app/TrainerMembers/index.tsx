import styles from '../../styles/trainerMembers.style';
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';


export default function trainerMembers() {
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />     
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <ImageBackground
                            source={
                                require('../../assets/images/trainerMemberBack.png')
                            }
                            resizeMode='contain'
                            style={styles.topcontainerimage}>
                            <Text style={styles.text}>My Members</Text>  
                    </ImageBackground>  
                </View>
                <ScrollView>

                </ScrollView>
            </View>                  
        </SafeAreaView>
    )
}