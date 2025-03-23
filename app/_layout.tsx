import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import SplashScreen from '../app/SplashScreen';
import LoginScreen from '../app/LoginScreen';
import SignUpScreen from '../app/SignUpScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabLayout from '../app/(tabs)/_layout'
import ViewAllDetails from '../app/ViewAllDetails'
import ViewDetails from '../app/ViewDetails'
const Stack = createNativeStackNavigator();
export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Auth Flow */}
                <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>

                {/* Main App Flow */}
                <Stack.Screen name="Main" component={TabLayout} options={{ headerShown: false }} />
                <Stack.Screen name="ViewAllDetails" component={ViewAllDetails} options={{ headerShown: false }} />
                <Stack.Screen name="ViewDetails" component={ViewDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
            <StatusBar />
        </>
    );
}
