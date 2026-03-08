import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeAuraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Aura Discover</Text>
      <View style={styles.glassCard}>
        <Text style={styles.cardTitle}>Floating compatibility bubbles</Text>
        <Text style={styles.cardBody}>Tap a bubble to open a profile sphere and AI compatibility details.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11152d',
    justifyContent: 'center',
    padding: 24
  },
  heading: { color: '#90e7ff', fontSize: 30, fontWeight: '700', marginBottom: 16 },
  glassCard: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,255,255,0.12)'
  },
  cardTitle: { color: '#fff', fontSize: 19, marginBottom: 10, fontWeight: '600' },
  cardBody: { color: '#d8f7ff', lineHeight: 22 }
});
