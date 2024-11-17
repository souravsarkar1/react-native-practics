import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PhoneNumberModal = ({
    visible,
    onClose,
    phoneNumber,
    onConfirm,
}: {
    visible: boolean;
    onClose: () => void;
    phoneNumber: string;
    onConfirm: () => void;
}) => {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={modalStyles.modalOverlay}>
                <View style={modalStyles.modalContainer}>
                    <Text style={modalStyles.greetingText}>Hi, Anuj Agarwal</Text>
                    <Text style={modalStyles.infoText}>
                        To get started, Login or Sign Up
                    </Text>

                    <TouchableOpacity
                        onPress={onConfirm}
                        style={modalStyles.phoneNumberButton}
                    >
                        <Text style={modalStyles.phoneNumberText}>
                            Proceed with your phone number: {phoneNumber}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose}>
                        <Text style={modalStyles.useAnotherMethodText}>
                            Use another method
                        </Text>
                    </TouchableOpacity>

                    <Text style={modalStyles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever. It is a long established fact that a reader will be
                        distracted by the readable content.
                    </Text>

                    <Text style={modalStyles.footerText}>
                        The standard Lorem Ipsum
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

const modalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end", // Align the modal to the bottom
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed overlay
    },
    modalContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        width: "100%", // Full width
        alignItems: "center", // Center align content
    },
    greetingText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
        textAlign: "center",
    },
    infoText: {
        fontSize: 14,
        color: "#555",
        marginBottom: 20,
        textAlign: "center",
    },
    phoneNumberButton: {
        backgroundColor: "#0088CC",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
        width: "90%",
    },
    phoneNumberText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
    },
    useAnotherMethodText: {
        color: "#0088CC",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 10,
        textDecorationLine: "underline",
    },
    description: {
        fontSize: 12,
        color: "#666",
        marginTop: 20,
        lineHeight: 18,
        textAlign: "center",
    },
    footerText: {
        fontSize: 12,
        color: "#999",
        marginTop: 10,
        textAlign: "center",
    },
});

export default PhoneNumberModal;
