import styles from '../../styles/trainerMembers.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';

export default function Home() {
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'trainers member',
                }}
            />            
            <ScrollView style={styles.fullbody}>
                <View
                style={styles.topcontainer}
                >
                    
                    <ImageBackground
                    source={
                        require('../../assets/images/trainerMemberBack.png')
                    }
                    resizeMode='cover'
                    style={styles.topcontainerimage}>
                        <View style={styles.topicons}>
                            <TouchableOpacity>
                                {/* <Image
                                    style={styles.sidebaricon}
                                    source={require('../../assets/images/Sidebarimage.png')}
                                /> */}
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {/* <Image
                                    style={styles.bellicon}
                                    source={require('../../assets/images/bell.png')}
                                /> */}
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text}>Our trainers</Text>
                    
                    </ImageBackground>              
                </View>

                    {/* <FlatList
                        data={[1,2,3,4]}
                        renderItem={() => {
                            return(
                                <View
                                style={styles.trainercards}>
                                    <Text
                                        style={styles.trainercardtext}
                                    >trainercard</Text>
                                </View>
                            )
                        }}
                        keyExtractor={item => `${item}`}
                        // horizorntal
                        numColumns={3}

                    
                    /> */}

                <View
                style={styles.bottomcontainer}>

                        <TouchableOpacity
                        style={styles.trainercards}
                        onPress={()=>{
                            router.push('MemberProfileDetailed')}}>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/Kamal.png')}
                            />
                            <Text
                                style={styles.trainercardname}
                            >Mr. Kamal suraweera</Text>
                            <Text
                                style={styles.trainercardtext}
                            >9 Members</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.trainercards}>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/Maduka.png')}
                            />
                            <Text
                                style={styles.trainercardname}
                            >Mr. Maduka perera</Text>
                            <Text
                                style={styles.trainercardtext}
                            >9 Members</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.trainercards}>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/Lakmal.png')}
                            />
                            <Text
                                style={styles.trainercardname}
                            >Mr. Lakmal rathnayake</Text>
                            <Text
                                style={styles.trainercardtext}
                            >9 Members</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.trainercards}>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/Nadheeka.png')}
                            />
                            <Text
                                style={styles.trainercardname}
                            >Ms. Nadheeka silva</Text>
                            <Text
                                style={styles.trainercardtext}
                            >9 Members</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.trainercards}>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/Kamal.png')}
                            />
                            <Text
                                style={styles.trainercardname}
                            >Mr.Trainer</Text>
                            <Text
                                style={styles.trainercardtext}
                            >9 Members</Text>

                        </TouchableOpacity>

                    </View>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}