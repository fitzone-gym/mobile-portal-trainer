import React, { useEffect, useState } from 'react';

import { Stack, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../../styles/payments.style";
import { Button } from 'react-native-paper';
import axios from '../../../axios'
// import baseUrl from '../../../baseUrl';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface totPayment{
    staff_id:number,
    payment_month: string;
    total_payment: number;
}
export default function Payments() {
    const [totalPayments, setTotalPayment] = useState<totPayment[]>([]);

    useEffect(() =>{
        axios
        .get(`/payment/totalPayments`)
        .then((response:{data:{data:any;};})=>{
            setTotalPayment(response.data.data);
            // console.log(response.data.data);
        })
        .catch((error: any) => console.error(error))
    },[]);
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
                                <Button mode="contained" style={{ backgroundColor: '#E54646' , width:200,height:42 }} 
                                onPress={() => {
                                // router.push('/(dashboard)/Members')
                            }}>
                                <Text>GENERATE REPORT</Text>
                            </Button>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.paymentRecodes}>
                        {totalPayments.length > 0 ? (
                                    totalPayments.map((totPayment: any) => (
                                        <View style={styles.paymentRecode}>
                                        <View style={styles.rowTop}>
                                            <Text style={{color:'#E54646', fontSize:18}}>{totPayment.payment_month}</Text>
                                            <Text style={{color:'#ffffff',fontSize:16,fontWeight: "bold",}}>LKR:  {totPayment.total_payment}</Text>
                                            <TouchableOpacity
                                                onPress={()=>{
                                                    router.push({
                                                        pathname:'/Payments/paymentDetails',
                                                        params: {
                                                            month:totPayment.payment_month,
                                                            staff_id:totPayment.staff_id
                                                        }
                                                    })
                                                }}
                                            >
                                                <Text style={{color:'green', fontSize:17,fontWeight: "bold",}}>CHECK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    ))
                        ) : (<Text>No data</Text>)}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}