import { View, Text,TextInput, Image, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import { Stack , useRouter} from 'expo-router';

export default function Home() {

    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'forgetPw',
                }}
            />
                
        </SafeAreaView>
    )
}