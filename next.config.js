/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiKey: process.env.API_KEY || 'API_KEY_123',
    }
}

module.exports = nextConfig
