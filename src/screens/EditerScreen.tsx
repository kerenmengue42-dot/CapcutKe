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

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Projets</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Exports</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Favoris</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Outils rapides
      </Text>

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
        <Text style={styles.projectIcon}>🎬</Text>

        <Text style={styles.projectTitle}>
          Aucun projet
        </Text>

        <Text style={styles.projectDescription}>
          Créez votre premier projet vidéo.
        </Text>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>
            Créer maintenant
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Tendances
      </Text>

      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Gaming
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            TikTok
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Business
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            YouTube
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Shorts
          </Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Vlog
          </Text>
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
    marginBottom: 25,
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

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  statCard: {
    backgroundColor: '#171C29',
    width: '31%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  statNumber: {
    color: '#15D4E8',
    fontSize: 22,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#BBBBBB',
    marginTop: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  project: {
    backgroundColor: '#171C29',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
  },

  projectIcon: {
    fontSize: 40,
  },

  projectTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  projectDescription: {
    color: '#AAAAAA',
    marginTop: 8,
    textAlign: 'center',
  },

  createButton: {
    marginTop: 20,
    backgroundColor: '#15D4E8',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
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