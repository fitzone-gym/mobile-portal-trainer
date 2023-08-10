import React from 'react';
import styles from '../../styles/dashboard.style';
import Footer_nav from '../../components/FooterStatusbar';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
    List,
    MD3Colors,
    Button
} from "react-native-paper";

import { Stack, useRouter } from 'expo-router';

export default function dashboard() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/home.png')} resizeMode='cover' style={styles.backgroundImage}>
                    <ScrollView style={styles.scrollView}>  
                        <View style={styles.cnt}>
                            <View>
                                <Text>top nav icon</Text>  
                            </View>                     
                            <Text style={styles.heading}>Home</Text> 
                            <View style={styles.row}>
                                <View style={styles.profilePic}>
                                    <Image source={require('../../assets/images/trainer-1.jpg')} resizeMode='cover' style={styles.profileImg}></Image>
                                </View>
                                <View style={styles.welcomeNote}>
                                    <Text style={{color:'#E54646' , fontWeight: 'bold', fontSize:16}}>Welcome!</Text>
                                    <Text style={{color:'#ffffff' , fontWeight: 'bold', fontSize:20}}>Kamal Suraweera</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.totalCount}>
                                    <Text style={{color:'#ffffff' , fontWeight: 'bold', fontSize:13, padding:10,}}>Tottal Members</Text>
                                    <Text style={{color:'#ffffff' , fontWeight: 'bold', fontSize:39}}>15</Text>
                                </View>
                                <View style={styles.totRow}>
                                    <View style={styles.memberRequestsCount}>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16,marginLeft:6}}>emoj</Text></View>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16}}>New member requests</Text></View>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:26,marginRight:6}}>6</Text></View>
                                    </View>
                                    <View style={styles.appoinmentCount}>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16,marginLeft:6}}>emoj</Text></View>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16}}>Today appoinments</Text></View>
                                        <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:26,marginRight:6}}>6</Text></View>
                                    </View>
                                </View>
                            </View>  

                            <View style={styles.specialAnnounce}> 
                                <Text style={{color:'#E54646', fontWeight: 'bold', fontSize:18}}>Special Notices</Text>
                                <View style={styles.data}>
                                    <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:18, marginBottom:10}}>23rd and 24th augest closed</Text>
                                    <Text>
                                        2023 August 23 and 24 full day gym closed. Full day repairmen and new gym machine fixing going on.
                                    </Text>
                                </View>

                                <View style={styles.data}>
                                    <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:18, marginBottom:10}}>New Zumba class</Text>
                                    <Text>
                                        Starting 29 th July on ward. Zumba class for all age members. From begin to end. Conducting by highly qualified zumba masters. 
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.upNext}> 
                                <Text style={{color:'#E54646', fontWeight: 'bold', fontSize:18, marginBottom:10}}>Up Next Appointment</Text>
                                <View style={styles.upNextInner}>
                                    <View>
                                        <Text style={{color:'#E54646', fontWeight: 'bold', fontSize:15, marginBottom:10}}>8.00 AM - 10.00 AM    </Text>
                                    </View>
                                    <View style={styles.proPic}>
                                        <View style={styles.profilePic}>
                                            <Image source={require('../../assets/images/trainer-1.jpg')} resizeMode='cover' style={styles.profileImg}></Image>
                                        </View>
                                    </View>
                                    <View style={styles.Name}>
                                        <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:15, marginBottom:10}}>Mr.Samuel</Text>
                                    </View>
                                </View>
                            </View>
                            <Button  mode="contained" onPress={() => {
                            router.push('/TrainerMembers')
                                }}>
                                ourTrainers
                            </Button>
                        </View>
                    </ScrollView>
                    <Footer_nav/> 
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}