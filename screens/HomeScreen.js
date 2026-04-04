import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const mockProviders = [
  { id: 1, name: "Rahul Barber", category: "Salon", rating: 4.8, distance: "1.2 km", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Dr. Sharma", category: "Doctor", rating: 4.9, distance: "3.5 km", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Amit Tutor", category: "Education", rating: 4.7, distance: "2.0 km", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80" },
  { id: 4, name: "Elite Spa", category: "Salon", rating: 4.5, distance: "4.1 km", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=200&q=80" }
];

const categories = [
  { id: '1', name: 'Salon', icon: 'cut-outline' },
  { id: '2', name: 'Doctor', icon: 'medkit-outline' },
  { id: '3', name: 'Education', icon: 'book-outline' },
  { id: '4', name: 'Plumber', icon: 'construct-outline' },
];

export default function HomeScreen() {
  const router = useRouter();

  const handleProviderPress = (provider) => {
    router.push({ pathname: '/provider', params: { ...provider } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, User 👋</Text>
          <Text style={styles.location}>New Delhi, India</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn} onPress={() => router.push('/appointment')}>
          <Ionicons name="calendar" size={24} color="#4F46E5" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search providers, services..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={cat.icon} size={28} color="#4F46E5" />
                </View>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Providers</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>
          {mockProviders.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.providerCard}
              onPress={() => handleProviderPress(item)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.image }} style={styles.providerImage} />
              <View style={styles.providerInfo}>
                <Text style={styles.providerName}>{item.name}</Text>
                <Text style={styles.providerCategory}>{item.category}</Text>
                <View style={styles.providerMeta}>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={14} color="#FFB800" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <Text style={styles.distanceText}> • {item.distance}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 40 },
  greeting: { fontSize: 26, fontWeight: '800', color: '#1f2937' },
  location: { fontSize: 15, color: '#6b7280', marginTop: 4, fontWeight: '500' },
  profileBtn: { width: 50, height: 50, backgroundColor: '#e0e7ff', borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 16, paddingLeft: 16, paddingRight: 8, height: 56, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3, marginBottom: 24 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: '#333' },
  filterBtn: { backgroundColor: '#4F46E5', width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1f2937', paddingHorizontal: 20, marginBottom: 16 },
  seeAll: { color: '#4F46E5', fontWeight: '700', fontSize: 15 },
  categoriesList: { paddingHorizontal: 15 },
  categoryCard: { alignItems: 'center', marginHorizontal: 10 },
  categoryIcon: { width: 68, height: 68, backgroundColor: '#fff', borderRadius: 24, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3, marginBottom: 10 },
  categoryText: { fontSize: 14, color: '#4b5563', fontWeight: '600' },
  providerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, marginBottom: 16, padding: 12, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  providerImage: { width: 80, height: 80, borderRadius: 16 },
  providerInfo: { flex: 1, marginLeft: 16 },
  providerName: { fontSize: 18, fontWeight: 'bold', color: '#1f2937', marginBottom: 4 },
  providerCategory: { fontSize: 14, color: '#6b7280', marginBottom: 8, fontWeight: '500' },
  providerMeta: { flexDirection: 'row', alignItems: 'center' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  ratingText: { marginLeft: 4, fontWeight: '700', color: '#B45309', fontSize: 13 },
  distanceText: { color: '#9ca3af', fontSize: 13, fontWeight: '600' },
});
