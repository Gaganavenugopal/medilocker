import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Alert = {
  id: string;
  title: string;
  description: string;
  type: 'reminder' | 'warning' | 'info';
  date: string;
};

const SAMPLE_ALERTS: Alert[] = [
  {
    id: '1',
    title: 'Upcoming Appointment',
    description: 'Annual checkup with Dr. Smith tomorrow at 10:00 AM',
    type: 'reminder',
    date: '2024-05-15',
  },
  {
    id: '2',
    title: 'Medication Refill',
    description: 'Your prescription needs to be refilled in 3 days',
    type: 'warning',
    date: '2024-05-18',
  },
  {
    id: '3',
    title: 'Lab Results Available',
    description: 'Your recent blood work results are ready to view',
    type: 'info',
    date: '2024-05-10',
  },
];

const getAlertIcon = (type: Alert['type']) => {
  switch (type) {
    case 'reminder':
      return { name: 'calendar', color: '#2563eb', bg: '#eff6ff' };
    case 'warning':
      return { name: 'warning', color: '#ea580c', bg: '#fff7ed' };
    case 'info':
      return { name: 'information-circle', color: '#0891b2', bg: '#ecfeff' };
  }
};

export default function AlertsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Health Alerts</Text>
        <Text style={styles.subtitle}>Stay on top of your health with personalized alerts</Text>
      </View>

      <View style={styles.alertsList}>
        {SAMPLE_ALERTS.map((alert) => {
          const icon = getAlertIcon(alert.type);
          return (
            <Pressable key={alert.id} style={styles.alertItem}>
              <View style={[styles.alertIcon, { backgroundColor: icon.bg }]}>
                <Ionicons name={icon.name as any} size={24} color={icon.color} />
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertDescription}>{alert.description}</Text>
                <Text style={styles.alertDate}>{alert.date}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.settingsTitle}>Alert Preferences</Text>
        <Pressable style={styles.settingsButton}>
          <Ionicons name="notifications" size={24} color="#64748b" />
          <Text style={styles.settingsButtonText}>Manage Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="#64748b" />
        </Pressable>
        <Pressable style={styles.settingsButton}>
          <Ionicons name="time" size={24} color="#64748b" />
          <Text style={styles.settingsButtonText}>Reminder Schedule</Text>
          <Ionicons name="chevron-forward" size={24} color="#64748b" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  alertsList: {
    padding: 16,
  },
  alertItem: {
    flexDirection: 'row',
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
  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  alertDescription: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  alertDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 8,
  },
  settingsSection: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginTop: 16,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  settingsButtonText: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
  },
});