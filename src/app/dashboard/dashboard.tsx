import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text ,ScrollView, TextInput, TouchableOpacity, View ,Image,StyleSheet } from "react-native";

const Dashboard = () => {
  const { username } = useLocalSearchParams();
  const displayName = username ? username : "User";

  return ();
export default Dashboard