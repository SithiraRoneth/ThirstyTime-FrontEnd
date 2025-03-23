import { SafeAreaView, StatusBar, View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current; // Fade animation

    useEffect(() => {
        // Fade-in effect
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            navigation.replace("Login");
        }, 2000);
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-green-900 justify-center items-center">
            <StatusBar barStyle="light-content" />

            <Animated.View style={{ opacity: fadeAnim }} className="items-center">
                <Text className="text-white text-4xl font-bold tracking-wider">ThirstyFirst</Text>

                {/* Loading Dots Animation */}
                <View className="flex-row mt-2">
                    {[0, 1, 2, 3].map((dot, index) => (
                        <Animated.View
                            key={index}
                            className="h-2 w-2 rounded-full bg-white mx-1"
                            style={{
                                opacity: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.5, 1],
                                }),
                            }}
                        />
                    ))}
                </View>
            </Animated.View>
        </SafeAreaView>
    );
};

export default SplashScreen;
