# Plant Identifier - Google Play Store Setup Guide

## For: Marvin J Smith
## Email: minkybiscuit77@gmail.com

---

## Step 1: Create Google Play Developer Account

**Time needed:** 10 minutes + instant approval

### What You'll Need:
- Your Google account (Gmail): minkybiscuit77@gmail.com
- A valid payment method (credit/debit card)
- £19 (approximately $25 USD) - one-time fee

### How to Do It:

1. **Go to Google Play Console:**
   - Open https://play.google.com/console in your browser
   - Sign in with your Gmail: minkybiscuit77@gmail.com
   - If you don't have a Google account, create one first

2. **Create Developer Account:**
   - Click "Create account"
   - Accept the terms
   - Enter your details:
     - Name: Marvin J Smith
     - Email: minkybiscuit77@gmail.com
     - Country: United Kingdom
     - Phone: 07542069541

3. **Pay the Registration Fee:**
   - Pay £19 with your credit/debit card
   - This is a one-time fee (never pay again)

4. **You're Done!**
   - Your account is instantly approved
   - No waiting, no verification calls

---

## Step 2: Create Your App

**Time needed:** 10 minutes

### In Google Play Console:

1. **Click "Create app"**
   - App name: Plant Identifier
   - Default language: English
   - App type: Application
   - Category: Lifestyle
   - Click "Create app"

2. **Fill in Basic Information:**
   - Short description: "Identify plants with your camera"
   - Full description: (See APP_DESCRIPTION.md)
   - Developer contact email: minkybiscuit77@gmail.com
   - Website: (optional - leave blank)
   - Privacy policy: (we'll add this later)

3. **You're Done!**
   - Your app is created
   - You'll add more details later

---

## Step 3: Set Up In-App Purchases (Subscriptions)

**Time needed:** 10 minutes

### Create Your Subscription Products:

1. **In Google Play Console, go to your app**
2. **Click "Monetize" on the left menu**
3. **Click "Products" → "Subscriptions"**
4. **Click "Create subscription"**

### Create Subscription #1: Basic

- **Product ID:** plant_identifier_basic
- **Default name:** Basic Plan
- **Description:** Access to plant identification and basic care guides
- **Billing period:** Monthly
- **Price:** £2.99
- **Click "Save"**

### Create Subscription #2: Plus

- **Product ID:** plant_identifier_plus
- **Default name:** Plus Plan
- **Description:** Advanced features, unlimited plants, all recipes
- **Billing period:** Monthly
- **Price:** £9.99
- **Click "Save"**

### Create Subscription #3: Premium

- **Product ID:** plant_identifier_premium
- **Default name:** Premium Plan
- **Description:** Everything in Plus + AI recommendations + offline mode
- **Billing period:** Monthly
- **Price:** £19.99
- **Click "Save"**

---

## Step 4: Set Up Tax and Payment Information

**Time needed:** 10 minutes

### Add Your Bank Account:

1. **In Google Play Console, click "Setup" on the left**
2. **Click "Payments profile"**
3. **Click "Add payment method"**
4. **Enter Your Bank Details:**
   - Account holder: Marvin J Smith
   - Account number
   - Sort code
   - IBAN
5. **Click "Save"**

### Add Tax Information:

1. **Still in Setup**
2. **Click "Tax settings"**
3. **Select:** United Kingdom
4. **Tax status:** Individual
5. **Enter your details as requested**
6. **Click "Save"**

---

## Step 5: Prepare Your App Submission

**Time needed:** 30 minutes (we provide the content)

You'll need to fill in these details in Google Play Console:

### App Information:
- **App name:** Plant Identifier
- **Short description:** Identify plants, diagnose diseases, wellness recipes
- **Full description:** (See APP_DESCRIPTION.md)
- **Category:** Lifestyle
- **Content rating:** Everyone (4+)

### Screenshots:
- You need 8 screenshots (phone)
- We'll provide templates

### Privacy Policy:
- You'll add this in the next step

### Contact Information:
- Email: minkybiscuit77@gmail.com
- Website: (optional)

---

## Step 6: Upload Your Build

**Time needed:** 5 minutes

1. **Build your app:**
   ```
   cd /home/ubuntu/plant-identifier-app
   npm run build
   ```

2. **In Google Play Console:**
   - Go to your app
   - Click "Release" on the left
   - Click "Production"
   - Click "Create new release"
   - Upload the .aab file from your build

3. **Review the details:**
   - Release name: "1.0.0"
   - Release notes: "Initial release"
   - Click "Save"

---

## Step 7: Complete Store Listing

**Time needed:** 20 minutes

1. **In Google Play Console:**
   - Click "Store listing" on the left
   - Fill in all required fields:
     - App name: Plant Identifier
     - Short description: (provided)
     - Full description: (provided)
     - Screenshots: (we'll provide)
     - Feature graphic: (we'll provide)
     - Category: Lifestyle
     - Content rating: Everyone

2. **Add Privacy Policy:**
   - Click "App privacy"
   - Paste your privacy policy (we'll provide)
   - Click "Save"

---

## Step 8: Review Content Rating

**Time needed:** 5 minutes

1. **In Google Play Console:**
   - Click "Content rating" on the left
   - Answer Google's questionnaire:
     - Violence: None
     - Sexual content: None
     - Alcohol/tobacco: None
     - Other: None
   - Click "Save"

---

## Step 9: Submit for Review

**Time needed:** 5 minutes

1. **In Google Play Console:**
   - Review all information
   - Make sure everything is correct

2. **Click "Review and roll out"**
   - Review the details
   - Click "Start rollout to production"

3. **Your app is now in review!**
   - Google reviews it (usually 2-4 hours)
   - You'll get an email when approved

---

## Troubleshooting

### "Payment method declined"
- Make sure your card has enough funds
- Try a different card
- Contact your bank

### "App rejected"
- Read Google's rejection reason
- Fix the issue
- Resubmit

### "Build upload failed"
- Make sure the .aab file is valid
- Try uploading again
- Check file size (should be under 500MB)

---

## Important Dates

- **Today:** Create account
- **Instantly:** Account approved
- **This week:** Submit app
- **2-4 hours:** App reviewed
- **Same day:** App goes live!

---

## Support

If you get stuck:
1. Check Google's help: https://support.google.com/googleplay
2. Email Google Support: https://support.google.com/googleplay/contact/general_support
3. Contact us for help

---

## Next Steps

1. ✅ Create Google Play Developer Account
2. ✅ Create App
3. ✅ Set up subscriptions
4. ✅ Add tax and banking info
5. ⏳ Upload screenshots and description
6. ⏳ Upload your build
7. ⏳ Complete store listing
8. ⏳ Submit for review

You're ready to start! 🚀
