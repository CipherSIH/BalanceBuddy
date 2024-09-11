import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

const Button = ({ children, variant = 'default', onPress }) => (
  <TouchableOpacity
    style={[
      styles.button,
      variant === 'outline' && styles.buttonOutline
    ]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const Progress = ({ value }) => (
  <View style={styles.progressContainer}>
    <View style={[styles.progressBar, { width: `${value}%` }]} />
  </View>
);

export default function FallPreventionApp() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>BalanceBuddy</Text>
          <Ionicons name="notifications" size={32} color="#4338ca" />
        </View>

        <Card style={styles.riskCard}>
          <View style={styles.riskHeader}>
            <Ionicons name="warning" size={40} color="#d97706" />
            <Text style={styles.riskTitle}>Fall Risk Status</Text>
          </View>
          <View style={styles.riskContent}>
            <Text style={styles.riskLevel}>MODERATE</Text>
            <Text style={styles.riskSubtext}>Based on real-time sensor data</Text>
            <Button variant="outline" onPress={() => {}}>
              <Text style={styles.buttonText}>View Detailed Analysis</Text>
            </Button>
          </View>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Today's Exercise Plan</Text>
          <View style={styles.exercisePlan}>
            <View>
              <Text style={styles.exerciseTitle}>Otago Exercise Program</Text>
              <Text style={styles.exerciseSubtext}>Tailored for your needs</Text>
            </View>
            <Button onPress={() => {}}>
              <Ionicons name="play" size={24} color="white" />
              <Text style={styles.buttonTextWhite}>Start</Text>
            </Button>
          </View>
          <Progress value={60} />
          <Text style={styles.progressText}>3 of 5 exercises completed</Text>
        </Card>

        <View style={styles.metricsContainer}>
          <Card style={styles.metricCard}>
            <Text style={styles.metricTitle}>Balance Score</Text>
            <Text style={styles.metricValue}>78%</Text>
            <Text style={styles.metricSubtext}>Good improvement!</Text>
          </Card>
          <Card style={styles.metricCard}>
            <Text style={styles.metricTitle}>Daily Steps</Text>
            <Text style={styles.metricValue}>4,230</Text>
            <Text style={styles.metricSubtext}>Goal: 5,000</Text>
          </Card>
        </View>

        <Button variant="outline" onPress={() => {}}>
          <Text style={styles.buttonText}>View Safety Tips</Text>
          <Ionicons name="chevron-forward" size={24} color="#4338ca" />
        </Button>
      </ScrollView>

      <View style={styles.navbar}>
        <Ionicons name="home" size={32} color="#4338ca" />
        <Ionicons name="fitness" size={32} color="#9ca3af" />
        <Ionicons name="settings" size={32} color="#9ca3af" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingTop: Constants.statusBarHeight,
  },
  scrollContent: {
    padding: 24,
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
  riskCard: {
    borderWidth: 4,
    borderColor: '#fbbf24',
  },
  riskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    padding: 16,
    marginHorizontal: -16,
    marginTop: -16,
    marginBottom: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
    marginHorizontal: 4,
    alignItems: 'center',
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
  button: {
    backgroundColor: '#4338ca',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4338ca',
  },
  buttonText: {
    color: '#4338ca',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 8,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});
