// import styles from '../../styles/home.style';

// import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

// import { Stack, useRouter } from 'expo-router';
// import React, {useEffect, useState} from 'react';

// import axios from "axios";

// interface Trainer{
//     id:string;
//     first_name:string;
//     last_name:string;
//     profile_picture:string;
// }



// export default function Home() {

//     const [trainerDetails, setTrainerDetails] = useState<Trainer[]>([]);

//     useEffect(() => {
//         axios
//             .get("http://localhost:5400/ourTrainers")
//             .then((response) => {
//                 setTrainerDetails(response.data.data);
//                 console.log(trainerDetails)
//             })
//             .catch((error) => console.error(error));
//     }, []);

//     const router = useRouter()

//     return (
//         <SafeAreaView>
//             <Stack.Screen
//                 options={{
//                     title: 'Member',
//                 }}
//             />
            
//             <ScrollView style={styles.fullbody}>
//                 <View
//                 style={styles.topcontainer}
//                 >
                    
//                     <ImageBackground
//                     source={
//                         require('../../assets/images/unsplash_U2q73PfHFpM.png')
//                     }
//                     resizeMode='cover'
//                     style={styles.topcontainerimage}>
//                         <View style={styles.topicons}>
//                             <TouchableOpacity>
//                                 <Image
//                                     style={styles.sidebaricon}
//                                     source={require('../../assets/images/Sidebarimage.png')}
//                                 />
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <Image
//                                     style={styles.bellicon}
//                                     source={require('../../assets/images/bell.png')}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                         <Text style={styles.text}>Our trainers</Text>
                    
//                     </ImageBackground>              
//                 </View>

//                 <View
//                 style={styles.bottomcontainer}>

//                    {trainerDetails.map((trainer) => (

//                         <TouchableOpacity
//                         style={styles.trainercards}
//                         onPress={()=>{
//                             router.push('member/trainerProfile')}} key={trainer.id}>
                            // <Image
                            //     style={styles.trainerimage}
                            //     source={{ uri:../../assets/images/Trainers/${trainer.profile_picture}}}
                            // />
//                             <Text
//                                 style={styles.trainercardname}
//                             >{trainer.first_name}&nbsp;{trainer.last_name}</Text>
//                             <Text
//                                 style={styles.trainercardtext}
//                             >9 Members
//                             </Text>
//                         </TouchableOpacity>

//                         )
//                    )}

//                     </View>
                
//             </ScrollView>
            
//         </SafeAreaView>
//     )
// }