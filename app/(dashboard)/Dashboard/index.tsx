import React, { useState, useEffect } from 'react';
import styles from '../../../styles/dashboard.style';
import { Stack, useRouter } from 'expo-router';
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../redux/store';
import axios from '../../../axios'

import {
    IconButton,
    Button
} from "react-native-paper";

interface Announcement {
    annoucement_id: number;
    title: string;
    description: string;
    create_date: Date;
}

export default function Dashboard() {

    const currentUser = useAppSelector(state => state.user)

    
    const [announcementDetails, setAnnouncementDetails] = useState<Announcement[]>([]);
    const [totalMemberCount, setTotalMemberCount] = useState<number>();

    useEffect(() => {
        axios
            .get(`/dashboard/announcement`)
            .then((response: { data: { data: any; }; }) => {
                setAnnouncementDetails(response.data.data);
                // console.log(response.data.data);                
            })
            .catch((error: any) => console.error(error));

    }, []);

    useEffect(() => {
        // console.log(currentUser.user_id);
        axios
            .get(`/dashboard/totalMember/${currentUser.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                const data = response.data.data;
                setTotalMemberCount(data[0].workingMembers);
            })
            .catch((error: any) => console.error(error))
    }, []);
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/images/home.png')} resizeMode='cover' style={styles.backgroundImage}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.cnt}>
                            
                            {/* <Text style={styles.heading}>Home</Text> */}
                            <View style={styles.row}>
                                <View style={styles.profilePic}>
                                    <Image 
                                    source={{ uri:`https://stylioo.blob.core.windows.net/images/${currentUser.image}`}}
                                    resizeMode='cover' style={styles.profileImg}></Image>
                                </View>
                                <View style={styles.welcomeNote}>
                                    <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 16 }}>Welcome!</Text>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>{currentUser.first_name} {currentUser.last_name}</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.totalCount}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, padding: 10, }}>Total Members</Text>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 39 }}>
                                        {totalMemberCount !== undefined && totalMemberCount < 10 ? `0${totalMemberCount}` : totalMemberCount}
                                    </Text>
                                </View>                                
                                    <View style={styles.appoinmentCount}>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, padding: 10 }}>Today appoinments</Text>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 39, marginRight: 6 }}>03</Text>
                                    </View>
                            </View>
                            <View style={styles.specialAnnounce}>
                                <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 18 }}>SPECIAL NOTICES</Text>
                                {announcementDetails.length > 0 ? (
                                    announcementDetails.map((announcement: any) => (
                                        <View style={styles.data} key={announcement.announcement_id}> 
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>{new Date(announcement.create_date).toLocaleDateString('en-US')}                                      {new Date(announcement.create_date).toLocaleTimeString('en-US')}</Text>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{announcement.title}</Text>
                                            <Text style={{ color: '#ffffff' }}>{announcement.description}</Text>
                                        </View>
                                    ))
                                ) : (<Text>No data</Text>)}
                            </View>

                            <View style={styles.upNext}>
                                <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Up Next Appointment</Text>
                                <View style={styles.upNextInner}>
                                    <View>
                                        <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>1.00 PM - 3.00 PM    </Text>
                                    </View>
                                    <View style={styles.proPic}>
                                        <View style={styles.profilePic}>
                                            <Image source={require('../../../assets/images/trainer-1.jpg')} resizeMode='cover' style={styles.profileImg}></Image>
                                        </View>
                                    </View>
                                    <View style={styles.Name}>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Mr.Samuel</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}