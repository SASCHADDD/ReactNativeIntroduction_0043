import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Halo Ganteng</Text>

      <Link href="/form" style={styles.link}><Text>Go to Form</Text></Link>
      <Link href="/contoh" style={styles.link}><Text>Go to Contoh</Text></Link>

      <TextInput 
      placeholder="masukkan nama"
      placeholderTextColor="#999"
      style={styles.input}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
});
