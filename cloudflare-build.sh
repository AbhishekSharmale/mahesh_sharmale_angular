#!/bin/bash
# Install dependencies
npm ci

# Build the Angular app with the production configuration
npm run build -- --configuration=production