# Plant Identifier App - Complete Deployment Guide

This guide walks you through deploying your Plant Identifier app to iOS, Android, and Amazon Appstore.

## What You Have

Your app is fully built and ready. It includes:
- ✅ Plant identification with camera
- ✅ Disease diagnosis system
- ✅ Wellness recipe database
- ✅ 3-day free trial
- ✅ Tiered subscriptions (£2.99, £9.99, £19.99)
- ✅ App store billing integration
- ✅ User authentication

## Step 1: Prepare Your Accounts

### Apple App Store (iOS)

1. **Create Apple Developer Account**
   - Go to https://developer.apple.com
   - Click "Account" → "Sign up"
   - Pay $99/year for developer membership
   - Complete identity verification

2. **Create App ID**
   - Go to https://developer.apple.com/account
   - Click "Certificates, IDs & Profiles"
   - Click "Identifiers" → "+"
   - Select "App IDs"
   - Enter Bundle ID: `com.plantidentifier.app`
   - Enable "In-App Purchase"
   - Click "Continue" → "Register"

3. **Create Subscription Products**
   - Go to App Store Connect: https://appstoreconnect.apple.com
   - Click "My Apps" → "+" → "New App"
   - Name: "Plant Identifier"
   - Bundle ID: `com.plantidentifier.app`
   - SKU: `plant-identifier-001`
   - Click "Create"

4. **Add In-App Purchases**
   - In App Store Connect, go to your app
   - Click "In-App Purchases"
   - Click "+" to add subscription
   - Create 3 subscriptions:
     - **Basic**: `com.plantidentifier.basic` - £2.99/month
     - **Plus**: `com.plantidentifier.plus` - £9.99/month
     - **Premium**: `com.plantidentifier.premium` - £19.99/month

### Google Play Store (Android)

1. **Create Google Play Developer Account**
   - Go to https://play.google.com/console
   - Click "Create account"
   - Pay $25 one-time fee
   - Complete setup

2. **Create App**
   - Click "Create app"
   - Name: "Plant Identifier"
   - Default language: English
   - App type: Application
   - Category: Lifestyle
   - Click "Create app"

3. **Add In-App Products**
   - Go to "Monetize" → "Products" → "Subscriptions"
   - Click "Create subscription"
   - Create 3 subscriptions:
     - **Basic**: `plant_identifier_basic` - £2.99/month
     - **Plus**: `plant_identifier_plus` - £9.99/month
     - **Premium**: `plant_identifier_premium` - £19.99/month

### Amazon Appstore

1. **Create Amazon Developer Account**
   - Go to https://developer.amazon.com
   - Click "Apps & Games" → "Appstore"
   - Register as developer
   - No fee required

2. **Create App**
   - Click "Add a New App"
   - Choose "Android"
   - Fill in app details
   - Add in-app purchases (same as above)

## Step 2: Build the App

### For iOS

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build for iOS
eas build --platform ios

# This will:
# 1. Create a production build
# 2. Sign it with your Apple certificate
# 3. Generate an .ipa file
# 4. Upload to TestFlight (optional)
```

### For Android

```bash
# Build for Android
eas build --platform android

# This will:
# 1. Create a production build
# 2. Sign it with your keystore
# 3. Generate an .aab file (for Google Play)
# 4. Generate an .apk file (for Amazon)
```

## Step 3: Submit to App Stores

### iOS (Apple App Store)

1. **Download Build**
   - Go to https://appstoreconnect.apple.com
   - Download your build from TestFlight

2. **Complete App Information**
   - Screenshots (5 per device type)
   - Description
   - Keywords
   - Support URL
   - Privacy Policy URL

3. **Set Pricing**
   - Click "Pricing and Availability"
   - Select "Paid" or "Free with In-App Purchases"
   - Set price: Free (since you have in-app subscriptions)

4. **Submit for Review**
   - Click "Submit for Review"
   - Answer questionnaire
   - Accept terms
   - Click "Submit"

**Review Time:** 24-48 hours

### Android (Google Play)

1. **Upload Build**
   - Go to https://play.google.com/console
   - Click "Release" → "Production"
   - Click "Create new release"
   - Upload .aab file

2. **Complete Store Listing**
   - Add screenshots (8 per device type)
   - Add description
   - Add keywords
   - Add support email
   - Add privacy policy link

3. **Set Pricing**
   - Click "Pricing and distribution"
   - Select countries
   - Set price: Free (in-app purchases enabled)

4. **Submit for Review**
   - Click "Review and roll out"
   - Review all details
   - Click "Start rollout to production"

**Review Time:** 2-4 hours (usually)

### Amazon Appstore

1. **Upload Build**
   - Go to https://developer.amazon.com
   - Click "Add Binary"
   - Upload .apk file

2. **Complete Details**
   - Add screenshots
   - Add description
   - Add keywords
   - Add support info

3. **Submit**
   - Click "Submit App"

**Review Time:** 24-48 hours

## Step 4: Monitor & Maintain

### Post-Launch

1. **Monitor Reviews**
   - Check app store reviews daily
   - Respond to user feedback
   - Fix bugs quickly

2. **Track Analytics**
   - Monitor downloads
   - Track subscription conversions
   - Analyze user retention

3. **Update Regularly**
   - Add new plant species
   - Add new recipes
   - Fix bugs
   - Improve performance

### Update Process

```bash
# Make changes to your code
# Then build and submit again:

eas build --platform ios
eas build --platform android

# Submit new builds to app stores
```

## Important Notes

### Privacy Policy

You MUST have a privacy policy. Create one at:
- https://www.termly.io (free generator)
- https://www.privacypolicygenerator.info

### Terms of Service

Create terms of service covering:
- User accounts
- In-app purchases
- Refund policy
- Liability limitations

### App Store Guidelines

**Apple Requirements:**
- Minimum iOS 13.0
- Support Dark Mode
- Include privacy policy
- Clear refund policy

**Google Requirements:**
- Minimum Android 8.0
- Clear permissions explanation
- Privacy policy required
- Content rating questionnaire

**Amazon Requirements:**
- Minimum Android 4.4
- Content rating
- Privacy policy
- Support email

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
eas build --platform ios --clear-cache
```

### App Rejected

Common reasons:
1. Missing privacy policy → Add to app
2. Crashes on startup → Test thoroughly
3. Unclear in-app purchases → Make pricing clear
4. Inappropriate content → Review all text

### Low Downloads

1. Optimize app store listing (keywords, description)
2. Get reviews from beta testers
3. Post on social media
4. Consider paid advertising

## Support

If you need help:
- Expo docs: https://docs.expo.dev
- Apple: https://developer.apple.com/support
- Google: https://support.google.com/googleplay
- Amazon: https://developer.amazon.com/support

## Checklist

Before submitting to each store:

- [ ] App name and description finalized
- [ ] Screenshots created (5-8 per device)
- [ ] Privacy policy written and linked
- [ ] Terms of service written
- [ ] Support email configured
- [ ] In-app purchases set up with correct pricing
- [ ] App tested on real devices
- [ ] No crashes or bugs
- [ ] All features working
- [ ] Permissions explained
- [ ] Content rating completed
- [ ] Pricing strategy finalized

## Next Steps

1. Create your developer accounts (if not done)
2. Build the app using EAS
3. Submit to each app store
4. Wait for approval (24-48 hours)
5. Monitor reviews and user feedback
6. Iterate and improve

Good luck with your app launch! 🚀
