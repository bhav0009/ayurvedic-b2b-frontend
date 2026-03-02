#!/bin/bash
# Clean up Next.js dev server locks and processes

echo "🧹 Cleaning up Next.js processes..."

# Kill all node processes
pkill -9 node 2>/dev/null

# Remove lock files
rm -rf .next/dev/lock 2>/dev/null
rm -rf .next/cache 2>/dev/null

# Kill processes on common ports
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
lsof -ti:3002 | xargs kill -9 2>/dev/null

echo "✅ Cleanup complete! You can now run: npm run dev"
