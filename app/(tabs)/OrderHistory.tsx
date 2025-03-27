import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import axios from "axios"; // Import axios for HTTP requests
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackParamList";

type TrackScreenRouteProp = RouteProp<RootStackParamList, "OrderHistory">;

const OrderHistory: React.FC = () => {
    const route = useRoute<TrackScreenRouteProp>();

    const [orders, setOrders] = useState<any[]>([]); // State to hold orders
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:3000/orders/getAll");
                console.log("API response:", response.data);
                setOrders(response.data.orders);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);


    if (loading) {
        return <Text>Loading...</Text>; // Show loading text while fetching orders
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16, alignItems:"center", justifyContent:"center", textAlign:"center" }}>Order History</Text>

            <ScrollView>
                {orders.length === 0 ? (
                    <Text>No orders found.</Text>
                ) : (
                    Array.isArray(orders) && orders.map((order, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.cardTitle}>Order #{order._id}</Text>
                            <Text style={styles.cardDetail}>Address: {order.address}</Text>
                            <Text style={styles.cardDetail}>Phone: {order.phoneNumber}</Text>
                            <View style={styles.itemsContainer}>
                                {order.items.map((item: any, idx: number) => (
                                    <Text key={idx} style={styles.itemDetail}>
                                        {item.name} ({item.size}) - {item.quantity} x ${item.price}
                                    </Text>
                                ))}
                            </View>
                            <Text style={styles.cardPrice}>Total: ${order.totalPrice}</Text>

                            {/*<TouchableOpacity style={styles.trackButton}>*/}
                            {/*    <Text style={styles.buttonText}>Track Order</Text>*/}
                            {/*</TouchableOpacity>*/}
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f8f8f8",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#737373",
        marginBottom: 8,
    },
    cardDetail: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
    cardPrice: {
        fontSize: 14,
        fontWeight:"600",
        color: "#000",
        marginBottom: 4,
    },
    itemsContainer: {
        marginVertical: 8,
    },
    itemDetail: {
        fontSize: 14,
        color: "#555",
    },
    trackButton: {
        backgroundColor: "#007BFF",
        padding: 12,
        borderRadius: 8,
        marginTop: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default OrderHistory;
