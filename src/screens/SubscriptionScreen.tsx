import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore } from '../store/authStore';

const SUBSCRIPTION_TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    price: '£2.99',
    period: 'per month',
    description: 'Perfect for casual plant lovers',
    features: [
      'Plant identification',
      'Basic care guides',
      '5 saved plants',
      'Limited recipes',
    ],
    color: '#6366f1',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '£9.99',
    period: 'per month',
    description: 'For serious plant enthusiasts',
    features: [
      'Everything in Basic',
      'Advanced disease diagnosis',
      'Unlimited saved plants',
      'All wellness recipes',
      'Priority support',
    ],
    color: '#0891b2',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£19.99',
    period: 'per month',
    description: 'Ultimate plant care companion',
    features: [
      'Everything in Plus',
      'AI-powered care recommendations',
      'Seasonal planting guides',
      'Expert consultation access',
      'Ad-free experience',
      'Offline mode',
    ],
    color: '#10b981',
  },
];

export default function SubscriptionScreen() {
  const { subscriptionTier, trialEndDate, subscriptionEndDate, upgradeToPremium } =
    useAuthStore();
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const endDate = subscriptionTier === 'free' ? trialEndDate : subscriptionEndDate;
      if (endDate) {
        const today = new Date();
        const diff = Math.ceil(
          (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        setDaysLeft(Math.max(0, diff));
      }
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [subscriptionTier, trialEndDate, subscriptionEndDate]);

  const handleUpgrade = async (tier: string) => {
    try {
      // In production, this would integrate with app store billing
      Alert.alert(
        'Upgrade to ' + tier.charAt(0).toUpperCase() + tier.slice(1),
        'This will open the app store for payment processing.',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Proceed',
            onPress: async () => {
              await upgradeToPremium(tier as any);
              Alert.alert(
                'Success',
                'Your subscription has been activated!'
              );
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to process upgrade');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Current Status */}
      <View style={styles.statusContainer}>
        <View style={styles.statusCard}>
          <Ionicons name="star" size={32} color="#f59e0b" />
          <Text style={styles.currentPlan}>
            Current Plan:{' '}
            <Text style={styles.currentPlanValue}>
              {subscriptionTier === 'free' ? 'Free Trial' : subscriptionTier.charAt(0).toUpperCase() + subscriptionTier.slice(1)}
            </Text>
          </Text>
          {daysLeft !== null && (
            <Text style={styles.daysLeft}>
              {daysLeft} days remaining
            </Text>
          )}
        </View>
      </View>

      {/* Trial Info */}
      {subscriptionTier === 'free' && (
        <View style={styles.trialBanner}>
          <Ionicons name="information-circle" size={20} color="#0369a1" />
          <View style={styles.trialText}>
            <Text style={styles.trialTitle}>3-Day Free Trial</Text>
            <Text style={styles.trialDescription}>
              Enjoy full access to all features for 3 days. Upgrade anytime to continue.
            </Text>
          </View>
        </View>
      )}

      {/* Subscription Tiers */}
      <View style={styles.tiersContainer}>
        {SUBSCRIPTION_TIERS.map(tier => (
          <View
            key={tier.id}
            style={[
              styles.tierCard,
              tier.popular && styles.tierCardPopular,
            ]}
          >
            {tier.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
              </View>
            )}

            <Text style={styles.tierName}>{tier.name}</Text>
            <Text style={styles.tierPrice}>{tier.price}</Text>
            <Text style={styles.tierPeriod}>{tier.period}</Text>
            <Text style={styles.tierDescription}>{tier.description}</Text>

            {/* Features */}
            <View style={styles.featuresList}>
              {tier.features.map((feature, idx) => (
                <View key={idx} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={18} color={tier.color} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            {/* Action Button */}
            {subscriptionTier === tier.id ? (
              <View style={[styles.button, styles.currentButton]}>
                <Text style={styles.currentButtonText}>Current Plan</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={[styles.button, { backgroundColor: tier.color }]}
                onPress={() => handleUpgrade(tier.id)}
              >
                <Text style={styles.buttonText}>Upgrade Now</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Can I cancel anytime?</Text>
          <Text style={styles.faqAnswer}>
            Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>What payment methods do you accept?</Text>
          <Text style={styles.faqAnswer}>
            We accept all major payment methods through the app store: credit cards, debit cards, and your app store account balance.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Do you offer refunds?</Text>
          <Text style={styles.faqAnswer}>
            Refunds are handled through your app store. Most app stores offer refunds within 48 hours of purchase.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Can I upgrade or downgrade?</Text>
          <Text style={styles.faqAnswer}>
            Yes, you can change your plan at any time. Changes take effect on your next billing date.
          </Text>
        </View>
      </View>

      {/* Support */}
      <TouchableOpacity style={styles.supportButton}>
        <Ionicons name="help-circle" size={20} color="#1e40af" />
        <Text style={styles.supportButtonText}>Need Help? Contact Support</Text>
      </TouchableOpacity>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  statusContainer: {
    padding: 16,
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  currentPlan: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 12,
  },
  currentPlanValue: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  daysLeft: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
    marginTop: 8,
  },
  trialBanner: {
    flexDirection: 'row',
    backgroundColor: '#e0f2fe',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 12,
  },
  trialText: {
    flex: 1,
  },
  trialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0369a1',
  },
  trialDescription: {
    fontSize: 12,
    color: '#0c4a6e',
    marginTop: 4,
    lineHeight: 16,
  },
  tiersContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  tierCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  tierCardPopular: {
    borderColor: '#0891b2',
    backgroundColor: '#f0f9ff',
  },
  popularBadge: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  popularBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  tierName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  tierPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    marginTop: 8,
  },
  tierPeriod: {
    fontSize: 13,
    color: '#6b7280',
  },
  tierDescription: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 8,
    marginBottom: 16,
  },
  featuresList: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  featureText: {
    fontSize: 13,
    color: '#4b5563',
    flex: 1,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  currentButton: {
    backgroundColor: '#e5e7eb',
  },
  currentButtonText: {
    color: '#6b7280',
    fontWeight: '600',
    fontSize: 14,
  },
  faqContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1e40af',
    gap: 8,
  },
  supportButtonText: {
    color: '#1e40af',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomPadding: {
    height: 32,
  },
});
