import React, { useEffect, useState } from 'react';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from "../../../styles/paymentDetails.style";
import axios from '../../../axios'


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
            .get(`/payment/paymentDetails/${localParams.month}/${localParams.staff_id}`)
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
                        <View style={styles.detailContent}>
                        {paymentDetails.length > 0 ? (
                                paymentDetails.map((paymentDetail: any) => (
                                    <View key={paymentDetail.payment_id} style={styles.detailsRow}>
                                        <View style={styles.left}>
                                            <View style={styles.fullName}>
                                                <Text style={{ fontSize:18, fontWeight:'bold', color:"#E54646"}}>{paymentDetail.first_name}  </Text>
                                                <Text style={{ fontSize:18, fontWeight:'bold',color:"#E54646"}}>{paymentDetail.last_name}</Text>
                                            </View>
                                            <View style={styles.leftDown}>
                                                <Text>NIC:  {paymentDetail.nic}</Text>
                                                <Text>Mobile no:  {paymentDetail.phone_no}</Text>
                                                <Text>email:  {paymentDetail.email}</Text>
                                            </View>
                                            <Text style={{color:'green', fontWeight:'bold', marginTop:20}}>TRANSACTION COMPLETED</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={{ fontSize:22, fontWeight:'bold'}}>LKR: {paymentDetail.amount}</Text>
                                            <Text>{paymentDetail.payment_date}</Text>
                                            <Text>{paymentDetail.payment_time}</Text>
                                        </View>
                                        
                                    </View>
                                ))
                            ) : (
                                <Text>No data</Text>
                        )}
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}