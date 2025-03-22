import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {Beverage, fetchMultipleBeverages} from "../api/APIService";
import { useNavigation } from "@react-navigation/native";

const PopularFoodCard: React.FC = () => {
    const navigation = useNavigation();
    const [beverages, setBeverages] = useState<Beverage[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMultipleBeverages();
            setBeverages(data.slice(0, 20));
        };
        getData();
    }, []);

    return (
        <>
            <View className="flex-row justify-between items-center px-4 mt-12">
                <Text className="text-lg font-bold">Trending Drinks</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAllDetails")}>
                    <Text className="text-green-900">View all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={beverages}
                keyExtractor={(item) => item.idDrink.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            margin: 8,
                            backgroundColor: "white",
                            borderRadius: 10,
                            padding: 10,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            elevation: 3,
                        }}
                        onPress={() => navigation.navigate("ViewDetails", { item })}
                    >
                        <View className="items-center">
                            <Image source={{ uri: item.strDrinkThumb }} className="w-36 h-36 rounded-lg" />
                            <Text className="font-extrabold mt-2 text-center">{item.strDrink}</Text>
                            <Text className="text-gray-600">{item.strCategory || "Beverage"}</Text>
                            <View className="flex-row items-center mt-2">
                                <AntDesign name="star" size={16} color="#FFCC00" />
                                <Text className="ml-1">4.5</Text>
                            </View>
                            <Text className="font-extrabold mt-2">$ {((Math.random() * 10) + 5).toFixed(2)}</Text>
                            <TouchableOpacity className="bg-green-900 w-8 h-8 rounded-full items-center justify-center mt-4">
                                <AntDesign name="plus" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </>
    );
};

export default PopularFoodCard;
