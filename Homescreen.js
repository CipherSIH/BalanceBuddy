import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

export default function Homescreen({ navigation }) {
  const [fallRisk, setFallRisk] = useState('MODERATE');
  const [balanceScore, setBalanceScore] = useState(78);
  const [dailySteps, setDailySteps] = useState(4230);

  useEffect(() => {
    configureNotifications();
  }, []);

  const configureNotifications = async () => {
    await Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  };

  const simulateFallRisk = async () => {
    const newRisk = fallRisk === 'MODERATE' ? 'HIGH' : 'MODERATE';
    setFallRisk(newRisk);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Fall Risk Alert',
        body: `Your fall risk status has changed to ${newRisk}.`,
      },
      trigger: null,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BalanceBuddy</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Caregiver')}>
          <Ionicons name="person" size={32} color="#4338ca" />
        </TouchableOpacity>
      </View>

      <View style={styles.riskCard}>
        <View style={styles.riskHeader}>
          <Ionicons name="warning" size={40} color="#d97706" />
          <Text style={styles.riskTitle}>Fall Risk Status</Text>
        </View>
        <View style={styles.riskContent}>
          <Text style={styles.riskLevel}>{fallRisk}</Text>
          <Text style={styles.riskSubtext}>Based on real-time sensor data</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Analysis')}>
            <Text style={styles.buttonText}>View Detailed Analysis</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Exercise Plan</Text>
        <View style={styles.exercisePlan}>
          <View>
            <Text style={styles.exerciseTitle}>Otago Exercise Program</Text>
            <Text style={styles.exerciseSubtext}>Tailored for your needs</Text>
          </View>
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Exercise')}>
            <Ionicons name="play" size={18} color="white" />
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '60%' }]} />
        </View>
        <Text style={styles.progressText}>3 of 5 exercises completed</Text>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Balance Score</Text>
          <Text style={styles.metricValue}>{balanceScore}%</Text>
          <Text style={styles.metricSubtext}>Good improvement!</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Daily Steps</Text>
          <Text style={styles.metricValue}>{dailySteps}</Text>
          <Text style={styles.metricSubtext}>Goal: 5,000</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.safetyButton} onPress={() => navigation.navigate('Safety')}>
        <Text style={styles.safetyButtonText}>View Safety Tips</Text>
        <Ionicons name="chevron-forward" size={24} color="#4338ca" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.simulateButton} onPress={simulateFallRisk}>
        <Text style={styles.simulateButtonText}>Simulate Fall Risk Change</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4338ca',
  },
  riskCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  riskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  riskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  riskContent: {
    alignItems: 'center',
  },
  riskLevel: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d97706',
    marginBottom: 8,
  },
  riskSubtext: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4338ca',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  exercisePlan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  exerciseSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
  startButton: {
    backgroundColor: '#4338ca',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    bottom:10,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  progressContainer: {
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4338ca',
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6b7280',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10b981',
  },
  metricSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
  safetyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  safetyButtonText: {
    color: '#4338ca',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  simulateButton: {
    backgroundColor: '#f59e0b',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  simulateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});