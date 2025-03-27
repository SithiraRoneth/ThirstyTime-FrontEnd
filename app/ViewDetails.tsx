import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCart } from "./CartProvider";
import { Beverage } from "../api/APIService";

type ViewDetailsRouteProp = RouteProp<{ ViewDetails: { item: Beverage } }, "ViewDetails">;

const ViewDetails: React.FC = () => {
    const route = useRoute<ViewDetailsRouteProp>();
    const navigation = useNavigation();
    const { item } = route.params;
    const { addToCart } = useCart();

    const [size, setSize] = useState<string>("Medium");
    const [price, setPrice] = useState<number>(10.48);
    const [quantity, setQuantity] = useState<number>(1);

    // Function to update price based on size
    const updatePrice = (newSize: string) => {
        setSize(newSize);
        setPrice(newSize === "Large" ? 15.00 : newSize === "Small" ? 8.00 : 10.48);
    };

    // Function to handle adding item to cart
    const addToCartHandler = () => {
        addToCart({
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            size,
            quantity,
            price
        });
        alert(`Added ${quantity} ${size} ${item.strDrink} to cart!`);
        // navigation.navigate("Cart"); // Uncomment if needed
    };

    // Function to increase quantity
    const increaseQuantity = () => setQuantity((prev) => prev + 1);

    // Function to decrease quantity
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <ScrollView className="flex-1 bg-white p-4">
            {/* Back Button */}
            <View className="flex-row items-center mb-4">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="text-blue-900 text-xl">←</Text>
                </TouchableOpacity>
            </View>

            {/* Product Image */}
            <Image source={{ uri: item.strDrinkThumb }} className="w-full h-64 rounded-lg" />

            {/* Product Details */}
            <Text className="text-2xl font-bold mt-4">{item.strDrink}</Text>
            <Text className="text-gray-600 mt-2">{item.strCategory || "Beverage"}</Text>
            <Text className="text-green-700 mt-2">{item.strAlcoholic}</Text>
            <Text className="mt-4 text-lg font-semibold">Glass Type:</Text>
            <Text className="text-gray-700">{item.strGlass || "Not specified"}</Text>
            <Text className="mt-4 text-lg font-semibold">Instructions:</Text>
            <Text className="text-gray-700">{item.strInstructions || "No instructions available"}</Text>

            {/* Price & Size Selection */}
            <View className="mt-6">
                <Text className="font-extrabold text-gray-400 text-xl">Price: ${price.toFixed(2)}</Text>
                <View className="flex-row justify-between mt-4">
                    {["Small", "Medium", "Large"].map((sizeOption) => (
                        <TouchableOpacity
                            key={sizeOption}
                            onPress={() => updatePrice(sizeOption)}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 10,
                            }}
                        >
                            {/* Radio Button */}
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: "#064e3b",
                                    backgroundColor: size === sizeOption ? "#064e3b" : "transparent",
                                    marginRight: 8,
                                }}
                            />
                            <Text className={size === sizeOption ? "text-green-700 font-bold" : "text-black"}>
                                {sizeOption}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Quantity Selection */}
            <View className="flex-row items-center justify-between mt-6">
                <View className="flex-row items-center">
                    {/* Decrease Quantity Button */}
                    <TouchableOpacity
                        onPress={decreaseQuantity}
                        style={{
                            backgroundColor: "transparent",
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            marginRight: 10,
                            borderWidth: 1,
                            borderColor: "#064e3b",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text className="text-black text-xl">-</Text>
                    </TouchableOpacity>

                    <Text className="text-black text-xl">{quantity}</Text>

                    {/* Increase Quantity Button */}
                    <TouchableOpacity
                        onPress={increaseQuantity}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            marginLeft: 10,
                            borderWidth: 1,
                            borderColor: "#064e3b",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text className="text-black text-xl">+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Updated Price */}
            <View className="mt-6">
                <Text className="font-extrabold text-xl">Total Price: ${(price * quantity).toFixed(2)}</Text>
            </View>


            <TouchableOpacity
                style={{
                    backgroundColor: "#064e3b",
                    padding: 15,
                    marginTop: 20,
                    borderRadius: 5,
                    alignItems: "center",
                }}
                onPress={addToCartHandler}
            >
                <Text className="text-white font-bold">Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ViewDetails;
