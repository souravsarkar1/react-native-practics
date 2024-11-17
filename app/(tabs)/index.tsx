import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Index = () => {
    const astrologers = [
        { id: 1, name: 'Astrologer 1', image: require('../../assets/images/home/astrologer.png'), status: 'Online' },
        { id: 2, name: 'Astrologer 2', image: require('../../assets/images/home/astrologer.png'), status: 'Online' },
        { id: 3, name: 'Astrologer 3', image: require('../../assets/images/home/astrologer.png'), status: 'Busy' },
        { id: 4, name: 'Astrologer 4', image: require('../../assets/images/home/astrologer.png'), status: 'Online' },
    ]

    const features = [
        { id: 1, icon: '🌟', title: 'Kundli', rating: '4.2', users: '42' },
        { id: 2, icon: '📊', title: 'Reports', rating: '4.2', users: '42' },
        { id: 3, icon: '🔮', title: 'Prediction', rating: '4.2', users: '42' },
        { id: 4, icon: '📱', title: 'Free Call', rating: '4.2', users: '42' },
    ]

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Future Banner */}
                <View style={styles.banner}>
                    <Text style={styles.bannerTitle}>How is My Future?</Text>
                    <Text style={styles.bannerSubtitle}>Connect with Astrologer and get detailed prediction about your future</Text>
                </View>

                {/* Explore Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>EXPLORE</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.featuresContainer}
                    >
                        {features.map((feature) => (
                            <TouchableOpacity key={feature.id} style={styles.featureCard}>
                                <Text style={styles.featureIcon}>{feature.icon}</Text>
                                <Text style={styles.featureTitle}>{feature.title}</Text>
                                <View style={styles.ratingContainer}>
                                    <Text style={styles.rating}>{feature.rating}</Text>
                                    <Text style={styles.users}>{feature.users}k</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Astrologers Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ASTROLOGER</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.astrologersContainer}
                    >
                        {astrologers.map((astrologer) => (
                            <TouchableOpacity key={astrologer.id} style={styles.astrologerCard}>
                                <Image source={astrologer.image} style={styles.astrologerImage} />
                                <Text style={styles.astrologerName}>{astrologer.name}</Text>
                                <View style={[styles.statusBadge,
                                { backgroundColor: astrologer.status === 'Online' ? '#4CAF50' : '#FFA000' }]}>
                                    <Text style={styles.statusText}>{astrologer.status}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="call" size={24} color="#2196F3" />
                        <Text style={styles.actionButtonText}>Talk To An Astrologer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialCommunityIcons name="chat" size={24} color="#2196F3" />
                        <Text style={styles.actionButtonText}>Chat With The Astrologer</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom Actions */}
                <View style={styles.bottomActions}>
                    <TouchableOpacity style={styles.bottomAction}>
                        <MaterialCommunityIcons name="help-circle" size={30} color="#2196F3" />
                        <Text style={styles.bottomActionText}>Ask A Question</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomAction}>
                        <MaterialCommunityIcons name="file-document" size={30} color="#2196F3" />
                        <Text style={styles.bottomActionText}>Get Detailed Report</Text>
                    </TouchableOpacity>
                </View>

                {/* Customer Reviews */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>CUSTOMER REVIEWS</Text>
                    <View style={styles.reviewsContainer}>
                        <View style={styles.reviewCard}>
                            <Image source={require('../../assets/images/home/user1.png')} style={styles.reviewerImage} />
                            <Text style={styles.reviewerName}>John Doe</Text>
                            <Text style={styles.reviewText}>Amazing experience! The astrologer was very accurate.</Text>
                        </View>
                        <View style={styles.reviewCard}>
                            <Image source={require('../../assets/images/home/user1.png')} style={styles.reviewerImage} />
                            <Text style={styles.reviewerName}>Jane Smith</Text>
                            <Text style={styles.reviewText}>Very helpful and insightful reading. Highly recommend!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 30,
    },
    banner: {
        backgroundColor: '#1A237E',
        padding: 20,
        borderRadius: 15,
        margin: 16,
    },
    bannerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bannerSubtitle: {
        color: '#fff',
        opacity: 0.8,
        fontSize: 14,
    },
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    featuresContainer: {
        paddingRight: 16,
    },
    featureCard: {
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 12,
        marginRight: 12,
        alignItems: 'center',
        width: 100,
    },
    featureIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    featureTitle: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 4,
    },
    users: {
        fontSize: 12,
        color: '#666',
    },
    astrologersContainer: {
        paddingRight: 16,
    },
    astrologerCard: {
        marginRight: 16,
        alignItems: 'center',
    },
    astrologerImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    astrologerName: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: '#fff',
        fontSize: 12,
    },
    actionButtons: {
        padding: 16,
        gap: 12,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3F2FD',
        padding: 16,
        borderRadius: 12,
        gap: 12,
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2196F3',
    },
    bottomActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EEE',
    },
    bottomAction: {
        alignItems: 'center',
    },
    bottomActionText: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
    },
    reviewsContainer: {
        gap: 16,
    },
    reviewCard: {
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    reviewerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 8,
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    reviewText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
})

export default Index