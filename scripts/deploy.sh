#!/bin/bash
# Production Deployment Script
# Version: 1.0.0
# Development Deployment Script
# Version: 2.0.0-beta


set -e
DEPLOY_ENV=${DEPLOY_ENV:-production}
echo "====================================="

echo "DevOps Simulator - Deployment Script"
echo "====================================="


if [ "$DEPLOY_ENV" = "production" ]; then
    echo "Mode: Production"
    DEPLOY_REGION="us-east-1"
    APP_PORT=8080

    echo "Environment: $DEPLOY_ENV"
    echo "Region: $DEPLOY_REGION"
    echo "Port: $APP_PORT"
    echo "Starting production deployment..."
    echo "Pulling latest Docker images..."
    echo "Rolling update strategy initiated..."


elif [ "$DEPLOY_ENV" = "development" ]; then
    echo "Mode : Development"
    DEPLOY_MODE="docker-compose"
    APP_PORT=3000

    echo "Environment: $DEPLOY_ENV"
    echo "Mode: $DEPLOY_MODE"
    echo "Installing dependencies..."
    npm install
    echo "Starting development server..."
    docker-compose up -d


else 
    echo "Error: Unknown environment $DEPLOY_ENV"
    exit 1
fi


echo "Running tests..."
npm test


echo "Waiting for application to be ready..."
sleep 5

echo "Performing health check..."
curl -f http://localhost:$APP_PORT/health || exit 1

echo "Deployment completed successfully!"
echo "Application available at: http://localhost:$APP_PORT"
echo "Hot reload enabled - code changes will auto-refresh"

