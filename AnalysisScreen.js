import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart,BarChart } from 'react-native-chart-kit';

export default function AnalysisScreen() {
  const balanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 68, 72, 70, 75, 78, 76],
        color: (opacity = 1) => `rgba(67, 56, 202, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const stepsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3200, 3500, 4000, 3800, 4200, 4500, 4230],
        color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detailed Analysis</Text>
      
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Balance Score Trend</Text>
        <LineChart
          data={balanceData}
          width={320}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(67, 56, 202, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Daily Steps Trend</Text>
        <BarChart
          data={stepsData}
          width={320}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.insightsContainer}>
        <Text style={styles.insightsTitle}>Insights</Text>
        <Text style={styles.insightText}>• Your balance score has improved by 13% this week.</Text>
        <Text style={styles.insightText}>• You've consistently met your daily step goal for the past 5 days.</Text>
        <Text style={styles.insightText}>• Your fall risk has decreased from HIGH to MODERATE.</Text>
      </View>
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
    marginBottom: 16,
    color: '#4338ca',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  insightsContainer: {
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
  insightsTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  insightText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#4b5563',
  },
});