# Plant Identifier - Amazon Appstore Setup Guide

## For: Marvin J Smith
## Email: minkybiscuit77@gmail.com

---

## Step 1: Create Amazon Developer Account

**Time needed:** 10 minutes + instant approval

### What You'll Need:
- Your email: minkybiscuit77@gmail.com
- No payment required (completely free!)

### How to Do It:

1. **Go to Amazon Developer:**
   - Open https://developer.amazon.com in your browser
   - Click "Sign up" in the top right

2. **Create Amazon Account:**
   - Use email: minkybiscuit77@gmail.com
   - Create a password
   - Complete verification

3. **Select "Apps & Games":**
   - Click "Apps & Games" from the menu
   - Click "Appstore"
   - Click "Register as developer"

4. **Fill in Your Details:**
   - Name: Marvin J Smith
   - Country: United Kingdom
   - Accept terms
   - Click "Register"

5. **You're Done!**
   - Your account is instantly approved
   - No fees, no waiting

---

## Step 2: Create Your App

**Time needed:** 10 minutes

### In Amazon Appstore:

1. **Click "Add a New App"**
   - Select "Android"
   - Click "Continue"

2. **Fill in App Details:**
   - **App title:** Plant Identifier
   - **Short description:** Identify plants with your camera
   - **Long description:** (See APP_DESCRIPTION.md)
   - **Category:** Lifestyle
   - **Content rating:** Everyone
   - Click "Save"

3. **You're Done!**
   - Your app is created
   - You'll add more details later

---

## Step 3: Set Up In-App Purchases (Subscriptions)

**Time needed:** 10 minutes

### Create Your Subscription Products:

1. **In Amazon Appstore, go to your app**
2. **Click "In-App Items"**
3. **Click "Add In-App Item"**

### Create Subscription #1: Basic

- **Item type:** Subscription
- **SKU:** plant_identifier_basic
- **Title:** Basic Monthly
- **Description:** Access to plant identification and basic care guides
- **Subscription duration:** Monthly
- **Price:** £2.99
- **Click "Save"**

### Create Subscription #2: Plus

- **Item type:** Subscription
- **SKU:** plant_identifier_plus
- **Title:** Plus Monthly
- **Description:** Advanced features, unlimited plants, all recipes
- **Subscription duration:** Monthly
- **Price:** £9.99
- **Click "Save"**

### Create Subscription #3: Premium

- **Item type:** Subscription
- **SKU:** plant_identifier_premium
- **Title:** Premium Monthly
- **Description:** Everything in Plus + AI recommendations + offline mode
- **Subscription duration:** Monthly
- **Price:** £19.99
- **Click "Save"**

---

## Step 4: Set Up Payment Information

**Time needed:** 5 minutes

### Add Your Bank Account:

1. **In Amazon Appstore, click "Settings"**
2. **Click "Payment Settings"**
3. **Click "Add Payment Method"**
4. **Enter Your Bank Details:**
   - Account holder: Marvin J Smith
   - Account number
   - Sort code
   - IBAN
5. **Click "Save"**

---

## Step 5: Prepare Your App Submission

**Time needed:** 30 minutes (we provide the content)

You'll need to fill in these details in Amazon Appstore:

### App Information:
- **App title:** Plant Identifier
- **Short description:** Identify plants, diagnose diseases, wellness recipes
- **Long description:** (See APP_DESCRIPTION.md)
- **Category:** Lifestyle
- **Content rating:** Everyone

### Screenshots:
- You need 5 screenshots (phone)
- We'll provide templates

### Privacy Policy:
- You'll add this in the next step

---

## Step 6: Upload Your Build

**Time needed:** 5 minutes

1. **Build your app:**
   ```
   cd /home/ubuntu/plant-identifier-app
   npm run build
   ```

2. **In Amazon Appstore:**
   - Go to your app
   - Click "Binary File"
   - Click "Add Binary"
   - Upload the .apk file from your build

3. **Review the details:**
   - Device support: All devices
   - Minimum Android version: 8.0
   - Click "Save"

---

## Step 7: Complete Store Listing

**Time needed:** 20 minutes

1. **In Amazon Appstore:**
   - Click "Store Listing"
   - Fill in all required fields:
     - App title: Plant Identifier
     - Short description: (provided)
     - Long description: (provided)
     - Screenshots: (we'll provide)
     - Category: Lifestyle
     - Content rating: Everyone

2. **Add Privacy Policy:**
   - Click "Privacy Policy"
   - Paste your privacy policy (we'll provide)
   - Click "Save"

---

## Step 8: Submit for Review

**Time needed:** 5 minutes

1. **In Amazon Appstore:**
   - Review all information
   - Make sure everything is correct

2. **Click "Submit"**
   - Review the details
   - Accept terms
   - Click "Submit for Review"

3. **Your app is now in review!**
   - Amazon reviews it (usually 24-48 hours)
   - You'll get an email when approved

---

## Troubleshooting

### "Binary file rejected"
- Make sure the .apk file is valid
- Try uploading again
- Check file size (should be under 500MB)

### "App rejected"
- Read Amazon's rejection reason
- Fix the issue
- Resubmit

### "Payment method declined"
- Make sure your card has enough funds
- Try a different card
- Contact your bank

---

## Important Dates

- **Today:** Create account
- **Instantly:** Account approved
- **This week:** Submit app
- **24-48 hours:** App reviewed
- **Next week:** App goes live!

---

## Support

If you get stuck:
1. Check Amazon's help: https://developer.amazon.com/support
2. Email Amazon Support: developer-support@amazon.com
3. Contact us for help

---

## Next Steps

1. ✅ Create Amazon Developer Account
2. ✅ Create App
3. ✅ Set up subscriptions
4. ✅ Add payment info
5. ⏳ Upload screenshots and description
6. ⏳ Upload your build
7. ⏳ Complete store listing
8. ⏳ Submit for review

You're ready to start! 🚀
