#!/bin/bash

# Portfolio Setup Script
echo "🚀 Setting up your Next.js Portfolio..."

# Navigate to project directory
cd /Users/user/Desktop/NBStuff/dev/nb.me

# Install dependencies with legacy peer deps to handle React 19 compatibility
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --timeout 300000

# Generate Next.js types
echo "🔧 Generating Next.js types..."
npx next telemetry disable

# Run linter to check for errors
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Start development server
echo "🎉 Starting development server..."
npm run dev
