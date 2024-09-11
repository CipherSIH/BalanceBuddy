import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const exercises = [
  { id: '1', name: 'Knee bends', duration: '30 seconds' },
  { id: '2', name: 'Backward walking', duration: '1 minute' },
  { id: '3', name: 'Sideways walking', duration: '1 minute' },
  { id: '4', name: 'Heel-toe walking', duration: '1 minute' },
  { id: '5', name: 'One-leg stand', duration: '30 seconds each leg' },
];

export default function ExerciseScreen() {
  const [completedExercises, setCompletedExercises] = useState([]);

  const toggleExercise = (id) => {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev.filter((exId) => exId !== id) : [...prev, id]
    );
  };

  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.exerciseItem,
        completedExercises.includes(item.id) && styles.completedExercise,
      ]}
      onPress={() => toggleExercise(item.id)}
    >
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseDuration}>{item.duration}</Text>
      </View>
      {completedExercises.includes(item.id) && (
        <Ionicons name="checkmark-circle" size={24} color="#10b981" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Otago Exercise Program</Text>
      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {completedExercises.length} of {exercises.length} exercises completed
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(completedExercises.length / exercises.length) * 100}%` },
            ]}
          />
        </View>
      </View>
    </View>
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
  list: {
    flex: 1,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  completedExercise: {
    backgroundColor: '#e0f2f1',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  exerciseDuration: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressContainer: {
    marginTop: 16,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4338ca',
  },
});