import React from 'react';

import { Stack, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../../styles/payments.style";
import { Button } from 'react-native-paper';

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
                        source={require("../../../assets/images/hero-image1.jpg")}
                        resizeMode="cover"
                        style={styles.image}
                    >
                        <View style={styles.content}>
                            <View style={styles.contentInline}>
                                <Text style={styles.paymentPageHeading}>
                                    Payments
                                </Text>
                                <Button mode="contained" style={{ backgroundColor: '#E54646' , width:200,height:42 }} onPress={() => {
                                router.push('/(dashboard)/Members')
                            }}>
                                <Text>GENERATE REPORT</Text>
                            </Button>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.paymentRecodes}>
                        <View style={styles.paymentRecode}>
                            <View style={styles.rowTop}>
                                <Text style={{color:'#E54646', fontSize:20}}>June</Text>
                                <Text style={{color:'#ffffff',fontSize:16,fontWeight: "bold",}}>LKR 100,000.00</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>CECKED</Text>
                            </View>
                            <View style={styles.rowDown}>
                                <Text style={{color:'#ffffff',fontSize:16}}>Payment Maid Date</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>2023-05-06</Text>
                            </View>
                        </View>
                        <View style={styles.paymentRecode}>
                            <View style={styles.rowTop}>
                                <Text style={{color:'#E54646', fontSize:20}}>June</Text>
                                <Text style={{color:'#ffffff',fontSize:16,fontWeight: "bold",}}>LKR 100,000.00</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>CECKED</Text>
                            </View>
                            <View style={styles.rowDown}>
                                <Text style={{color:'#ffffff',fontSize:16}}>Payment Maid Date</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>2023-05-06</Text>
                            </View>
                        </View>
                        <View style={styles.paymentRecode}>
                            <View style={styles.rowTop}>
                                <Text style={{color:'#E54646', fontSize:20}}>June</Text>
                                <Text style={{color:'#ffffff',fontSize:16,fontWeight: "bold",}}>LKR 100,000.00</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>CECKED</Text>
                            </View>
                            <View style={styles.rowDown}>
                                <Text style={{color:'#ffffff',fontSize:16}}>Payment Maid Date</Text>
                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>2023-05-06</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}