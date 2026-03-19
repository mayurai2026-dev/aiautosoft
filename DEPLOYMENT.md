# CloudPanel Deployment Guide

This guide explains how to deploy Ai Auto Soft on CloudPanel using PM2.

## Prerequisites

- CloudPanel installed on your server
- Node.js 18+ installed
- PM2 installed globally (`npm install -g pm2`)
- Git installed

## Step 1: Install PM2 (if not already installed)

```bash
npm install -g pm2
```

## Step 2: Clone and Build the Project

```bash
# Navigate to your web directory
cd /home/aiautosoft/htdocs/aiautosoft.com

# Clone the repository (if not already cloned)
git clone https://github.com/mayurai2026-dev/aiautosoft.git .

# Install dependencies
bun install

# Build for production
bun run build
```

## Step 3: Configure Environment Variables

Create or update the `.env` file in the project root:

```bash
# .env
DATABASE_URL=file:/path/to/your/database.db

# Add any other environment variables here
```

## Step 4: Start with PM2

### Using ecosystem.config.js (Recommended)

```bash
# Start the application (single instance)
pm2 start ecosystem.config.js

# Or explicitly for production
pm2 start ecosystem.config.js --env production
```

### Alternative: Direct PM2 Command

```bash
pm2 start .next/standalone/server.js --name "aiautosoft"
```

## Step 5: Save PM2 Process List

```bash
# Save the current PM2 process list
pm2 save

# Generate startup script (run the command it outputs)
pm2 startup
```

## Step 6: Configure Nginx in CloudPanel

1. Go to your site in CloudPanel Dashboard
2. Navigate to "Nginx Configuration"
3. Add reverse proxy configuration:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

## Fix: Multiple Instances Running

If you see multiple instances running, stop and restart with single instance:

```bash
# Stop and delete all instances
pm2 delete all

# Start fresh with ecosystem config
pm2 start ecosystem.config.js

# Save the configuration
pm2 save
```

## Useful PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs aiautosoft

# View error logs only
pm2 logs aiautosoft --err

# Restart application
pm2 restart aiautosoft

# Stop application
pm2 stop aiautosoft

# Delete application from PM2
pm2 delete aiautosoft

# Monitor resources
pm2 monit

# Show detailed info
pm2 show aiautosoft
```

## Updating the Application

```bash
# Pull latest changes
git pull origin master

# Install any new dependencies
bun install

# Rebuild
bun run build

# Restart PM2
pm2 restart aiautosoft
```

## Troubleshooting

### Check if port 3000 is in use
```bash
lsof -i :3000
```

### Check PM2 logs
```bash
pm2 logs aiautosoft --lines 100
```

### Check application logs
```bash
tail -f logs/pm2-error.log
tail -f logs/pm2-out.log
```

### Kill all PM2 processes and start fresh
```bash
pm2 delete all
pm2 start ecosystem.config.js
pm2 save
```

## Files Structure for Deployment

```
aiautosoft/
├── .next/
│   └── standalone/      # Production server files
│       └── server.js    # PM2 runs this file
├── public/              # Static assets (copied during build)
├── logs/                # PM2 logs directory
├── .env                 # Environment variables
├── ecosystem.config.js  # PM2 configuration
└── package.json
```
