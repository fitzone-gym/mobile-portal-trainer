import React, { useState , useEffect} from 'react';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../styles/dietPlan.style";
import { TextInput } from 'react-native-paper';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import axios from '../../axios';
import { useAppSelector } from '../redux/store';
// import { Button } from 'react-native-paper';

interface details {
    first_name: string;
    last_name: string;
    weight : number,
    height : number
}

export default function Payments() {
    const router = useRouter()
    const localParams =  useLocalSearchParams();
    // console.log(localParams.user_id); // member id from the ocal params
    const currentUser = useAppSelector(state => state.user);
    // console.log(currentUser.user_id); // trainer id from the session
    

    const[helthDetails , setHelthDetails] =  useState<details[]>([]);

    useEffect(() => {
        // console.log(currentUser.user_id);
        axios
            .get(`/memberDetailsForTrainers/dietPlanDetails/healthDetails/${localParams.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                const data = response.data.data;
                setHelthDetails(response.data.data);
                console.log(response.data.data);
            })
            .catch((error: any) => console.error(error))
    }, []);


    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: "",
                    
                }}
            />
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../assets/images/dietPlan.png")}
                        resizeMode="cover"
                        style={styles.image}
                    >
                        <View style={styles.content}>
                            <View style={styles.contentInline}>
                                <Text style={styles.dietPlanHeading}>
                                    Diet plan
                                </Text>
                            </View>
                        </View>
                        {helthDetails.length > 0 ? (
                        <View style={styles.top}>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Weight:</Text>                                
                                <Text style={styles.textInput}> {helthDetails[0].weight} Kg</Text>                                
                            </View>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Height:</Text>                                
                                <Text style={styles.textInput}>{helthDetails[0].height} cm</Text>                                
                            </View>
                        </View>
                        ) : ( <Text> No helth details available</Text>)}
                    </ImageBackground>

                    <View style={styles.details}>
                        <View style={styles.detailTypes}>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Proteins :</Text>
                                <TextInput style={styles.textInput3}></TextInput>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Carbohydrate :</Text>
                                <TextInput style={styles.textInput3}></TextInput>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Vitamin :</Text>
                                <TextInput style={styles.textInput3}></TextInput>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Sugar :</Text>
                                <TextInput style={styles.textInput3}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menus}>
                        <View>
                            <Text>Breakfast</Text>
                        </View>
                        <View>
                            <Text>Lunch</Text>
                        </View>
                        <View>
                            <Text>Dinner</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}