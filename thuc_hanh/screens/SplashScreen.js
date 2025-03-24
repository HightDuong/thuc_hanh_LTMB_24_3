import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.logo} />
      <Text style={styles.text}>Nectar</Text>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#4CAF50" },
  logo: { width: 100, height: 100, marginBottom: 20 },
  text: { fontSize: 24, color: "white", fontWeight: "bold" },
};
