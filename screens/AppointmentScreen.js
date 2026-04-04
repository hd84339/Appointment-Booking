import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const mockAppointments = [
  { id: '1', providerName: 'Rahul Barber', date: 'Oct 15, 2024', time: '10:00 AM', status: 'Upcoming' },
  { id: '2', providerName: 'Dr. Sharma', date: 'Oct 18, 2024', time: '02:30 PM', status: 'Pending' }
];

export default function AppointmentScreen() {
  const router = useRouter();

  const getStatusColor = (status) => {
    switch(status) {
      case 'Upcoming': return '#10B981'; // Green
      case 'Pending': return '#F59E0B'; // Orange
      default: return '#6B7280';
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.providerInfo}>
          <Text style={styles.providerName}>{item.providerName}</Text>
          <View style={styles.dateTime}>
            <Ionicons name="calendar-outline" size={16} color="#6B7280" style={{marginRight: 6}}/>
            <Text style={styles.dateText}>{item.date} • {item.time}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '15' }]}>
          <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>{item.status}</Text>
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtnOutline}>
          <Text style={styles.actionBtnOutlineText}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnSolid}>
          <Text style={styles.actionBtnSolidText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Appointments</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <FlatList 
        data={mockAppointments}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 40 : 20, paddingBottom: 20 },
  backButton: { width: 44, height: 44, backgroundColor: '#fff', borderRadius: 22, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  filterButton: { width: 44, height: 44, justifyContent: 'center', alignItems: 'flex-end' },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#1f2937' },
  listContainer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 30 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 18, marginBottom: 16, shadowColor: '#000', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  providerInfo: { flex: 1 },
  providerName: { fontSize: 19, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 },
  dateTime: { flexDirection: 'row', alignItems: 'center' },
  dateText: { color: '#6B7280', fontSize: 15, fontWeight: '500' },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  statusText: { fontSize: 13, fontWeight: '800' },
  actions: { flexDirection: 'row', borderTopWidth: 1, borderColor: '#f3f4f6', paddingTop: 18 },
  actionBtnOutline: { flex: 1, height: 48, borderRadius: 14, borderWidth: 1.5, borderColor: '#e5e7eb', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  actionBtnOutlineText: { color: '#4b5563', fontWeight: '700', fontSize: 15 },
  actionBtnSolid: { flex: 1, height: 48, borderRadius: 14, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
  actionBtnSolidText: { color: '#fff', fontWeight: '700', fontSize: 15 }
});
