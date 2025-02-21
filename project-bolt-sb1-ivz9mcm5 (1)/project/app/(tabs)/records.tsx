import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Record = {
  id: string;
  title: string;
  type: string;
  date: string;
  size: string;
};

const SAMPLE_RECORDS: Record[] = [
  { id: '1', title: 'Blood Test Results', type: 'Lab Report', date: '2024-05-01', size: '2.4 MB' },
  { id: '2', title: 'X-Ray Report', type: 'Imaging', date: '2024-04-28', size: '5.1 MB' },
  { id: '3', title: 'Prescription', type: 'Document', date: '2024-04-25', size: '1.1 MB' },
  { id: '4', title: 'Vaccination Record', type: 'Document', date: '2024-04-20', size: '0.8 MB' },
];

export default function RecordsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/records/upload" asChild>
          <Pressable style={styles.uploadButton}>
            <Ionicons name="add" size={24} color="#ffffff" />
            <Text style={styles.uploadButtonText}>Upload New Record</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          <Pressable style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={styles.filterChipTextActive}>All</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Lab Reports</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Imaging</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Prescriptions</Text>
          </Pressable>
          <Pressable style={styles.filterChip}>
            <Text style={styles.filterChipText}>Documents</Text>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView style={styles.recordsList}>
        {SAMPLE_RECORDS.map((record) => (
          <Pressable key={record.id} style={styles.recordItem}>
            <View style={styles.recordIcon}>
              <Ionicons name="document-text" size={24} color="#2563eb" />
            </View>
            <View style={styles.recordInfo}>
              <Text style={styles.recordTitle}>{record.title}</Text>
              <Text style={styles.recordMeta}>
                {record.type} • {record.date} • {record.size}
              </Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={24} color="#64748b" />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  uploadButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  filterSection: {
    padding: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  filterChipActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  filterChipText: {
    color: '#64748b',
    fontSize: 14,
  },
  filterChipTextActive: {
    color: '#ffffff',
    fontSize: 14,
  },
  recordsList: {
    flex: 1,
    padding: 16,
  },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  recordIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recordInfo: {
    flex: 1,
  },
  recordTitle: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  recordMeta: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});