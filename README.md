# Plant Identifier App

A React Native mobile app for identifying plants, diagnosing diseases, and accessing wellness recipes with herbal remedies.

## Features

- **Plant Identification**: Use your camera to identify plants and flowers
- **Disease Diagnosis**: Get detailed information about plant diseases and natural remedies
- **Wellness Recipes**: Access a curated database of herbal remedies for common ailments
- **Tiered Subscriptions**: 3-day free trial, then Basic (£2.99), Plus (£9.99), or Premium (£19.99)
- **App Store Integration**: Deploy to Google Play, Apple App Store, and Amazon Appstore

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode (for iOS builds)
- Android: Android Studio (for Android builds)

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start the development server
npm start

# or
yarn start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Project Structure

```
plant-identifier-app/
├── App.tsx                 # Main app component
├── app.json               # Expo configuration
├── src/
│   ├── screens/           # Screen components
│   │   ├── ScannerScreen.tsx
│   │   ├── ResultsScreen.tsx
│   │   ├── RecipesScreen.tsx
│   │   ├── SubscriptionScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── services/          # Business logic
│   │   ├── plantService.ts
│   │   └── recipesService.ts
│   └── store/             # State management
│       └── authStore.ts
└── package.json
```

## Deployment

### iOS (Apple App Store)

1. Install EAS CLI: `npm install -g eas-cli`
2. Login to your Apple Developer account
3. Run: `eas build --platform ios`
4. Submit to App Store Connect

### Android (Google Play)

1. Generate a keystore file
2. Run: `eas build --platform android`
3. Submit to Google Play Console

### Amazon Appstore

1. Follow Amazon's app submission guidelines
2. Build and upload the APK

## Configuration

### Plant Identification API

The app currently uses mock plant data. To integrate with a real API:

1. Sign up for Plant.id API (https://plant.id)
2. Add your API key to the environment variables
3. Update `src/services/plantService.ts` with your API endpoint

### App Store Billing

The app is configured for app store billing. To enable:

1. Set up billing in your app store developer account
2. Configure subscription products in each store
3. Update the subscription tier IDs in `src/screens/SubscriptionScreen.tsx`

## Environment Variables

Create a `.env` file in the root directory:

```
PLANT_API_KEY=your_plant_id_api_key
PLANT_API_URL=https://api.plant.id/v2/identify
```

## Testing

The app includes a 3-day free trial. To test subscriptions:

1. Use test accounts provided by each app store
2. Test purchases in sandbox mode before production

## Support

For issues or questions:
- Email: support@plantidentifier.app
- Website: https://plantidentifier.app

## License

MIT License - see LICENSE file for details

## Privacy Policy

See PRIVACY.md for our privacy policy

## Terms of Service

See TERMS.md for our terms of service
