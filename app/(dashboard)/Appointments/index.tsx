import * as React from "react";
import { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "../../../styles/trainer-appointments.style";

import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


export default function appointments() {
    /*for routing*/
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: "",
                    //   headerLeft: null,
                }}
            />

            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../../assets/images/hero-image1.jpg")}
                        resizeMode="cover"
                        style={styles.image}
                    >
                    </ImageBackground>

                    <View style={styles.appointmentList}>
                        <View>
                            <Text style={styles.appointmentDate}>Wednsday, 14 July.</Text>
                        </View>
                        <View style={styles.appointments}>
                            {(["1", "2", "3", "4", "5"] as const).map((anchor) => (
                                <View style={styles.individualAppointment}>
                                    <View style={styles.individualAppointmentContent}>
                                        <View>
                                            <Text style={styles.time}>8.00 A.M - 10.00 A.M</Text>
                                            <View style={styles.member}>
                                                <Image
                                                    source={require("../../../assets/images/trainer-1.jpg")}
                                                    style={styles.userImage}
                                                />
                                                <Text style={styles.name}>Mr. Kevin Salgado</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.status}>Booked</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
