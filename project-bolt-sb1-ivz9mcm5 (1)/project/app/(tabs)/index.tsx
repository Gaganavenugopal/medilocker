import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to MediLocker</Text>
          <Text style={styles.heroSubtitle}>
            Your secure digital health records management platform
          </Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="document-text" size={32} color="#2563eb" />
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Medical Records</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="notifications" size={32} color="#2563eb" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Active Alerts</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="calendar" size={32} color="#2563eb" />
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Upcoming Events</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
        </View>
        <View style={styles.quickActions}>
          <Link href="/records/upload" asChild>
            <Pressable style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#eff6ff' }]}>
                <Ionicons name="cloud-upload" size={24} color="#2563eb" />
              </View>
              <Text style={styles.actionTitle}>Upload Record</Text>
              <Text style={styles.actionDescription}>
                Add new medical documents or test results
              </Text>
            </Pressable>
          </Link>
          <Link href="/records" asChild>
            <Pressable style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#f0fdf4' }]}>
                <Ionicons name="folder-open" size={24} color="#16a34a" />
              </View>
              <Text style={styles.actionTitle}>View Records</Text>
              <Text style={styles.actionDescription}>
                Access your medical history and documents
              </Text>
            </Pressable>
          </Link>
          <Link href="/alerts" asChild>
            <Pressable style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: '#fff7ed' }]}>
                <Ionicons name="notifications" size={24} color="#ea580c" />
              </View>
              <Text style={styles.actionTitle}>Manage Alerts</Text>
              <Text style={styles.actionDescription}>
                Set up health reminders and notifications
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Link href="/records" asChild>
            <Pressable>
              <Text style={styles.sectionLink}>View All</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.activityList}>
          {[
            {
              title: 'Blood Test Results',
              date: 'Today',
              type: 'Lab Report',
              icon: 'flask',
            },
            {
              title: 'Vaccination Record',
              date: 'Yesterday',
              type: 'Document',
              icon: 'medical',
            },
            {
              title: 'X-Ray Report',
              date: '2 days ago',
              type: 'Imaging',
              icon: 'scan',
            },
          ].map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Ionicons name={activity.icon} size={24} color="#2563eb" />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityMeta}>
                  {activity.type} • {activity.date}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#64748b" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  hero: {
    backgroundColor: '#1e40af',
    padding: 48,
  },
  heroContent: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#bfdbfe',
    marginTop: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginTop: -40,
    marginHorizontal: 24,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  section: {
    padding: 24,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  sectionLink: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',
  },
  actionCard: {
    flex: 1,
    minWidth: 300,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  actionDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  activityList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  activityMeta: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});