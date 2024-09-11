import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export default function ElderlyScreen({ navigation }) {
  const [fallRisk, setFallRisk] = useState(false);

  // Configure Notifications
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Simulating fall risk detection and triggering a notification
    if (fallRisk) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Fall Risk Alert',
          body: 'A fall risk has been detected.',
        },
        trigger: null, // immediate notification
      });
    }
  }, [fallRisk]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Elderly Screen</Text>
      <Ionicons name="warning" size={40} color="#d97706" />
      <Text style={styles.subText}>Fall Risk Status: {fallRisk ? 'HIGH' : 'NORMAL'}</Text>
      <Button title="Simulate Fall Risk" onPress={() => setFallRisk(true)} />
      <Button title="Go to Fall Prevention App" onPress={() => navigation.navigate('FallPreventionApp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4338ca',
    marginBottom: 16,
  },
  subText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#6b7280',
  },
});
