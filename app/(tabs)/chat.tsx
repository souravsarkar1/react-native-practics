import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm Astrologer Sharma. How can I help you today?",
            time: '10:00 AM',
            sender: 'astrologer'
        },
        {
            id: 2,
            text: "Hi, I want to know about my career prospects for 2024",
            time: '10:01 AM',
            sender: 'user'
        },
        {
            id: 3,
            text: "I'll be happy to help you with that. Could you please share your date of birth and birth time?",
            time: '10:02 AM',
            sender: 'astrologer'
        },
        {
            id: 4,
            text: "Sure, I was born on 15th March 1995 at 8:30 AM",
            time: '10:03 AM',
            sender: 'user'
        },
        {
            id: 5,
            text: "Thank you. Let me analyze your birth chart...",
            time: '10:04 AM',
            sender: 'astrologer'
        },
    ]);

    const handleSend = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    text: message.trim(),
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    sender: 'user'
                }
            ]);
            setMessage('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* Chat Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.astrologerInfo}>
                    <Image
                        source={require('../../assets/images/home/astrologer.png')}
                        style={styles.astrologerImage}
                    />
                    <View style={styles.astrologerDetails}>
                        <Text style={styles.astrologerName}>Astrologer Sharma</Text>
                        <View style={styles.statusContainer}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Online</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Chat Messages */}
            <ScrollView
                style={styles.messagesContainer}
                contentContainerStyle={styles.messagesContent}
            >
                {messages.map((msg) => (
                    <View
                        key={msg.id}
                        style={[
                            styles.messageWrapper,
                            msg.sender === 'user' ? styles.userMessageWrapper : styles.astrologerMessageWrapper
                        ]}
                    >
                        {msg.sender === 'astrologer' && (
                            <Image
                                source={require('../../assets/images/home/astrologer.png')}
                                style={styles.messageAvatar}
                            />
                        )}
                        <View
                            style={[
                                styles.messageBubble,
                                msg.sender === 'user' ? styles.userBubble : styles.astrologerBubble
                            ]}
                        >
                            <Text style={[
                                styles.messageText,
                                msg.sender === 'user' ? styles.userMessageText : styles.astrologerMessageText
                            ]}>
                                {msg.text}
                            </Text>
                            <Text style={styles.messageTime}>{msg.time}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Input Section */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
            >
                <View style={styles.inputWrapper}>
                    <TouchableOpacity style={styles.attachButton}>
                        <Ionicons name="attach" size={24} color="#666" />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        value={message}
                        onChangeText={setMessage}
                        multiline
                    />

                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={handleSend}
                    >
                        <Ionicons name="send" size={24} color="#2196F3" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#2196F3',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    backButton: {
        marginRight: 12,
    },
    astrologerInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    astrologerImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    astrologerDetails: {
        flex: 1,
    },
    astrologerName: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#4CAF50',
        marginRight: 6,
    },
    statusText: {
        color: '#FFF',
        fontSize: 12,
        opacity: 0.8,
    },
    moreButton: {
        padding: 4,
    },
    messagesContainer: {
        flex: 1,
    },
    messagesContent: {
        padding: 16,
    },
    messageWrapper: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    userMessageWrapper: {
        justifyContent: 'flex-end',
    },
    astrologerMessageWrapper: {
        justifyContent: 'flex-start',
    },
    messageAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    messageBubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 16,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    userBubble: {
        backgroundColor: '#2196F3',
        borderBottomRightRadius: 4,
    },
    astrologerBubble: {
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: 14,
        marginBottom: 4,
        lineHeight: 20,
    },
    userMessageText: {
        color: '#FFF',
    },
    astrologerMessageText: {
        color: '#333',
    },
    messageTime: {
        fontSize: 10,
        opacity: 0.7,
        alignSelf: 'flex-end',
        marginTop: 2,
        color: '#FFF',
    },
    inputContainer: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#FFF',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#FFF',
    },
    attachButton: {
        padding: 8,
    },
    input: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 8,
        maxHeight: 100,
        fontSize: 14,
    },
    sendButton: {
        padding: 8,
    },
});

export default ChatScreen;