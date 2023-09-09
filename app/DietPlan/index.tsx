import React from 'react';

import { Stack, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../styles/dietPlan.style";
import { TextInput } from 'react-native-paper';
// import { Button } from 'react-native-paper';

export default function Payments() {
    const router = useRouter()

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
                        <View style={styles.top}>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Weight:</Text>                                
                                <Text style={styles.textInput}>85Kg</Text>                                
                            </View>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Height:</Text>                                
                                <Text style={styles.textInput}>156cm</Text>                                
                            </View>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Age:</Text>                                
                                <Text style={styles.textInput}>26</Text>                                
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.sets2}>
                                <Text style={styles.label2}>Calories per day</Text>                                
                                <Text style={styles.textInput2}>220</Text>                                
                            </View>
                            <View style={styles.sets2}>
                                <Text style={styles.label2}>Steps per day</Text>                                
                                <Text style={styles.textInput2}>3000</Text>                                
                            </View>
                        </View>
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