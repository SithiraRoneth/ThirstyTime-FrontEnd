import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import HomeScreen from '../(tabs)/index';
import ProfileScreen from './ProfileScreen ';
import CartScreen from "./CartScreen";
import OrderHistory from "./OrderHistory";
import TrackOrder from "./TrackOrder";


const Tab = createBottomTabNavigator();

export default function Tabs() {
    const activeColor = "#006241"; // Dark green color from your UI
    const inactiveColor = "gray";

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                        backgroundColor: 'white',
                        height: 80,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: -2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        paddingBottom: 20,
                        borderTopWidth: 1,
                        borderTopColor: '#f1f1f1',
                    },
                    default: {
                        backgroundColor: 'white',
                        height: 70,
                        elevation: 5,
                        paddingBottom: 10,
                        borderTopWidth: 1,
                        borderTopColor: '#f1f1f1',
                    },
                }),
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginTop: -5,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? activeColor : inactiveColor, fontSize: 12 }}>
                            Home
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? activeColor : inactiveColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? activeColor : inactiveColor, fontSize: 12 }}>
                            Cart
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "cart" : "cart-outline"}
                            size={24}
                            color={focused ? activeColor : inactiveColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderHistory}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? activeColor : inactiveColor, fontSize: 12 }}>
                            Orders
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "clipboard" : "clipboard-outline"}
                            size={24}
                            color={focused ? activeColor : inactiveColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Track"
                component={TrackOrder}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? activeColor : inactiveColor, fontSize: 12 }}>
                            Tracking
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "navigate" : "navigate-circle-outline"}
                            size={24}
                            color={focused ? activeColor : inactiveColor}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? activeColor : inactiveColor, fontSize: 12 }}>
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? activeColor : inactiveColor}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
