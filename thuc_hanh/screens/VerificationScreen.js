import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function VerificationScreen({ route }) {
  const navigation = useNavigation();
  const { phone } = route.params; // Nhận số điện thoại từ màn hình trước
  const [code, setCode] = useState("");

  // Xử lý khi nhập mã OTP
  const handleChangeText = (text) => {
    if (text.length <= 4) {
      setCode(text);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>

      {/* Ô nhập mã OTP */}
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={handleChangeText}
          placeholder="----"
          placeholderTextColor="#ccc"
        />
        {code.length < 4 && <Text style={styles.dots}>...</Text>}
      </View>

      {/* Nút gửi lại mã */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={[styles.nextButton, code.length === 4 ? styles.activeButton : styles.inactiveButton]}
        disabled={code.length < 4}
      >
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
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
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#ccc",
    paddingBottom: 8,
    marginBottom: 20,
  },
  codeInput: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    letterSpacing: 8,
  },
  dots: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ccc",
    marginLeft: 10,
  },
  resendText: {
    color: "#6FCF97",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#6FCF97",
  },
  inactiveButton: {
    backgroundColor: "#ccc",
  },
});

