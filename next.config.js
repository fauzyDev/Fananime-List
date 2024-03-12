/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },

            {
                hostname: "lh3.googleusercontent.com"
            },

            {
                hostname: "avatars.githubusercontent.com"
            },
            
            {
                hostname: "scontent.fbdo9-1.fna.fbcdn.net"
            }
        ]
    }
}

module.exports = {
    env: {
        NEXTAUTH_URL: "http://localhost:3000",
      }
}

module.exports = nextConfig
