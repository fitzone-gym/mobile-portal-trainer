import * as React from "react";
import { useState, useEffect } from "react";
import axios from "../../../axios";
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
import {useAppSelector} from '../../redux/store';

interface Appointments{
    id:number,
    first_name: string;
    last_name: string;
    selectedDate: Date;
    selectedTime: string;
}


export default function appointments() {
    /*for routing*/
    const router = useRouter();

    const currentUser = useAppSelector(state => state.user);

    const [trainerAppointments, setTrainerAppointments] = useState<Appointments[]>([]);



    useEffect(()=>{
        const trainer_id = currentUser.user_id;
        axios
            .get(`/trainerAppointments/viewAppointments/${trainer_id}`)
            .then((response: {data : {data: any;}; })=>{
                const data = response.data.data;
                console.log(response.data.data);
                setTrainerAppointments(response.data.data);
            })
            .catch((error: any) => console.log(error));
    },[]);


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
                        <View style={styles.appointments}>
                            {trainerAppointments.length > 0? (
                                trainerAppointments.map((appointment:any) => (
                                    <View style={styles.individualAppointment} key={appointment.id}>
                                        <Text style={styles.name}>{appointment.first_name}  {appointment.last_name}</Text>
                                        <View style={styles.dateTime}>
                                            <Text style={styles.time}>{new Date(appointment.selectedDate).toLocaleDateString('en-US')}  </Text>
                                            <Text style={styles.time}>      {appointment.selectedTime}</Text>
                                        </View>                                           
                                    </View>
                                ))
                            ):(<Text> </Text>)}
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
