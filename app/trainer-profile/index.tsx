import styles from "../../styles/home.style";

import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { Stack } from "expo-router";

export default function TrainerProfile() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "Trainer",
        }}
      />

      <ScrollView>
        <View style={styles.container}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
