import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mocked device data
const deviceDetails = {
  model: 'Smart Device X100',
  batteryLevel: '85%',
  connectionStatus: 'Connected',
};

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  const connectDevice = () => {
    // Simulating device connection functionality
    setIsDeviceConnected(true);
    Alert.alert('Device Connected', `You have connected to ${deviceDetails.model}`);
  };

  const disconnectDevice = () => {
    setIsDeviceConnected(false);
    Alert.alert('Device Disconnected', 'The device has been disconnected.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Notification Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: "#767577", true: "#4338ca" }}
          thumbColor={notifications ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>

      {/* Data Sharing Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Share Data with Caregiver</Text>
        <Switch
          value={dataSharing}
          onValueChange={setDataSharing}
          trackColor={{ false: "#767577", true: "#4338ca" }}
          thumbColor={dataSharing ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>

      {/* Device Connection */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Smart Device</Text>
        {isDeviceConnected ? (
          <View style={styles.deviceDetails}>
            <Text style={styles.deviceText}>Model: {deviceDetails.model}</Text>
            <Text style={styles.deviceText}>Battery: {deviceDetails.batteryLevel}</Text>
            <Text style={styles.deviceText}>Status: {deviceDetails.connectionStatus}</Text>
            <TouchableOpacity style={styles.button} onPress={disconnectDevice}>
              <Text style={styles.buttonText}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={connectDevice}>
            <Text style={styles.buttonText}>Link Smart Device</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Other Settings */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.dangerButton]}>
        <Text style={[styles.buttonText, styles.dangerButtonText]}>Log Out</Text>
      </TouchableOpacity>
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
    marginBottom: 24,
    color: '#4338ca',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingLabel: {
    fontSize: 18,
    color: '#4b5563',
  },
  button: {
    backgroundColor: '#4338ca',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  dangerButton: {
    backgroundColor: '#ef4444',
  },
  dangerButtonText: {
    color: 'white',
  },
  deviceDetails: {
    marginTop: 8,
  },
  deviceText: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 4,
  },
});