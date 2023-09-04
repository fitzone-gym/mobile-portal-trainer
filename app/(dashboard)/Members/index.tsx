import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../styles/trainerMembers.style';
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Stack, useRouter,useLocalSearchParams } from 'expo-router';
import React from 'react';
import baseUrl from '../../../baseUrl';
// import BottomNavBar from '../../components/BottomNavBar'

interface Members {
    id: number;
    first_name: string;
    last_name: string;
    profile_picture?:string;
}

export default function trainerMembers() {

    const [memberDetails, setMemberDetails] = useState<Members[]>([]);


    useEffect(() => {
        axios
            .get(`${baseUrl}/memberDetailsForTrainers`)
            .then((response) => {
                setMemberDetails(response.data.data);
            })
            .catch((error) => console.error("Error fetching member details", error));
    }, []);
    console.info(memberDetails);
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <ImageBackground
                        source={
                            require('../../../assets/images/trainerMemberBack.png')
                        }
                        resizeMode='contain'
                        style={styles.topcontainerimage}>
                        <Text style={styles.text}>My Members</Text>
                    </ImageBackground>
                </View>
                <ScrollView>
                    <View style={styles.mainCard}>
                        {memberDetails.map((member) => (
                            <TouchableOpacity
                                style={styles.trainercards}
                                onPress={() => {
                                    router.push({
                                        pathname: '/MemberProfileDetailed',
                                        params: {
                                            id: member.id,
                                        }
                                    })
                                }}
                                key={member.id}>
                                    
                                <Image
                                    style={styles.memberimage}
                                    source={{ uri:`https://stylioo.blob.core.windows.net/images/${member.profile_picture}`}}
                                />
                                <Text style={styles.membercardname}>
                                    {member.first_name}&nbsp; {member.last_name}
                                </Text>
                            </TouchableOpacity>
                        )
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
