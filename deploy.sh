#!/bin/bash

# Production Deployment Script
echo "🚀 Preparing for production deployment..."

# Navigate to project directory
cd /Users/user/Desktop/NBStuff/dev/nb.me

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Run linter to check for errors
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "❌ Linting failed! Please fix the errors before deploying."
    exit 1
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "✅ Build successful! Ready for deployment."
echo "📁 Production files are in the .next/ directory"
echo "🌐 You can test the production build locally with: npm start"
