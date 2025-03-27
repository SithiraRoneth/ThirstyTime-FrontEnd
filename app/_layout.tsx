import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import SplashScreen from '../app/SplashScreen';
import LoginScreen from '../app/LoginScreen';
import SignUpScreen from '../app/SignUpScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from '../app/(tabs)/_layout';
import ViewAllDetails from '../app/ViewAllDetails';
import ViewDetails from '../app/ViewDetails';
import CartScreen from "./(tabs)/CartScreen";
import { CartProvider } from '../app/CartProvider';
import AddOrderDetails from "./AddOrderDetails";
import OrderHistory from "./(tabs)/OrderHistory";
import {RootStackParamList} from "./RootStackParamList";
import TrackOrder from "./(tabs)/TrackOrder";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <CartProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Auth Flow */}
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />

                {/* Main App Flow */}
                <Stack.Screen name="Main" component={TabLayout} />
                <Stack.Screen name="ViewAllDetails" component={ViewAllDetails} />
                <Stack.Screen name="ViewDetails" component={ViewDetails} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
                <Stack.Screen name="AddOrderDetails" component={AddOrderDetails} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="TrackOrder" component={TrackOrder} />
            </Stack.Navigator>
            <StatusBar />
        </CartProvider>
    );
}
