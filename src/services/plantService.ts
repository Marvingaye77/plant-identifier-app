import axios from 'axios';

// Using Plant.id API for plant identification
const PLANT_API_KEY = 'YOUR_PLANT_ID_API_KEY'; // User will need to configure
const PLANT_API_URL = 'https://api.plant.id/v2/identify';

export interface PlantIdentificationResult {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  diseases: Disease[];
  careInstructions: string;
  wateringNeeds: string;
  sunlightNeeds: string;
  confidence: number;
}

export interface Disease {
  name: string;
  symptoms: string;
  remedies: string[];
  severity: 'low' | 'medium' | 'high';
}

// Mock plant database - in production, this would come from an API
const MOCK_PLANTS: Record<string, PlantIdentificationResult> = {
  'rose': {
    id: 'rose_001',
    name: 'Rose',
    scientificName: 'Rosa spp.',
    description: 'Beautiful flowering plant known for its vibrant colors and fragrance.',
    diseases: [
      {
        name: 'Black Spot',
        symptoms: 'Dark spots on leaves with yellow halos',
        remedies: [
          'Remove affected leaves',
          'Apply neem oil spray',
          'Ensure good air circulation',
          'Water at soil level only'
        ],
        severity: 'medium'
      },
      {
        name: 'Powdery Mildew',
        symptoms: 'White powder-like coating on leaves',
        remedies: [
          'Mix baking soda with water and spray',
          'Apply sulfur dust',
          'Increase air circulation',
          'Reduce humidity'
        ],
        severity: 'medium'
      }
    ],
    careInstructions: 'Roses need at least 6 hours of direct sunlight daily.',
    wateringNeeds: 'Water deeply once or twice per week',
    sunlightNeeds: '6-8 hours of direct sunlight',
    confidence: 0.95
  },
  'tomato': {
    id: 'tomato_001',
    name: 'Tomato Plant',
    scientificName: 'Solanum lycopersicum',
    description: 'Fruiting plant commonly grown in gardens for its edible fruits.',
    diseases: [
      {
        name: 'Early Blight',
        symptoms: 'Brown spots with concentric rings on lower leaves',
        remedies: [
          'Remove infected leaves',
          'Apply copper fungicide',
          'Improve air circulation',
          'Avoid overhead watering'
        ],
        severity: 'high'
      },
      {
        name: 'Blossom End Rot',
        symptoms: 'Dark, sunken spots on fruit bottom',
        remedies: [
          'Maintain consistent watering',
          'Add calcium to soil',
          'Mulch around base',
          'Avoid nitrogen excess'
        ],
        severity: 'medium'
      }
    ],
    careInstructions: 'Tomatoes are heat-loving plants that need support as they grow.',
    wateringNeeds: 'Water deeply and consistently, 1-2 inches per week',
    sunlightNeeds: '6-8 hours of direct sunlight minimum',
    confidence: 0.92
  },
  'basil': {
    id: 'basil_001',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    description: 'Aromatic herb commonly used in cooking, especially Italian cuisine.',
    diseases: [
      {
        name: 'Fusarium Wilt',
        symptoms: 'Yellowing and wilting of leaves despite moist soil',
        remedies: [
          'Remove affected plants',
          'Improve soil drainage',
          'Use sterile potting mix',
          'Avoid overwatering'
        ],
        severity: 'high'
      }
    ],
    careInstructions: 'Pinch off flower buds to encourage leaf growth.',
    wateringNeeds: 'Keep soil consistently moist but not waterlogged',
    sunlightNeeds: '6-8 hours of sunlight daily',
    confidence: 0.88
  }
};

export const identifyPlant = async (imageUri: string): Promise<PlantIdentificationResult | null> => {
  try {
    // In production, this would send to Plant.id API or similar
    // For now, return mock data
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return a random plant from mock database
    const plants = Object.values(MOCK_PLANTS);
    return plants[Math.floor(Math.random() * plants.length)];
  } catch (error) {
    console.error('Plant identification failed:', error);
    return null;
  }
};

export const getPlantByName = (name: string): PlantIdentificationResult | null => {
  const key = name.toLowerCase();
  return MOCK_PLANTS[key] || null;
};

export const getAllPlants = (): PlantIdentificationResult[] => {
  return Object.values(MOCK_PLANTS);
};
