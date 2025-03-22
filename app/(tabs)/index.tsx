import React from 'react';
import '../../global.css'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View className="flex-row justify-between items-center px-4 pt-2">
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <View>
                        <Text className="text-gray-400 text-xs">Good morning</Text>
                        <Text className="font-semibold">Cameron Williamson</Text>
                    </View>
                </View>
                <Feather name="more-vertical" size={24} color="#ccc" />
            </View>

            {/* Welcome message */}
            <View className="px-4 mt-6">
                <Text className="text-2xl font-bold text-green-900">Good morning</Text>
                <Text className="text-2xl font-bold text-green-900">wishing you a nice day!</Text>
            </View>

            {/* Search bar */}
            <View className="flex-row items-center mx-4 mt-4 bg-gray-100 rounded-full px-4 py-2">
                <Feather name="search" size={20} color="gray" />
                <TextInput
                    placeholder="Search your coffee..."
                    className="flex-1 ml-2 text-gray-700"
                />
                <Feather name="sliders" size={20} color="gray" />
            </View>

            {/* Find section */}
            <View className="flex-row justify-between items-center px-4 mt-6">
                <Text className="text-lg font-bold">Find</Text>
                <Feather name="chevron-right" size={24} color="gray" />
            </View>

            {/* Filter buttons */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3 px-4">
                <TouchableOpacity className="bg-green-900 py-2 px-4 rounded-full mr-2">
                    <Text className="text-white">Near me</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 py-2 px-4 rounded-full mr-2">
                    <Text className="text-gray-700">Rating</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 py-2 px-4 rounded-full mr-2">
                    <Text className="text-gray-700">Free ship</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 py-2 px-4 rounded-full mr-2">
                    <Text className="text-gray-700">Hot</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Trending section */}
            <View className="flex-row justify-between items-center px-4 mt-6">
                <Text className="text-lg font-bold">Trending</Text>
                <Text className="text-green-900">View all</Text>
            </View>

            {/* Coffee items */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3 px-4">
                {/* Coffee item 1 */}
                <View className="mr-4 items-center">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80' }}
                        className="w-36 h-36 rounded-lg"
                    />
                    <Text className="font-medium mt-2">Cappuccino</Text>
                    <View className="flex-row items-center">
                        <AntDesign name="star" size={16} color="#FFCC00" />
                        <Text className="ml-1">4.8 (725)</Text>
                        <Text className="mx-2">•</Text>
                        <Text>16 min</Text>
                    </View>
                    <View className="flex-row items-center justify-between w-full mt-2">
                        <Text className="font-bold">$10.48</Text>
                        <TouchableOpacity className="bg-green-900 w-6 h-6 rounded-full items-center justify-center">
                            <AntDesign name="plus" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Coffee item 2 */}
                <View className="mr-4 items-center">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80' }}
                        className="w-36 h-36 rounded-lg"
                    />
                    <Text className="font-medium mt-2">Cappuccino</Text>
                    <View className="flex-row items-center">
                        <AntDesign name="star" size={16} color="#FFCC00" />
                        <Text className="ml-1">4.8 (725)</Text>
                        <Text className="mx-2">•</Text>
                        <Text>16 min</Text>
                    </View>
                    <View className="flex-row items-center justify-between w-full mt-2">
                        <Text className="font-bold">$10.48</Text>
                        <TouchableOpacity className="bg-green-900 w-6 h-6 rounded-full items-center justify-center">
                            <AntDesign name="plus" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Pagination dots */}
            <View className="flex-row justify-center mt-4">
                <View className="w-2 h-2 rounded-full bg-green-900 mx-1" />
                <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
                <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
                <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
            </View>
        </SafeAreaView>
    );
}
