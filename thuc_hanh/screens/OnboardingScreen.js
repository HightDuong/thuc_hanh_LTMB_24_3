import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{
        uri: "https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T0Msp6sBQtHsUOM3Gx7rxGTM720OKlvNP47agOrL22UE7ebrRTi9wT1bffX2ORC-2pNSLlOqne2ehoQ2zxMZwyuPTlPhxxdNRyMxUj29sBTUFPNW6teCSH7te6mjZ4qn5uKIHPDL7Nsh7LcHSGulVAR~j3KfxteH6Ze3K0t0sSUNO2MEkZRpOtuclkYetomUKAQQVXl~0RYkENccONCTvf9308zuY-cwhVYzUkzRl3-GKwQxnR7vQ-Z3MK5G0z4DdQiX9fsk-e0kw4Ex4crxlfmx53nmjc2uvPAuvmHM2JhW9rVrw~uRHkcasMomkY32S0bkAPyKIUhFv3J8PzlOGA__"
      }}
      style={styles.background}
      resizeMode="cover" // Đảm bảo ảnh nền bao phủ toàn bộ màn hình
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Lớp phủ tối giúp làm nổi bật nội dung
  },
  content: {
    flex: 1, // Giúp content chiếm toàn bộ chiều cao
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
