/**
 * PM2 Ecosystem Configuration for CloudPanel Deployment
 * 
 * This configuration file loads environment variables from .env file
 * and passes them to the Next.js application.
 * 
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 restart ecosystem.config.js
 *   pm2 stop ecosystem.config.js
 *   pm2 delete ecosystem.config.js
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Parse .env file manually (no external dependencies needed)
function parseEnvFile(filePath) {
  const envPath = path.resolve(__dirname, filePath);
  const result = {};
  
  try {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      content.split('\n').forEach(line => {
        const trimmed = line.trim();
        // Skip empty lines and comments
        if (!trimmed || trimmed.startsWith('#')) return;
        
        const [key, ...valueParts] = trimmed.split('=');
        if (key) {
          let value = valueParts.join('=').trim();
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) ||
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          result[key.trim()] = value;
        }
      });
      console.log('✓ Loaded', Object.keys(result).length, 'environment variables from .env');
      if (result.PORT) {
        console.log('✓ PORT from .env:', result.PORT);
      }
    } else {
      console.warn('Warning: .env file not found at', envPath);
    }
  } catch (err) {
    console.warn('Warning: Could not load .env file:', err.message);
  }
  
  return result;
}

// Load environment variables from .env file
const envConfig = parseEnvFile('.env');

module.exports = {
  apps: [
    {
      name: 'aiautosoft',
      
      // Next.js standalone server
      script: '.next/standalone/server.js',
      
      // Environment variables - from .env file (takes priority)
      env: {
        NODE_ENV: 'production',
        // Spread all env vars from .env (including PORT)
        ...envConfig
      },
      
      // Single instance in fork mode
      instances: 1,
      exec_mode: 'fork',
      
      // Auto-restart settings
      watch: false,
      ignore_watch: ['node_modules', '.next', 'logs'],
      max_memory_restart: '500M',
      
      // Logging configuration
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Auto-restart on crash
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 1000,
    }
  ]
};
