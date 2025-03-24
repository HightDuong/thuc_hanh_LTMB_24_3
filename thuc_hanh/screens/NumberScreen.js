import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function NumberScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  // Xử lý khi ấn nút tiếp tục
  const handleContinue = () => {
    if (phoneNumber.length >= 9) {
      navigation.navigate("Verification", { phone: phoneNumber });
    } else {
      alert("Vui lòng nhập số điện thoại hợp lệ!");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            {/* Nút quay lại */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Tiêu đề */}
            <Text style={styles.title}>Enter your mobile number</Text>
            <Text style={styles.label}>Mobile Number</Text>

            {/* Ô nhập số điện thoại */}
            <View style={styles.inputContainer}>
              <Image
                source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1" }}
                style={styles.flag}
              />
              <Text style={styles.countryCode}>+880</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="Enter your number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            {/* Nút tiếp tục */}
            <TouchableOpacity style={styles.nextButton} onPress={handleContinue}>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 8,
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    backgroundColor: "#6FCF97",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
