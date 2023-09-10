import React, { useEffect, useState } from 'react';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../../styles/paymentDetails.style";
import axios from 'axios';
import baseUrl from '../../../baseUrl';


interface details{
    amount: number;
    member_id: number;
    payment_made_date: Date;
}
export default function Payments() {

    const router = useRouter();

    const localParams  = useLocalSearchParams() 
    console.log(localParams);

    const [paymentDetails,setPaymentDetails ] = useState<details[]>([]);

    useEffect(() =>{
        if (localParams.month){
            console.log(localParams.month); 
            console.log(localParams.staff_id); 
            axios
            .get(`${baseUrl}/payment/paymentDetails/${localParams.month}/${localParams.staff_id}`)
            .then((response:{data:{data:any;};})=>{
                setPaymentDetails(response.data.data);
                console.log(paymentDetails);
            })
            .catch((error: any) => console.error(error))
        }
    },[]);

   

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: "",
                    
                }}
            />
            <ScrollView>
                <View style={styles.container}>
                        <View style={styles.content}>
                        </View>
                        <View style={styles.contentDetails}>
                                <View style={styles.detailContent}>
                                {paymentDetails.length > 0 ? (
                                        paymentDetails.map((paymentDetail: any) => (
                                            <View key={paymentDetail.payment_id} style={{backgroundColor: "red"}}>
                                                <Text>{paymentDetail.member_id}</Text>
                                                <Text>{paymentDetail.payment_made_date}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text>No data</Text>
                                )}
                                </View>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}