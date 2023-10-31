import React, {useState, useEffect} from 'react';
import styles from '../../../styles/leaves.styles';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import {View,Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Pressable, Platform} from 'react-native';
import {useAppSelector} from '../../redux/store';
import axios from '../../../axios'
import { Button, Dialog, List, Portal, TextInput } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { current } from '@reduxjs/toolkit';

interface Leave  {
    fromDate:Date | undefined;
    toDate:Date | undefined;
    reason:string;
}

export default function Leaves(){
    
    // const localParams = useLocalSearchParams() 

    const currentUser = useAppSelector(state => state.user)
    const router = useRouter()

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [reason, setReason] = useState('');
    const [type, setType] = useState('');

    const [hoydayTaken ,  setHolidayTaken] = useState<number>(0);

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
     // Fetch the current table values
    console.log('Submit request');
    console.log(currentUser.user_id);
    axios.get(`/trainerLeaves/getLeavesDetails/${currentUser.user_id}`)
    .then((response: {data: {data:any }; }) => {
        setHolidayTaken(response.data.data.holidays_taken);
        console.log("Holidy taken", typeof(response.data.data.holidays_taken));

        console.log(fromDate, toDate, reason, currentUser.user_id, response.data.data.holidays_taken);
        axios.post("/trainerLeaves/makeLeave", {
            user_id: currentUser.user_id,
            from_date: fromDate,
            to_date: toDate,
            reason: reason,
            holidays_taken: response.data.data.holidays_taken,
            no_of_leave_dates: 5,
            no_remaining_leave_date: 5 - response.data.data.holidays_taken,
            status: 1
        })
            .then((res) => {
                if (res.data.success) {
                alert("Successfully sent request");
                    setFromDate('');
                    setToDate('');
                    setReason('');
                } else {
                alert("Failed leave request");
                }
            })
            .catch((err) => {
                console.error(err);
            alert("Failed leave request");
            });
    })
    .catch((error) => {
        console.error("Error fetching current leaves:", error);
        alert("Failed to fetch current leaves");
    });
};
    interface Details{
        leave_request_id:number;
        request_date :Date;
        leave_date :Date;
        reason :string;
    }

    const[pendingLeave , setPendingLeave] = useState<Details[]>([]);
    const[acceptLeave , setAcceptLeave] = useState<Details[]>([]);
    const[rejectLeave , setRejectLeave] = useState<Details[]>([]);

    useEffect(() => {
        // console.log(currentUser.user_id);
        axios
            .get(`/trainerLeaves/getPendingLeave/${currentUser.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                setPendingLeave(response.data.data);
                // console.log("pendingg",response.data.data);                
            })        
            .catch((error: any) => console.error(error));
    },[pendingLeave]);

    useEffect(() => {
        axios
            .get(`/trainerLeaves/getAcceptLeave/${currentUser.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                setAcceptLeave(response.data.data);
                // console.log("accept",response.data.data);                
            })
            .catch((error: any) => console.error(error));

    },[acceptLeave]);

    useEffect(() => {
        axios
            .get(`/trainerLeaves/getRejectLeave/${currentUser.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                setRejectLeave(response.data.data);
                // console.log("reject",response.data.data);                
            })
            .catch((error: any) => console.error(error));

    },[rejectLeave]);


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
                <View style={styles.subContainer}>               
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
                            minimumDate={new Date()}
                        />
                    </View>

                            {/* Leave history */}
                    <Text style={styles.leaveHistoryttl}>Leave History</Text>

                    <View style={styles.leaveHistory}>
                        <View style={styles.Pending} >
                            <Text style={styles.ttl}>Pending Leave Requests</Text>
                            {pendingLeave.length > 0?(
                                pendingLeave.map((leave:any) => (
                                    <View key={leave.leave_request_id} style={styles.set}>
                                        <Text>From: {new Date(leave.request_date).toLocaleDateString('en-US')}</Text>
                                        <Text>To: {new Date(leave.leave_date).toLocaleDateString('en-US')}</Text>
                                        <Text>{leave.reason}</Text>
                                    </View>                                    
                                ))
                            ):(<Text> no data </Text>)
                            }
                        </View>

                        <View style={styles.accept}>
                            <Text style={styles.ttl}>Accepted Leave Requests</Text> 
                            {acceptLeave.length > 0?(
                                acceptLeave.map((leave:any) => (
                                    <View key={leave.leave_request_id} style={styles.set}>
                                        <Text>From: {new Date(leave.request_date).toLocaleDateString('en-US')}</Text>
                                        <Text>To: {new Date(leave.leave_date).toLocaleDateString('en-US')}</Text>
                                        <Text>{leave.reason}</Text>
                                    </View>                                    
                                ))
                            ):(<Text> no data </Text>)
                            }                            
                        </View>

                        <View style={styles.reject}>
                            <Text style={styles.ttl}>Rejected Leave Requests</Text>
                            {rejectLeave.length > 0?(
                                rejectLeave.map((leave:any) => (
                                    <View key={leave.leave_request_id} style={styles.set}>
                                        <Text>From: {new Date(leave.request_date).toLocaleDateString('en-US')}</Text>
                                        <Text>To: {new Date(leave.leave_date).toLocaleDateString('en-US')}</Text>
                                        <Text>{leave.reason}</Text>
                                    </View>                                    
                                ))
                            ):(<Text> no data </Text>)
                            }
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    )
}

function then(arg0: (res: any) => void) {
    throw new Error('Function not implemented.');
}
