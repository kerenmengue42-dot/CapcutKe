import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon Profil (Connexion Supabase)</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f14', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 18 },
});