# Plant Identifier - Apple App Store Setup Guide

## For: Marvin J Smith
## Email: minkybiscuit77@gmail.com

---

## Step 1: Create Apple Developer Account

**Time needed:** 20 minutes + 1-2 days for verification

### What You'll Need:
- Your email: minkybiscuit77@gmail.com
- Your phone: 07542069541
- A valid payment method (credit/debit card)
- £79 (approximately $99 USD)

### How to Do It:

1. **Go to Apple Developer:**
   - Open https://developer.apple.com in your browser
   - Click the blue "Account" button in the top right

2. **Sign In or Create Apple ID:**
   - If you have an Apple ID (iCloud account), sign in
   - If not, click "Create Apple ID"
   - Use email: minkybiscuit77@gmail.com
   - Create a strong password
   - Complete verification (Apple will send a code to your email)

3. **Enroll in Apple Developer Program:**
   - After signing in, click "Enroll"
   - Select "Individual" (not Company)
   - Fill in your details:
     - Name: Marvin J Smith
     - Country: United Kingdom
     - Address: Your home address
   - Accept the terms
   - Pay £79 with your credit/debit card

4. **Verify Your Identity:**
   - Apple will call your phone: 07542069541
   - Answer and verify you're the account holder
   - This takes 1-2 days

5. **Wait for Approval:**
   - Check your email for confirmation
   - Usually approved within 1-2 business days

---

## Step 2: Create Your App in App Store Connect

**Time needed:** 15 minutes

### Once Your Developer Account is Approved:

1. **Go to App Store Connect:**
   - Open https://appstoreconnect.apple.com
   - Sign in with your Apple ID (minkybiscuit77@gmail.com)

2. **Create New App:**
   - Click "My Apps" in the top left
   - Click the blue "+" button
   - Click "New App"

3. **Fill in App Details:**
   - **Platform:** iOS
   - **Name:** Plant Identifier
   - **Primary Language:** English
   - **Bundle ID:** com.plantidentifier.app
   - **SKU:** plant-identifier-001
   - **User Access:** Full Access
   - Click "Create"

4. **You're Done!**
   - Your app is now created in App Store Connect
   - You'll fill in more details later

---

## Step 3: Set Up In-App Purchases (Subscriptions)

**Time needed:** 10 minutes

### Create Your Subscription Products:

1. **In App Store Connect, go to your app**
2. **Click "In-App Purchases" on the left menu**
3. **Click the blue "+" button to add a subscription**

### Create Subscription #1: Basic

- **Reference Name:** Basic Monthly
- **Product ID:** com.plantidentifier.basic
- **Subscription Duration:** Monthly
- **Price Tier:** £2.99
- **Billing:** Recurring monthly
- **Click "Create"**

### Create Subscription #2: Plus

- **Reference Name:** Plus Monthly
- **Product ID:** com.plantidentifier.plus
- **Subscription Duration:** Monthly
- **Price Tier:** £9.99
- **Billing:** Recurring monthly
- **Click "Create"**

### Create Subscription #3: Premium

- **Reference Name:** Premium Monthly
- **Product ID:** com.plantidentifier.premium
- **Subscription Duration:** Monthly
- **Price Tier:** £19.99
- **Billing:** Recurring monthly
- **Click "Create"**

---

## Step 4: Set Up Tax and Payment Information

**Time needed:** 10 minutes

### Add Your Bank Account:

1. **In App Store Connect, click "Users and Access"**
2. **Click "Agreements, Tax, and Banking"**
3. **Click "Set Up"** next to "Banking Information"
4. **Enter Your Bank Details:**
   - Bank name
   - Account holder name: Marvin J Smith
   - Account number
   - Sort code
   - IBAN (if available)
5. **Click "Save"**

### Add Tax Information:

1. **Still in "Agreements, Tax, and Banking"**
2. **Click "Set Up"** next to "Tax Information"
3. **Select:** United Kingdom
4. **Tax Status:** Individual
5. **Enter your details as requested**
6. **Click "Save"**

---

## Step 5: Prepare Your App Submission

**Time needed:** 30 minutes (we provide the content)

You'll need to fill in these details in App Store Connect:

### App Information:
- **Name:** Plant Identifier
- **Subtitle:** Identify plants, diagnose diseases, wellness recipes
- **Description:** (See APP_DESCRIPTION.md)
- **Keywords:** plants, identification, gardening, wellness, health
- **Support URL:** https://plantidentifier.app/support
- **Privacy Policy URL:** https://plantidentifier.app/privacy

### Screenshots:
- You need 5 screenshots per device type
- We'll provide templates

### Category:
- **Primary Category:** Lifestyle
- **Secondary Category:** Health & Fitness

### Content Rating:
- Answer Apple's questionnaire
- Select "4+" (no violence, no adult content)

---

## Step 6: Upload Your Build

**Time needed:** 5 minutes

1. **Build your app:**
   ```
   cd /home/ubuntu/plant-identifier-app
   npm run build
   ```

2. **In App Store Connect:**
   - Go to your app
   - Click "TestFlight" on the left
   - Click "+" to add a build
   - Upload the .ipa file from your build

3. **Wait for Processing:**
   - Apple processes the build (usually 10-15 minutes)
   - You'll see it in TestFlight

---

## Step 7: Submit for Review

**Time needed:** 5 minutes

1. **In App Store Connect:**
   - Click "App Information"
   - Fill in all required fields
   - Click "Save"

2. **Click "Prepare for Submission"**
   - Review all information
   - Make sure everything is correct

3. **Click "Submit for Review"**
   - Answer the submission questionnaire
   - Accept the terms
   - Click "Submit"

4. **Your app is now in review!**
   - Apple reviews it (usually 24-48 hours)
   - You'll get an email when approved

---

## Troubleshooting

### "Bundle ID already exists"
- Use a different Bundle ID
- Try: com.marvinjsmith.plantidentifier

### "Payment method declined"
- Make sure your card has enough funds
- Try a different card
- Contact your bank

### "Identity verification failed"
- Make sure you answer the phone when Apple calls
- Verify your information is correct
- Try again after 24 hours

### "App rejected"
- Read Apple's rejection reason carefully
- Fix the issue
- Resubmit

---

## Important Dates

- **Today:** Create account
- **1-2 days:** Account approved
- **This week:** Submit app
- **24-48 hours:** App reviewed
- **Next week:** App goes live!

---

## Support

If you get stuck:
1. Check Apple's help: https://developer.apple.com/support
2. Email Apple Support: developer-relations@apple.com
3. Contact us for help

---

## Next Steps

1. ✅ Create Apple Developer Account
2. ✅ Create App in App Store Connect
3. ✅ Set up subscriptions
4. ✅ Add tax and banking info
5. ⏳ Upload screenshots and description
6. ⏳ Upload your build
7. ⏳ Submit for review

You're ready to start! 🚀
