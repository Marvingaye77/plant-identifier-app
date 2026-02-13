import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { identifyPlant } from '../services/plantService';
import { useAuthStore } from '../store/authStore';

export default function ScannerScreen({ navigation }: any) {
  const [permission, requestPermission] = useCameraPermissions();
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        setSelectedImage(photo.uri);
        await identifyPlantImage(photo.uri);
      } catch (error) {
        Alert.alert('Error', 'Failed to take picture');
      }
    }
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        setSelectedImage(imageUri);
        await identifyPlantImage(imageUri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const identifyPlantImage = async (imageUri: string) => {
    setIsIdentifying(true);
    try {
      const result = await identifyPlant(imageUri);
      if (result) {
        navigation.navigate('Results', { plant: result, imageUri });
        setSelectedImage(null);
      } else {
        Alert.alert('Error', 'Could not identify plant. Please try another image.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to identify plant');
    } finally {
      setIsIdentifying(false);
    }
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1e40af" />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Camera permission is required</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
          {isIdentifying && (
            <View style={styles.identifyingOverlay}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.identifyingText}>Identifying plant...</Text>
            </View>
          )}
        </View>
      ) : (
        <CameraView style={styles.camera} ref={cameraRef} facing="back" />
      )}

      <View style={styles.controlsContainer}>
        {selectedImage ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setSelectedImage(null)}
              disabled={isIdentifying}
            >
              <Ionicons name="close" size={24} color="#fff" />
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.galleryButton]}
              onPress={handlePickImage}
            >
              <Ionicons name="images" size={24} color="#fff" />
              <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.captureButton]}
              onPress={handleTakePicture}
            >
              <Ionicons name="camera" size={32} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.infoButton]}
              onPress={() => Alert.alert(
                'How to Use',
                'Point your camera at a plant or flower and tap the camera button to identify it. You can also select an image from your gallery.'
              )}
            >
              <Ionicons name="information-circle" size={24} color="#fff" />
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  previewContainer: {
    flex: 1,
    position: 'relative',
  },
  previewImage: {
    flex: 1,
    width: '100%',
  },
  identifyingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  identifyingText: {
    color: '#fff',
    marginTop: 16,
    fontSize: 16,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  captureButton: {
    backgroundColor: '#1e40af',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  galleryButton: {
    backgroundColor: '#6366f1',
  },
  cancelButton: {
    backgroundColor: '#dc2626',
  },
  infoButton: {
    backgroundColor: '#0891b2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  permissionText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
