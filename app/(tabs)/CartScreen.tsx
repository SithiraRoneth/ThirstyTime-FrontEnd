import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useCart } from "../CartProvider";
import {Ionicons} from "@expo/vector-icons";

const CartScreen: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <View className="flex-1 bg-white">
            {/* Scrollable Cart Items */}
            <ScrollView className="flex-1 p-4 mb-24"> {/* Added bottom margin */}
                <Text className="text-2xl font-bold mb-4">Your Cart</Text>

                {cart.length === 0 ? (
                    <Text className="text-gray-600 text-center">Your cart is empty.</Text>
                ) : (
                    cart.map((item) => (
                        <View key={`${item.name}-${item.size}`} className="flex-row justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
                            <Image source={{ uri: item.image }} className="w-16 h-16 rounded-lg" />
                            <View className="flex-1 ml-4">
                                <Text className="text-lg font-bold">{item.name}</Text>
                                <Text className="text-gray-600">{item.size} - {item.quantity}x</Text>
                                <Text className="text-green-700 font-bold">${(item.price * item.quantity).toFixed(2)}</Text>
                            </View>

                            {/* Quantity Controls */}
                            <View className="flex-row items-center">
                                <TouchableOpacity
                                    onPress={() => updateQuantity(item.name, item.size, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="p-2 border border-gray-500 rounded-lg"
                                >
                                    <Text className="text-xl">-</Text>
                                </TouchableOpacity>
                                <Text className="mx-2 text-lg">{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => updateQuantity(item.name, item.size, item.quantity + 1)}
                                    className="p-2 border border-gray-500 rounded-lg"
                                >
                                    <Text className="text-xl">+</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Delete Button */}
                            <TouchableOpacity onPress={() => removeFromCart(item.name, item.size)} className="ml-4">
                                <Ionicons name="trash-outline" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ScrollView>

            {/* Fixed Bottom Section */}
            {cart.length > 0 && (
                <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300">
                    <Text className="font-extrabold text-xl mb-2">Total: ${totalPrice.toFixed(2)}</Text>
                    <TouchableOpacity
                        onPress={() => alert("Order placed successfully!")}
                        className="bg-green-700 p-4 rounded-lg"
                    >
                        <Text className="text-white font-bold text-center">Place Order</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CartScreen;
