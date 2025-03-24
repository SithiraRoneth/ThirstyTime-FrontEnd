import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    Animated,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const nav = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [form, setForm] = useState({ email: '', password: '' });
    const [isButtonPressed, setButtonPressed] = useState(false);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleLogin = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        setButtonPressed(true);

        try {
            const response = await axios.post("http://localhost:3000/user/login", {
                email: form.email,
                password: form.password,
            });

            if (response.data.success) {
                Alert.alert("Success", "Login Successful!");
                nav.navigate("Main");
            } else {
                Alert.alert("Error", response.data.message || "Invalid Credentials");
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong. Please try again.");
            console.error("Login Error:", error);
        } finally {
            setButtonPressed(false);
        }
    };

    return (
        <Animated.View style={{ opacity: fadeAnim, flex: 1, backgroundColor: '#fff' }}>
            <SafeAreaView className="flex-1 bg-white mt-10">
                <StatusBar barStyle="dark-content" />
                <View className="px-6 pt-10">
                    {/* App Title */}
                    <View className="items-center mb-12">
                        <Text className="text-3xl font-semibold text-green-900">Welcome Back</Text>
                    </View>

                    <Text className="text-xl font-semibold mb-6">Please log in to your account</Text>

                    <View className="mb-4">
                        <TextInput
                            placeholder="Email"
                            className="border border-gray-300 rounded-md px-4 py-3 mb-4"
                            value={form.email}
                            onChangeText={(text) => handleChange("email", text)}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            className="border border-gray-300 rounded-md px-4 py-3"
                            value={form.password}
                            onChangeText={(text) => handleChange("password", text)}
                        />
                    </View>

                    {/* Sign In Button with Animation */}
                    <TouchableOpacity
                        className={`py-3 rounded-md mb-6 ${isButtonPressed ? 'bg-gray-500' : 'bg-green-900'}`}
                        onPress={handleLogin}
                        disabled={isButtonPressed}
                    >
                        <Text className="text-white text-center font-semibold">
                            {isButtonPressed ? 'Signing In...' : 'Sign in'}
                        </Text>
                    </TouchableOpacity>

                    {/* OR Divider */}
                    <View className="flex-row items-center justify-center mb-6">
                        <View className="h-px bg-gray-300 flex-1" />
                        <Text className="mx-4 text-gray-500">- Or sign in with -</Text>
                        <View className="h-px bg-gray-300 flex-1" />
                    </View>

                    {/* Google Login Button */}
                    <TouchableOpacity
                        className="flex-row items-center justify-center border border-gray-300 p-3 rounded-md mb-6 bg-white"
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{ width: 24, height: 24, marginRight: 8 }}
                        />
                        <Text className="text-gray-700 font-semibold">Continue With Google</Text>
                    </TouchableOpacity>

                    {/* Sign Up Redirect */}
                    <View className="flex-row justify-center">
                        <Text className="text-gray-500">Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                            <Text className="text-green-900 font-semibold">Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Animated.View>
    );
};

export default LoginScreen;
