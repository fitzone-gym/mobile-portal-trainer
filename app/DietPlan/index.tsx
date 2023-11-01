import React, { useState , useEffect} from 'react';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, ImageBackground , TouchableOpacity} from 'react-native';
import styles from "../../styles/dietPlan.style";
import { Modal, TextInput } from 'react-native-paper';
import axios from '../../axios';
import { useAppSelector } from '../redux/store';
import Icon from "react-native-vector-icons/MaterialIcons";

interface details {
    first_name: string;
    last_name: string;
    weight : number,
    height : number
}

export default function Payments() {
    const router = useRouter()
    const localParams =  useLocalSearchParams();
    // console.log(localParams.user_id); // member id from the local params
    const currentUser = useAppSelector(state => state.user);
    // console.log(currentUser.user_id); // trainer id from the session
    

    const[helthDetails , setHelthDetails] =  useState<details[]>([]);

    useEffect(() => {
        // console.log(currentUser.user_id);
        axios
            .get(`/memberDetailsForTrainers/dietPlanDetails/healthDetails/${localParams.user_id}`)
            .then((response: { data: { data: any; }; }) => {
                const data = response.data.data;
                setHelthDetails(response.data.data);
                // console.log(response.data.data);
            })
            .catch((error: any) => console.error(error))
    }, []);
//   create diet plan
    const [isBreakfastDialogBox, setBreakfastDialogBox] = useState(false);
    const [isLunchDialogBox, setLunchDialogBox] = useState(false);
    const [isDinnerDialogBox, setDinnerDialogBox] = useState(false);

    const [protiens,setProtiens] = useState<number>(0);
    const [carbohydrate,setCarbohydrate] = useState<number>(0);
    const [minaral,setMinaral] = useState<number>(0);
    const [fat,setFat] = useState<number>(0);

    const toggleBreakfast = () =>{
        setBreakfastDialogBox(!isBreakfastDialogBox);
    }
    const toggleLunch = () =>{
        setLunchDialogBox(!isLunchDialogBox);
    }

    const  toggleDinner = () =>{
        setDinnerDialogBox(!isDinnerDialogBox);
    }

    const addMealPlan = (plan: string) =>{
        axios.post(`/memberDetailsForTrainers/dietPlanDetails/addMealPlan`,{
            plan: plan,
            protein_gram :protiens,
            carbohydrate_gram: carbohydrate,
            mineral_gram:minaral,
            fat_gram:fat,
            member_id: localParams.user_id
        }).then(res => {
            if(res.data.success) {
                alert("Successfully Added")
                setBreakfastDialogBox(false)
                setLunchDialogBox(false)
                setDinnerDialogBox(false)
                setCarbohydrate(0)
                setFat(0)
                setMinaral(0)
                setProtiens(0)
                getDietPlan();
            }else {
                alert("Failed to Add")
            }
        }).catch(err => {
            console.log(err);
            alert("Failed to Add")
            
        })
    }

    // type dietType = {
    //     breakfast: {
    //         carbohydrate_gram: number,
    //         fat_gram: number,
    //         mineral_gram: number,
    //         protein_gram: number
    //     },
    //     lunch: {
    //         carbohydrate_gram: number,
    //         fat_gram: number,
    //         mineral_gram: number,
    //         protein_gram: number
    //     },
    //     dinner: {
    //         carbohydrate_gram: number,
    //         fat_gram: number,
    //         mineral_gram: number,
    //         protein_gram: number
    //     }
    // }

    const [dietPlan, setDietPlan] = useState<any>([])

    const getDietPlan = () =>{  

        axios.get(`/memberDetailsForTrainers/dietPlanDetails/getMealPlan/${localParams.user_id}`)
        .then(res => {
            if(res.data.success) {
                console.log(res.data.data);
                setDietPlan(res.data.data)  
            }else {
                setDietPlan([])
            }
        }).catch(err => {
            console.log(err);
            setDietPlan([])
        })
    }


    // breakfast.protine_gram
    // breakfast.protine_gram

    useEffect(() => {
        getDietPlan()
        console.log();
        
    }, [])

    // {
    //     dietPlan.breakfast ? <> : <><text>No date found</text></></>
    // }

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: "",
                    
                }}
            />
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../assets/images/dietPlan.png")}
                        resizeMode="cover"
                        style={styles.image}
                    >
                        <View style={styles.content}>
                            <View style={styles.contentInline}>
                                <Text style={styles.dietPlanHeading}>
                                    Diet plan 
                                    {/* {dietPlan?.breakfast?.protein_gram} */}
                                </Text>
                            </View>
                        </View>
                        {helthDetails.length > 0 ? (
                        <View style={styles.top}>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Weight:</Text>                                
                                <Text style={styles.textInput}> {helthDetails[0].weight} Kg</Text>                                
                            </View>
                            <View style={styles.sets}>
                                <Text style={styles.label}>Height:</Text>                                
                                <Text style={styles.textInput}>{helthDetails[0].height} cm</Text>                                
                            </View>
                        </View>
                        ) : ( <Text> No helth details available</Text>)}
                    </ImageBackground>

                    
                    <View style={styles.menus}>
                        <View style={styles.menuBtn}>
                            <TouchableOpacity
                                onPress={toggleBreakfast}
                            >
                                <Text style={styles.menutxtBtn}>Breakfast</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.menuBtn}>
                            <TouchableOpacity
                            onPress={toggleLunch}
                            >
                                <Text style={styles.menutxtBtn}>Lunch</Text>
                            </TouchableOpacity>                            
                        </View>
                        <TouchableOpacity
                        onPress={toggleDinner}
                        >
                            <View style={styles.menuBtn}>
                                <Text style={styles.menutxtBtn}>Dinner</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.viewDietPlane}>
                    <Text></Text>
                </View>


                            {/* breakfast dialog box modal */}
                <Modal 
                    visible={isBreakfastDialogBox}

                >
                    <View style={styles.details}>
                        
                        <View style={styles.detailTypes}>
                            <View>
                                <Icon
                                name = "close"
                                onPress = {toggleBreakfast}
                                style={{ marginLeft:300, fontSize:20}}
                                />
                                <Text style={{fontSize:16, fontWeight:"bold"}}>BREAKFAST</Text>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Proteins (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {protiens.toString()}
                                    onChangeText={(text)=>setProtiens(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Carbohydrate (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {carbohydrate.toString()}
                                    onChangeText={(text)=>setCarbohydrate(parseInt(text))}
                                />
                                
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Minaral (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {minaral.toString()}
                                    onChangeText={(text)=>setMinaral(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Fat (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {fat.toString()}
                                    onChangeText={(text)=>setFat(parseInt(text))}
                                />
                            </View>
                            <TouchableOpacity 
                            style ={styles.createBtn}
                            onPress={() => addMealPlan('breakfast')}
                            >
                                <Text>
                                    CREATE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                             {/* lunch dialog box modal */}
                <Modal 
                    visible={isLunchDialogBox}

                >
                    <View style={styles.details}>
                        
                        <View style={styles.detailTypes}>
                            <View >
                                <Icon
                                name = "close"
                                onPress = {toggleLunch}
                                style={{ marginLeft:300, fontSize:20}}
                                />
                                <Text style={{fontSize:16, fontWeight:"bold"}}>LUNCH</Text>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Proteins (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {protiens.toString()}
                                    onChangeText={(text)=>setProtiens(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Carbohydrate (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {carbohydrate.toString()}
                                    onChangeText={(text)=>setCarbohydrate(parseInt(text))}
                                />
                                
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Minaral (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {minaral.toString()}
                                    onChangeText={(text)=>setMinaral(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Fat (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {fat.toString()}
                                    onChangeText={(text)=>setFat(parseInt(text))}
                                />
                            </View>
                            <TouchableOpacity style ={styles.createBtn}
                                onPress={() => addMealPlan('lunch')}

                            >
                                <Text>
                                    CREATE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                             {/* dinner dialog box modal */}
                <Modal 
                    visible={isDinnerDialogBox}

                >
                    <View style={styles.details}>
                        
                        <View style={styles.detailTypes}>
                            <View >
                                <Icon
                                name = "close"
                                onPress = {toggleDinner}
                                style={{ marginLeft:300, fontSize:20}}
                                />
                                <Text style={{fontSize:16, fontWeight:"bold"}}>DINNER</Text>
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Proteins (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {protiens.toString()}
                                    onChangeText={(text)=>setProtiens(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Carbohydrate (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {carbohydrate.toString()}
                                    onChangeText={(text)=>setCarbohydrate(parseInt(text))}
                                />
                                
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Minaral (g) :</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {minaral.toString()}
                                    onChangeText={(text)=>setMinaral(parseInt(text))}
                                />
                            </View>
                            <View style={styles.rowdetail}>
                                <Text style={styles.label3}>Fat (g):</Text>
                                <TextInput style={styles.textInput3}
                                    placeholder='grams'
                                    value = {fat.toString()}
                                    onChangeText={(text)=>setFat(parseInt(text))}
                                />
                            </View>
                            <TouchableOpacity style ={styles.createBtn}
                                onPress={() => addMealPlan('dinner')}
                            >
                                <Text>
                                    CREATE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </SafeAreaView>
    )
}