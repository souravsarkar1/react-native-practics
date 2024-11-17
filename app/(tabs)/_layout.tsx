import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'index':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'chat':
                            iconName = focused ? 'chatbox' : 'chatbox-outline';
                            break;
                        case 'call':
                            iconName = focused ? 'call' : 'call-outline';
                            break;
                        case 'history':
                            iconName = focused ? 'time' : 'time-outline';
                            break;
                        case 'profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2196F3',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home'
                }}
            />
            <Tabs.Screen
                name='chat'
                options={{
                    headerShown: false,
                    title: 'Chat'
                }}
            />
            <Tabs.Screen
                name='call'
                options={{
                    headerShown: false,
                    title: 'Call'
                }}
            />
            <Tabs.Screen
                name='history'
                options={{
                    headerShown: false,
                    title: 'History'
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    headerShown: false,
                    title: 'Profile'
                }}
            />
        </Tabs>
    )
}

export default Layout