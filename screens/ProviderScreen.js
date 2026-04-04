import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProviderScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Use mock fallback details a pretty UI
  const provider = {
    name: params.name || "Rahul Barber",
    category: params.category || "Salon",
    rating: params.rating || "4.8",
    image: params.image || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    about: "Professional provider with over 5 years of experience in delivering high-quality services. Excellent customer satisfaction and timely appointments. Book today to secure your preferred time space.",
    reviews: "128 Reviews"
  };

  const handleBook = () => {
    router.push('/appointment');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: provider.image }} style={styles.coverImage} />
      
      <SafeAreaView style={styles.headerControls}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={24} color="#1f2937" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailsHeader}>
          <Text style={styles.name}>{provider.name}</Text>
          <Text style={styles.category}>{provider.category}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="star" size={28} color="#FFB800" />
            <Text style={styles.statValue}>{provider.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="chatbubble-ellipses" size={28} color="#4F46E5" />
            <Text style={styles.statValue}>{provider.reviews}</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{provider.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Hours</Text>
          <View style={styles.timeRow}>
            <Text style={styles.dayText}>Mon - Fri</Text>
            <Text style={styles.timeText}>09:00 AM - 08:00 PM</Text>
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.dayText}>Sat - Sun</Text>
            <Text style={styles.timeText}>10:00 AM - 06:00 PM</Text>
          </View>
        </View>
        
        {/* Padding for bottom button */}
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  coverImage: { width: '100%', height: 380, position: 'absolute', top: 0 },
  headerControls: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 50, zIndex: 10 },
  backButton: { width: 44, height: 44, backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 22, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.1, elevation: 2 },
  likeButton: { width: 44, height: 44, backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 22, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.1, elevation: 2 },
  contentContainer: { marginTop: 260, backgroundColor: '#f8f9fa', borderTopLeftRadius: 36, borderTopRightRadius: 36, flex: 1, paddingHorizontal: 24, paddingTop: 30 },
  detailsHeader: { marginBottom: 24 },
  name: { fontSize: 32, fontWeight: '800', color: '#1f2937', marginBottom: 8 },
  category: { fontSize: 16, color: '#4F46E5', fontWeight: '700', backgroundColor: '#e0e7ff', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  statsContainer: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 28, shadowColor: '#000', shadowOffset: {width:0, height:4}, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  statItem: { flex: 1, alignItems: 'center' },
  statDivider: { width: 1, backgroundColor: '#e5e7eb' },
  statValue: { fontSize: 18, fontWeight: '800', color: '#1f2937', marginTop: 10 },
  statLabel: { fontSize: 14, color: '#6b7280', marginTop: 4, fontWeight: '500' },
  section: { marginBottom: 28 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1f2937', marginBottom: 14 },
  aboutText: { fontSize: 16, color: '#4b5563', lineHeight: 26 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14, backgroundColor: '#fff', padding: 16, borderRadius: 16, shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.03, elevation: 1 },
  dayText: { fontSize: 16, color: '#6b7280', fontWeight: '600' },
  timeText: { fontSize: 16, color: '#1f2937', fontWeight: 'bold' },
  footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 20, borderTopWidth: 1, borderColor: '#f3f4f6', shadowColor: '#000', shadowOffset: {width:0, height:-4}, shadowOpacity: 0.05, elevation: 10 },
  bookButton: { backgroundColor: '#4F46E5', borderRadius: 20, height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  bookButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
