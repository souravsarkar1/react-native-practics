import PhoneNumberModal from "@/components/landingScreen/ModalForConfirmPhoneNumber";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 0 && <RenderOnOpen />}
      {currentScreen === 1 && <SecondScreen />}
    </SafeAreaView>
  );
}

const RenderOnOpen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/mainscreen/image1.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/mainscreen/image2.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const StatItem = ({ imageSource, number, label }: { imageSource: any, number: string | null, label: string }) => (
  <View style={styles.statItem}>
    <Image source={imageSource} style={{ width: 25, height: 25 }} resizeMode="contain" />
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const SecondScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    otp: '',
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (formData.phoneNumber.trim() === "") {
      alert("Please enter a valid phone number.");
      return;
    }
    setModalVisible(true); // Show the modal after clicking the button
  };

  const handleConfirm = () => {
    setModalVisible(false); // Close the modal
    console.log("Phone number confirmed:", formData.phoneNumber);
    // Add additional logic here if needed
    try {
      console.log("navigated");

      router.push("/otpScreen");

    } catch (error) {
      console.log(error);


    }
  };

  const handleClose = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.secondScreenContainer}>
      <Image
        source={require("../assets/images/mainscreen/image2.png")}
        style={styles.secondScreenLogo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>CONSULT ONLINE ANYTHING</Text>
      <Text style={styles.description}>Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(value) => handleChange("phoneNumber", value)}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.sendOtpButton}>
        <Text style={styles.buttonText}>SEND OTP</Text>
      </TouchableOpacity>

      <View style={styles.statsContainer}>
        <StatItem
          imageSource={require("../assets/images/mainscreen/astrologer.png")}
          number="+500"
          label="Astrologer"
        />
        <StatItem
          imageSource={require("../assets/images/mainscreen/customer.png")}
          number="+350"
          label="Happy Customers"
        />
        <StatItem
          imageSource={require("../assets/images/mainscreen/privacy.png")}
          number={null}
          label="Maintain privacy"
        />
      </View>

      {/* PhoneNumberModal Integration */}
      <PhoneNumberModal
        visible={isModalVisible}
        onClose={handleClose}
        phoneNumber={formData.phoneNumber}
        onConfirm={handleConfirm}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#0088CC',
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: "30%",
  },
  secondScreenContainer: {
    flex: 1,
    backgroundColor: '#0088CC',
    alignItems: 'center',
    padding: 20,
  },
  secondScreenLogo: {
    width: "50%",
    height: "20%",
    marginTop: 40,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  prefix: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  sendOtpButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#0088CC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
  },
  statItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0088CC',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  }
});
