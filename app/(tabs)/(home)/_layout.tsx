import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Layout = () => {
    const drawerOptions = {
        drawerStyle: {
            backgroundColor: '#f5f5f5', // Light background for the drawer
        },
        drawerActiveTintColor: '#0088CC', // Active item color
        drawerInactiveTintColor: '#555', // Inactive item color
        drawerLabelStyle: {
            fontSize: 16,
        },
    };

    return (
        <Drawer screenOptions={drawerOptions}>
            <Drawer.Screen
                name="index"
                options={{
                    headerShown: true,
                    title: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="support"
                options={{
                    headerShown: true,
                    title: 'Customer Support Chat',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="support-agent" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="wallet"
                options={{
                    headerShown: true,
                    title: 'Wallet Transactions',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome name="credit-card" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="order"
                options={{
                    headerShown: true,
                    title: 'Order History',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="reported"
                options={{
                    headerShown: true,
                    title: 'Get Reported',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="report" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="chatWithAstrologer"
                options={{
                    headerShown: true,
                    title: 'Chat With Astrologer',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="chat" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
};

export default Layout;
