import React , {useState,useEffect} from 'react';
import acios from 'axios';
import styles from '../../styles/dashboard.style';
// import Footer_nav from '../../components/FooterStatusbar';
import { Stack, useRouter } from 'expo-router';
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
import axios from 'axios';
import memberProfileDetailed from '../MemberProfileDetailed';

interface Announcement{
    annoucement_id: number;
    title: string;
    description: string;
    create_date:Date;
}

export default function Dashboard() {

    const [announcementDetails, setAnnouncementDetails] = useState<Announcement[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:5400/dashboard/announcement")
            .then((response)=>{
                setAnnouncementDetails(response.data.data);
            })
            .catch((error) => console.error(error));
    },[]);


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
                                <Text style={{color:'#E54646', fontWeight: 'bold', fontSize:18}}>SPECIAL NOTICES</Text>
                                    {announcementDetails.length > 0? (
                                    announcementDetails.map((announcement)=>(
                                        <View style={styles.data}>
                                            <Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:18, marginBottom:10}}>{announcement.title}</Text>
                                            <Text style={{color:'#ffffff'}}>{announcement.description}</Text>
                                        </View>
                                    ))
                                    ):(<Text>No data</Text>)}
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
                            <Button  mode="contained" style={{backgroundColor:'#E54646'}} onPress={() => {
                            router.push('/TrainerMembers')
                                }}>
                                Members
                            </Button>
                        </View>
                    </ScrollView>
                    {/* <Footer_nav/>  */}
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}