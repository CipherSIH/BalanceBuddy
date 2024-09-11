import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CaregiverScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Caregiver Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Patient Overview</Text>
        <Text style={styles.patientName}>Suresh Kumar</Text>
        <Text style={styles.patientInfo}>Age: 72 | Fall Risk: MODERATE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Activities</Text>
        <View style={styles.activityItem}>
          <Ionicons name="fitness" size={24} color="#4338ca" />
          <Text style={styles.activityText}>Completed daily exercises</Text>
        </View>
        <View style={styles.activityItem}>
          <Ionicons name="walk" size={24} color="#10b981" />
          <Text style={styles.activityText}>Achieved step goal (5,000 steps)</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Analysis')}>
        <Text style={styles.buttonText}>View Detailed Analysis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Schedule Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Message to Patient</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#4338ca',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  patientName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  patientInfo: {
    fontSize: 16,
    color: '#6b7280',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#4b5563',
  },
  button: {
    backgroundColor: '#4338ca',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});