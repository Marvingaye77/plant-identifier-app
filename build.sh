#!/bin/bash

echo "🚀 Plant Identifier App - Build Script"
echo "======================================"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Ask which platform to build
echo "Which platform do you want to build for?"
echo "1) iOS (iPhone)"
echo "2) Android (Google Play)"
echo "3) Both"
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🍎 Building for iOS..."
        npx eas-cli build --platform ios
        ;;
    2)
        echo "🤖 Building for Android..."
        npx eas-cli build --platform android
        ;;
    3)
        echo "🍎 Building for iOS..."
        npx eas-cli build --platform ios
        echo ""
        echo "🤖 Building for Android..."
        npx eas-cli build --platform android
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Build complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://appstoreconnect.apple.com (for iOS)"
echo "2. Go to https://play.google.com/console (for Android)"
echo "3. Upload the build files"
echo "4. Fill in app details and submit"
echo ""
echo "For detailed instructions, see DEPLOYMENT_GUIDE.md"
