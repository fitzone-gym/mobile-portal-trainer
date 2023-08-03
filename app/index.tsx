import styles from '../styles/home.style';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";


export default function Home() {
    const router = useRouter()
    return (
      <SafeAreaView>
        <Stack.Screen
          options={{
            title: "Home",
          }}
        />

        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.heading}>Home</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                router.push("/TrainerProfile");
              }}
            >
              <Text>trainer profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                router.push("/MemberProfileDetailed");
              }}
            >
              <Text>member profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                router.push("/TrainerAppointments");
              }}
            >
              <Text>appointments</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                router.push("/Sidebar");
              }}
            >
              <Text>sidebar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                router.push("/SideBarTest");
              }}
            >
              <Text>Test</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}