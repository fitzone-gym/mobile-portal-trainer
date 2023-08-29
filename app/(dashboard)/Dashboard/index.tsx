import React, { useState, useEffect } from 'react';
import acios from 'axios';
import styles from '../../../styles/dashboard.style';
// import Footer_nav from '../../components/FooterStatusbar';
import { Stack, useRouter } from 'expo-router';
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import baseUrl from '../../../baseUrl'

import {
    IconButton,
    Button
} from "react-native-paper";
import axios from 'axios';
import memberProfileDetailed from '../../MemberProfileDetailed';

interface Announcement {
    annoucement_id: number;
    title: string;
    description: string;
    create_date: Date;
}

export default function Dashboard() {

    const [announcementDetails, setAnnouncementDetails] = useState<Announcement[]>([]);
    const [totalMemberCount, setTotalMemberCount] = useState();

    useEffect(() => {
        axios
            .get(`${baseUrl}/dashboard/announcement`)
            .then((response: { data: { data: any; }; }) => {
                setAnnouncementDetails(response.data.data);
                console.log(response.data.data);
                
            })
            .catch((error: any) => console.error(error));

    }, []);

    useEffect(() => {
        axios
            .get(`${baseUrl}/dashboard/totalMember`)
            .then((response: { data: { data: any; }; }) => {
                const data = response.data.data;
                setTotalMemberCount(data[0].workingMembers);
            })
            .catch((error: any) => console.error(error))
    }, []);

    console.info(totalMemberCount)

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
                            
                            <Text style={styles.heading}>Home</Text>
                            <View style={styles.row}>
                                <View style={styles.profilePic}>
                                    <Image 
                                    source={{ uri:`https://stylioo.blob.core.windows.net/images/Kithsandu.jpg`}}
                                    resizeMode='cover' style={styles.profileImg}></Image>
                                </View>
                                <View style={styles.welcomeNote}>
                                    <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 16 }}>Welcome!</Text>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>Kithsandu Rathnayake</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.totalCount}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, padding: 10, }}>Tottal Members</Text>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 39 }}>{totalMemberCount}</Text>
                                </View>
                                <View style={styles.totRow}>
                                    <View style={styles.memberRequestsCount}>
                                        <View><IconButton icon="account-group" size={16} iconColor='#ffffff' /></View>
                                        <View><Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>New member requests</Text></View>
                                        <View><Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 26, marginRight: 6 }}>6</Text></View>
                                    </View>
                                    <View style={styles.appoinmentCount}>
                                        <IconButton icon="calendar" size={16} iconColor='#ffffff' />
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>Today appoinments</Text>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 26, marginRight: 6 }}>6</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.specialAnnounce}>
                                <Text style={{ color: '#E54646', fontWeight: 'bold', fontSize: 18 }}>SPECIAL NOTICES</Text>
                                {announcementDetails.length > 0 ? (
                                    announcementDetails.map((announcement: any) => (
                                        <View style={styles.data}>
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
                            <Button mode="contained" style={{ backgroundColor: '#E54646' }} onPress={() => {
                                // router.push('/(dashboard)/Members')
                                router.push('../DietPlan')
                            }}>
                                <Text>Diet Plane</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}