import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PlantIdentificationResult } from '../services/plantService';

export default function ResultsScreen({ route, navigation }: any) {
  const { plant, imageUri } = route.params as {
    plant: PlantIdentificationResult;
    imageUri: string;
  };

  const handleSaveResult = () => {
    Alert.alert('Success', 'Plant information saved to your library');
  };

  return (
    <ScrollView style={styles.container}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.plantImage} />
      )}

      <View style={styles.contentContainer}>
        {/* Plant Name */}
        <View style={styles.section}>
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.scientificName}>{plant.scientificName}</Text>
          <View style={styles.confidenceContainer}>
            <Text style={styles.confidenceLabel}>Confidence:</Text>
            <Text style={styles.confidenceValue}>
              {Math.round(plant.confidence * 100)}%
            </Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{plant.description}</Text>
        </View>

        {/* Care Instructions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Care Guide</Text>
          <View style={styles.careItem}>
            <Ionicons name="water" size={20} color="#0891b2" />
            <View style={styles.careContent}>
              <Text style={styles.careLabel}>Watering</Text>
              <Text style={styles.careText}>{plant.wateringNeeds}</Text>
            </View>
          </View>
          <View style={styles.careItem}>
            <Ionicons name="sunny" size={20} color="#f59e0b" />
            <View style={styles.careContent}>
              <Text style={styles.careLabel}>Sunlight</Text>
              <Text style={styles.careText}>{plant.sunlightNeeds}</Text>
            </View>
          </View>
          <Text style={styles.careInstructions}>{plant.careInstructions}</Text>
        </View>

        {/* Diseases & Remedies */}
        {plant.diseases.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Common Issues & Remedies</Text>
            {plant.diseases.map((disease, index) => (
              <View key={index} style={styles.diseaseCard}>
                <View style={styles.diseaseHeader}>
                  <Text style={styles.diseaseName}>{disease.name}</Text>
                  <View
                    style={[
                      styles.severityBadge,
                      disease.severity === 'high'
                        ? styles.severityHigh
                        : disease.severity === 'medium'
                        ? styles.severityMedium
                        : styles.severityLow,
                    ]}
                  >
                    <Text style={styles.severityText}>
                      {disease.severity.charAt(0).toUpperCase() +
                        disease.severity.slice(1)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.symptoms}>
                  <Text style={styles.bold}>Symptoms:</Text> {disease.symptoms}
                </Text>
                <Text style={styles.remediesTitle}>Natural Remedies:</Text>
                {disease.remedies.map((remedy, idx) => (
                  <View key={idx} style={styles.remedyItem}>
                    <Text style={styles.remedyBullet}>•</Text>
                    <Text style={styles.remedyText}>{remedy}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.saveButton]}
            onPress={handleSaveResult}
          >
            <Ionicons name="bookmark" size={20} color="#fff" />
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.shareButton]}
            onPress={() => Alert.alert('Share', 'Share this plant info with friends')}
          >
            <Ionicons name="share-social" size={20} color="#fff" />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="camera" size={20} color="#fff" />
          <Text style={styles.scanAgainText}>Scan Another Plant</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  plantImage: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  plantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  scientificName: {
    fontSize: 16,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  confidenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  confidenceLabel: {
    color: '#0369a1',
    fontWeight: '600',
  },
  confidenceValue: {
    color: '#0369a1',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  careItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
  },
  careContent: {
    marginLeft: 12,
    flex: 1,
  },
  careLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  careText: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  careInstructions: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
  },
  diseaseCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#dc2626',
  },
  diseaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  diseaseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  severityHigh: {
    backgroundColor: '#fee2e2',
  },
  severityMedium: {
    backgroundColor: '#fef3c7',
  },
  severityLow: {
    backgroundColor: '#dcfce7',
  },
  severityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1f2937',
  },
  symptoms: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 8,
    lineHeight: 20,
  },
  bold: {
    fontWeight: '600',
    color: '#1f2937',
  },
  remediesTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 6,
  },
  remedyItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  remedyBullet: {
    color: '#10b981',
    fontWeight: 'bold',
    marginRight: 8,
  },
  remedyText: {
    fontSize: 13,
    color: '#4b5563',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  saveButton: {
    backgroundColor: '#1e40af',
  },
  shareButton: {
    backgroundColor: '#6366f1',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  scanAgainButton: {
    backgroundColor: '#10b981',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
    marginBottom: 32,
  },
  scanAgainText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
