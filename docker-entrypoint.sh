#!/bin/sh
echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" > /app/.env.local
exec npm run dev
