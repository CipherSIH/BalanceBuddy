import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const safetyTips = [
  {
    id: '1',
    title: 'Keep your home well-lit',
    description: 'Ensure all areas of your home are well-lit, especially stairways and hallways.',
  },
  {
    id: '2',
    title: 'Remove tripping hazards',
    description: 'Clear clutter from floors and secure loose rugs or carpets.',
  },
  {
    id: '3',
    title: 'Use assistive devices',
    description: 'Install handrails on stairs and grab bars in the bathroom for added support.',
  },
  {
    id: '4',
    title: 'Wear proper footwear',
    description: 'Choose shoes with non-slip soles and avoid walking in socks on smooth floors.',
  },
  {
    id: '5',
    title: 'Stay active',
    description: 'Regular exercise helps improve balance, strength, and flexibility.',
  },
];

export default function SafetyTipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Safety Tips</Text>
      {safetyTips.map((tip) => (
        <TouchableOpacity key={tip.id} style={styles.tipContainer}>
          <View style={styles.tipHeader}>
            <Ionicons name="information-circle-outline" size={24} color="#4338ca" />
            <Text style={styles.tipTitle}>{tip.title}</Text>
          </View>
          <Text style={styles.tipDescription}>{tip.description}</Text>
        </TouchableOpacity>
      ))}
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
  tipContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 8,
  },
  tipDescription: {
    fontSize: 16,
    color: '#4b5563',
  },
});