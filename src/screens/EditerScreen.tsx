import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function EditerScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour 👋</Text>
        <Text style={styles.title}>CapCut-Ke</Text>
        <Text style={styles.subtitle}>
          Créez des vidéos incroyables.
        </Text>
      </View>

      <TouchableOpacity
  style={styles.mainButton}
  onPress={() => alert('Création de projet bientôt disponible !')}
>
  <Text style={styles.mainButtonText}>
    + Nouveau projet
  </Text>
</TouchableOpacity>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📥</Text>
          <Text style={styles.cardText}>
            Importer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>🤖</Text>
          <Text style={styles.cardText}>
            IA
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Projets récents
      </Text>

      <View style={styles.project}>
        <Text style={styles.projectName}>
          Aucune vidéo disponible
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Tendances
      </Text>

      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Gaming</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>TikTok</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Business</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>YouTube</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    padding: 20,
  },

  header: {
    marginTop: 30,
    marginBottom: 30,
  },

  greeting: {
    color: '#AAAAAA',
    fontSize: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 5,
  },

  subtitle: {
    color: '#888888',
    marginTop: 5,
    fontSize: 15,
  },

  mainButton: {
    backgroundColor: '#15D4E8',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  card: {
    width: '48%',
    backgroundColor: '#171C29',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 30,
  },

  cardText: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },

  project: {
    backgroundColor: '#171C29',
    padding: 20,
    borderRadius: 18,
  },

  projectName: {
    color: '#BBBBBB',
    fontSize: 16,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: '#171C29',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    color: '#15D4E8',
    fontWeight: '600',
  },
});