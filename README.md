# DevOps Simulator

A comprehensive CI/CD configuration management tool for enterprise deployments.

## Project Status

- **Version**: 1.0.0 (Production), 2.0.0-beta (Development)
- **Environment**: Production & Development
- **Student**: Babitha Esther Rani Anguluri
- **Student ID**: 23P31A05A1

## New Features (In Development)
- 🚀 Kubernetes orchestration support
- 🔄 Advanced blue-green deployment
- 📊 Enhanced monitoring dashboard
- 🔐 OAuth2 authentication
- 🐳 Docker Compose integration

## Features
### Core Features
- Automated deployment scripts
- Real-time monitoring
- Configuration management
- Backup and recovery system

### Production Features
- SSL/TLS encryption
- Auto-scaling
- Load balancer integration 
- Scheduled backups

### Development Features
- Docker Compose integration
- Hot reload enabled
- Debug mode active
- Enhanced logging
- Mock external APIs

## Quick Start
### Development Mode
1. Clone the repository  
2. Install dependencies: `npm install`  
3. Configure environment variables  
4. Run in development mode: `npm run dev`  
5. Access dashboard at [http://localhost:3000](http://localhost:3000)

### Production Mode
```bash
export DEPLOY_ENV=production
./scripts/deploy.sh
