import React from 'react';
import '../../global.css'
import {View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import {Ionicons, Feather, AntDesign} from '@expo/vector-icons';
import PopularFoodCard from "../../components/PopularFoodCard";

export default function HomeScreen() {

    return (
        <View className='bg-white w-full h-full'>
            <SafeAreaView className="flex-1 bg-white top-10">
                <StatusBar barStyle="dark-content"/>

                {/* Header */}
                <View className="flex-row justify-between items-center px-4 pt-4">
                    <View className="flex-row items-center">
                        <Image
                            source={{uri: ''}}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <View>
                            <Text className="font-semibold">Sithira Roneth</Text>
                        </View>
                    </View>
                    <Feather name="more-vertical" size={24} color="#ccc"/>
                </View>

                {/* Welcome message */}
                <View className="px-4 mt-6">
                    <Text className="text-2xl font-bold text-green-900">Welcome Back!</Text>
                    <Text className="text-2xl font-bold text-green-900">wishing you a nice day!</Text>
                </View>

                {/* Search bar */}
                <View className="flex-row items-center mx-4 mt-6 bg-gray-100 rounded-full px-4 py-2">
                    <Feather name="search" size={20} color="gray"/>
                    <TextInput
                        placeholder="Search your coffee..."
                        className="flex-1 ml-2 text-gray-700"
                    />
                    <Feather name="sliders" size={20} color="gray"/>
                </View>

                <PopularFoodCard/>
            </SafeAreaView>
        </View>
    );
}
