import styles from '../../styles/dashboard.style';
import Footer_nav from '../../components/FooterStatusbar'
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
    MD3Colors
} from "react-native-paper";

import { Stack, useRouter } from 'expo-router';

export default function Home() {
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
                                    <Text style={{color:'#ffffff' , fontWeight: 'bold', fontSize:12, padding:10,}}>Tottal Members</Text>
                                    <Text style={{color:'#ffffff' , fontSize:35}}>15</Text>
                                </View>
                                <View style={styles.appoinmentCount}>
                                    <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16,marginLeft:6}}>emoj</Text></View>
                                    <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:16}}>Today appoinments</Text></View>
                                    <View><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:26,marginRight:6}}>6</Text></View>
                                </View>
                            </View>                            
                        </View>
                    </ScrollView>
                    <Footer_nav/> 
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}