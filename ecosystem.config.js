/**
 * PM2 Ecosystem Configuration for CloudPanel Deployment
 * 
 * This configuration file is designed for deploying the Ai Auto Soft
 * Next.js application on CloudPanel using PM2 process manager.
 * 
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 restart ecosystem.config.js
 *   pm2 stop ecosystem.config.js
 *   pm2 delete ecosystem.config.js
 * 
 * For production deployment on CloudPanel:
 *   pm2 start ecosystem.config.js --env production
 */

module.exports = {
  apps: [
    {
      name: 'aiautosoft',
      
      // Next.js standalone server (built with output: 'standalone')
      script: '.next/standalone/server.js',
      
      // Environment variables from .env file
      env_file: '.env',
      
      // Production environment
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      
      // Development environment (if needed)
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      
      // Instance management - Single instance for simplicity
      // Change to instances: 'max' and exec_mode: 'cluster' for multi-core
      instances: 1,
      exec_mode: 'fork',
      
      // Auto-restart settings
      watch: false, // Don't watch for file changes in production
      ignore_watch: ['node_modules', '.next', 'logs'],
      max_memory_restart: '500M', // Auto-restart if memory exceeds 500MB
      
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
