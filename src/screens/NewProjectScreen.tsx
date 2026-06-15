import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function NewProjectScreen() {
  const [projectName, setProjectName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nouveau projet
      </Text>

      <Text style={styles.label}>
        Nom du projet
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Ma vidéo TikTok"
        placeholderTextColor="#777"
        value={projectName}
        onChangeText={setProjectName}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Créer le projet
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    color: '#ccc',
    marginBottom: 10,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#171C29',
    borderRadius: 15,
    padding: 15,
    color: '#fff',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#15D4E8',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});