import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'; // Import the Picker component from the library

const AddExerciseScreen = () => {

return (
    <SafeAreaView>
        <Stack.Screen
    options={{
        title: "schedule form",
    }}
    />
        <ScrollView>
            <View style={{backgroundColor: 'red'}}>
                <Text>hello</Text>
            </View>
        </ScrollView>        
    </SafeAreaView>

);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
header: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 20,
},
});

export default AddExerciseScreen;
