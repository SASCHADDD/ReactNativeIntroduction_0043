import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text ,ScrollView, TextInput, TouchableOpacity, View ,Image,StyleSheet } from "react-native";

const Dashboard = () => {
  const { username } = useLocalSearchParams();
  const displayName = username ? username : "User";

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: "dashboard",
          headerTitleAlign: "left",
          headerShadowVisible: false, 
          
        }} 
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.blueHeader}>
          <View style={styles.profileRow}>
            <View>
              <Text style={styles.greetingText}>Hello {displayName},</Text>
              <Text style={styles.mainTitle}>Book your next Flight</Text>
            </View>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=11' }} 
              style={styles.avatar} 
            />
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity style={styles.toggleButtonActive}>
              <Text style={styles.toggleTextActive}>Round Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButton}>
              <Text style={styles.toggleText}>One way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButton}>
              <Text style={styles.toggleText}>Multi city</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>From (Location)</Text>
            <TextInput style={styles.input} value="New York (NYC)" editable={false} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>To (Destination)</Text>
            <TextInput style={styles.input} value="London (LDN)" editable={false} />
          </View>

          <View style={styles.rowInputs}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Departure</Text>
              <TextInput style={styles.input} value="Dec 4th, 2021" editable={false} />
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
              <Text style={styles.label}>Return</Text>
              <TextInput style={styles.input} value="Dec 16th, 2021" editable={false} />
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search flights</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.popularTitle}>Popular place</Text>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' }} 
            style={styles.popularImage}
          />
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="home" size={20} color="#2F65F6" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ticket-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  headerIcon: {
    backgroundColor: '#E0E0E0',
    padding: 6,
    borderRadius: 20,
    marginRight: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  blueHeader: {
    backgroundColor: '#2F65F6',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greetingText: {
    color: '#E0E7FF',
    fontSize: 14,
    marginBottom: 4,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 25,
    padding: 4,
  },
  toggleButtonActive: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  toggleTextActive: {
    color: '#2F65F6',
    fontWeight: 'bold',
    fontSize: 13,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  toggleText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 13,
  },
  searchCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: -40, 
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 14,
    color: '#333',
    fontWeight: '500',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    backgroundColor: '#2F65F6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  popularSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  popularImage: {
    width: '100%',
    height: 140,
    borderRadius: 20,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 30,
    left: 24,
    right: 24,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  navItemActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  navTextActive: {
    color: '#2F65F6',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 14,
  },
  navItem: {
    padding: 8,
  }
});
export default Dashboard