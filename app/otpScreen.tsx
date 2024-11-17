import { useRouter } from 'expo-router';
import React, { useState, useRef } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Keyboard,
} from 'react-native';

const OTPScreen = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        // Move to previous input on backspace if current input is empty
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const otpValue = otp.join('');
        if (otpValue.length === 4) {
            console.log('OTP Submitted:', otpValue);
            // Add your submit logic here
            if (otpValue === "1234") {
                router.push('/(tabs)')
            }
        } else {
            console.log('Please enter complete OTP');
        }
    };

    const handleReset = () => {
        setOtp(['', '', '', '']);
        inputs.current[0].focus();
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: "#FFF" }}>Verification code</Text>\
            <Text style={{ fontSize: 16, marginBottom: 20, color: "#FFF" }}>Please Type The Verification Code Here</Text>
            <View style={styles.otpContainer}>

                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(input) => (inputs.current[index] = input)}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        value={digit}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={handleReset}
                >
                    <Text style={styles.buttonText2}>Reset OTP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={handleReset}
                >
                    <Text style={styles.buttonText2}>Call Me!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    buttonContainer: {
        width: '100%',
        gap: 15,
    },
    submitButton: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderBlockColor: '#FFF',
    },
    buttonText: {
        color: '#2196F3',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText2: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OTPScreen;