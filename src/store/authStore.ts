import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export type SubscriptionTier = 'free' | 'basic' | 'plus' | 'premium';

interface AuthState {
  userId: string | null;
  subscriptionTier: SubscriptionTier;
  trialEndDate: Date | null;
  subscriptionEndDate: Date | null;
  isInitialized: boolean;
  initializeAuth: () => Promise<void>;
  setUserId: (id: string) => Promise<void>;
  setSubscriptionTier: (tier: SubscriptionTier) => Promise<void>;
  startTrial: () => Promise<void>;
  upgradeToPremium: (tier: SubscriptionTier) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  subscriptionTier: 'free',
  trialEndDate: null,
  subscriptionEndDate: null,
  isInitialized: false,

  initializeAuth: async () => {
    try {
      const storedUserId = await AsyncStorage.getItem('userId');
      const storedTier = (await AsyncStorage.getItem('subscriptionTier')) as SubscriptionTier | null;
      const storedTrialEnd = await AsyncStorage.getItem('trialEndDate');
      const storedSubEnd = await AsyncStorage.getItem('subscriptionEndDate');

      set({
        userId: storedUserId,
        subscriptionTier: storedTier || 'free',
        trialEndDate: storedTrialEnd ? new Date(storedTrialEnd) : null,
        subscriptionEndDate: storedSubEnd ? new Date(storedSubEnd) : null,
        isInitialized: true,
      });

      // If no user ID, create one
      if (!storedUserId) {
        const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await AsyncStorage.setItem('userId', newUserId);
        set({ userId: newUserId });

        // Start free trial
        const trialEnd = new Date();
        trialEnd.setDate(trialEnd.getDate() + 3);
        await AsyncStorage.setItem('trialEndDate', trialEnd.toISOString());
        set({ trialEndDate: trialEnd });
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
      set({ isInitialized: true });
    }
  },

  setUserId: async (id: string) => {
    await AsyncStorage.setItem('userId', id);
    set({ userId: id });
  },

  setSubscriptionTier: async (tier: SubscriptionTier) => {
    await AsyncStorage.setItem('subscriptionTier', tier);
    set({ subscriptionTier: tier });
  },

  startTrial: async () => {
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 3);
    await AsyncStorage.setItem('trialEndDate', trialEnd.toISOString());
    set({ trialEndDate: trialEnd, subscriptionTier: 'free' });
  },

  upgradeToPremium: async (tier: SubscriptionTier) => {
    const subscriptionEnd = new Date();
    // Set subscription to 30 days
    subscriptionEnd.setDate(subscriptionEnd.getDate() + 30);

    await AsyncStorage.setItem('subscriptionTier', tier);
    await AsyncStorage.setItem('subscriptionEndDate', subscriptionEnd.toISOString());

    set({
      subscriptionTier: tier,
      subscriptionEndDate: subscriptionEnd,
      trialEndDate: null,
    });
  },

  logout: async () => {
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('subscriptionTier');
    await AsyncStorage.removeItem('trialEndDate');
    await AsyncStorage.removeItem('subscriptionEndDate');
    set({
      userId: null,
      subscriptionTier: 'free',
      trialEndDate: null,
      subscriptionEndDate: null,
    });
  },
}));
