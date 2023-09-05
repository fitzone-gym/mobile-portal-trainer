import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/scheduleform.style';
import { TextInput } from 'react-native-paper';

const AddExerciseScreen = () => {

const [text, setText] = React.useState("");

return (
    <SafeAreaView>
        <Stack.Screen
    options={{
        title: "schedule form",
    }}
    />
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
            </View>
        </ScrollView>        
    </SafeAreaView>

);
};

export default AddExerciseScreen;
