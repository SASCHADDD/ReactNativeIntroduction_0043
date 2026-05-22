import { Link, Redirect } from "expo-router";
import { Text, View, StyleSheet, TextInput, } from "react-native";

export default function Index() {
  return <Redirect href="/loginform" />;
    // <View style={styles.container}>
    //   <Text>Halo Ganteng</Text>

    //   <Link href="/form" ><Text>Go to Form</Text></Link>
    //   <Link href="/contoh" ><Text>Go to Contoh</Text></Link>

    //   <TextInput 
    //   placeholder="masukkan nama"
    //   />
    // </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
