import styles from '../../../styles/trainerProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Card, PaperProvider} from 'react-native-paper';
import { useAppSelector } from '../../redux/store';
import axios from '../../../axios'

type TrainerType = {
    first_name:string
    last_name:string
    profile_picture:string
    dob:Date
    email:string
    phone_no:number
    gender:string
    age:number
}

type extraDetails = {
    working_experience:number
    qualification:string
    expert_area:string
    ratings:number
}


export default function trainerProfile(){

    const currentUser = useAppSelector(state => state.user)
    const[trainerDetails, setTrainerDetails] = useState<TrainerType>();
    const[extraDetails, setExtraDetails] = useState<extraDetails>();

    
    useEffect(() => {
        axios
            .get(`/trainerProfile/details/${currentUser.user_id}`)
            .then((response:{data:{data:any}; }) =>{
                setTrainerDetails(response.data.data);
            })
            .catch((error) => console.error(error))
    }, []);
    console.log(trainerDetails)

    useEffect(()=>{
        axios 
            .get(`/trainerProfile/extraDetails/${currentUser.user_id}`)
            .then((response:{data:{data:any};})=>{
                const data = response.data.data;
                console.log(data);
                setExtraDetails(data[0]);
            })
            .catch((error)=>console.log(error))

    },[]);
    console.log(extraDetails)

    return(
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
            options={{title:'Trainer Profile',}}
            />
            <ScrollView>   
                <ImageBackground
                    source={
                        require('../../../assets/images/TrainerProfileBackground.png')
                    }
                    resizeMode='cover'
                    style={styles.backgroundimage}>
                        <View style={styles.fullcontent}>
                                {/* <Text style={styles.text}>Trainer Profile</Text> */}
                                <View style={styles.imageanddetails}>
                                    <Image
                                        style={styles.trainerimage}
                                        source={{ uri:`https://stylioo.blob.core.windows.net/images/${currentUser.image}`}}
                                        resizeMode='cover'
                                    />
                                    <View style={styles.basicdetails}>
                                        <View>
                                            <Text style={styles.labelofbasicinfo}>Name</Text>
                                            <Text style={styles.labelofbasicinfo}>Age</Text>
                                            <Text style={styles.labelofbasicinfo}>Gender</Text>
                                            <Text style={styles.labelofbasicinfo}>Mobile No</Text>
                                            <Text style={styles.labelofbasicinfo}>Email</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.basicinfo}>{trainerDetails?.first_name}&nbsp;{trainerDetails?.last_name}</Text>
                                            <Text style={styles.basicinfo}>{trainerDetails?.age}</Text>
                                            <Text style={styles.basicinfo}>{trainerDetails?.gender === 'M' ? 'Male' : 'Female'}</Text>
                                            <Text style={styles.basicinfo}>0{trainerDetails?.phone_no}</Text>
                                            <Text style={styles.basicinfo}>{trainerDetails?.email}</Text>
                                        </View>
                                         {/* Add log out button */}
                                    </View>
                                </View>

                                <View style={styles.workingExandmembers}>
                                    <View style={styles.Workexperience}>
                                        <Text style={styles.workingextext}>Working Experience</Text>
                                        <Text style={styles.workingexyers}>{extraDetails?.working_experience}</Text>
                                        <Text style={styles.workingextext}>Years</Text>
                                    </View>
                                    
                                    <View style={styles.ratings}>
                                            <Text style={styles.ratingtext}>Member Rating</Text>
                                            <View style={styles.newtextbox}>  
                                                <Text  style={styles.textboxtext2}>{extraDetails?.ratings}</Text>                                          
                                            </View>
                                    </View>
                                </View>

                                <View style={styles.lowercontent}>
                                    <View >
                                            <Text style={styles.topictext}>Qualification</Text>
                                            <View style={styles.newtextbox}>
                                                <Text style={styles.textboxtext}>{extraDetails?.qualification}</Text>                                                
                                            </View>
                                    </View>
                                    <View >
                                            <Text style={styles.topictext}>Expert Area</Text>
                                            <Card  style={styles.newtextbox}>                                                
                                                <Text style={styles.textboxtext}>{extraDetails?.expert_area}</Text>                                                
                                            </Card>
                                    </View>                                    
                                </View>                          
                        </View>                    
                    </ImageBackground>
            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}