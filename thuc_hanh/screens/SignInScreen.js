import React from "react";
import { 
  View, Text, Image, TouchableOpacity, StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/f806/f060/4e1b9f8b9d7440c6aff2ea6b09677ca1"
        }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries with Nectar</Text>

      {/* Ô nhập số điện thoại (Dùng TouchableOpacity thay vì TextInput) */}
      <TouchableOpacity 
        style={styles.inputContainer} 
        onPress={() => navigation.navigate("Number")}
      >
        <Image
          source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1" }}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+880</Text>
        <Text style={styles.placeholderText}>Enter your number</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút đăng nhập với Google */}
      <TouchableOpacity style={[styles.button, { backgroundColor: "#DB4437" }]}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập với Facebook */}
      <TouchableOpacity style={[styles.button, { backgroundColor: "#1877F2" }]}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    width: "90%",
    paddingVertical: 10,
    marginBottom: 15,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
  },
  placeholderText: {
    fontSize: 18,
    color: "#888",
    flex: 1,
  },
  orText: {
    fontSize: 14,
    color: "#888",
    marginVertical: 15,
  },
  button: {
    width: "90%",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
