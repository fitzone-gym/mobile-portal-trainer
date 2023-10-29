import React, {useState, useEffect} from 'react';
import styles from '../../../styles/leaves.styles';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import {View,Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Pressable, Platform} from 'react-native';
import {useAppSelector} from '../../redux/store';
import axios from '../../../axios'
import { Button, Dialog, List, Portal, TextInput } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
interface Leave  {
    fromDate:Date | undefined;
    toDate:Date | undefined;
    reason:string;
}

export default function Leaves(){
    
    const localParams = useLocalSearchParams()

    const currentUser = useAppSelector(state => state.user)
    const router = useRouter()

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [reason, setReason] = useState('');
    const [type, setType] = useState('');

    const showDatePicker = (type: React.SetStateAction<string>) => {
        setType(type);
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: { toISOString: () => string; }) => {
      // Assuming 'date' is the selected date
      // Do something with the selected date
        if (type === 'from') {
        setFromDate(date.toISOString().split('T')[0]);
        } else if (type === 'to') {
        setToDate(date.toISOString().split('T')[0]);
        }
        hideDatePicker();
    };

    const submitRequest = () => {
      // Handle the leave request submission
      // You can use the fromDate, toDate, and reason here
        console.log(fromDate, toDate, reason);
        axios 
            .post("/trainerLeaves/makeLeave",{
                user_id: localParams.user_id,
                from_date: fromDate,
                to_date: toDate,
                reason: reason
            })
            .then(res => {
                if(res.data.success) {
                alert("Successfuly send request")                
                }else {
                    alert("Failed leave request")
                }
                }).catch(err => {
                console.log(err);
                alert("Failed leave request")                
                })
    };

    return(
    <SafeAreaView>
        <Stack.Screen
            options = {{
                title:'',
            }}
        />
        <View style={styles.container}>
            <ImageBackground
                        source={require("../../../assets/images/hero-image1.jpg")}
                        resizeMode="cover"
                        style={styles.image}
                    >
            </ImageBackground>
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <View>
                        <View>
                            <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 16 }}>Hello!</Text>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>{currentUser.first_name} {currentUser.last_name}</Text>
                        </View>
                    </View>
                    <View >
                        <View >
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, padding: 10, }}> "Take a break on your terms, whenever you need it."</Text>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 39 }}></Text>
                        </View>
                    </View>
                </View>

                {/* Leave form */}
                <View style={styles.leaveForm}>
                    <Text style={styles.labels}>From Date:</Text>
                    
                    <TouchableOpacity onPress={() => showDatePicker('from')} >
                        <Text style={styles.dateInput}>{fromDate || 'Select From Date'} </Text>
                    </TouchableOpacity>

                    <Text  style={styles.labels}>To Date:</Text>

                    <TouchableOpacity onPress={() => showDatePicker('to')} >                        
                        <Text style={styles.dateInput}>{toDate || 'Select To Date'}</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.reason}
                        onChangeText={text => setReason(text)}
                        value={reason}
                        placeholder="Reason"
                    />

                    <TouchableOpacity onPress={submitRequest}  style={styles.leaveBtn}>
                        <Text style={styles.leaveBtnTxt}>REQUEST</Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                        {/* Leave history */}
                    {/* <Text>Leave History</Text>
                <View>

                </View> */}
                
            </ScrollView>
        </View>
    </SafeAreaView>
    )
}