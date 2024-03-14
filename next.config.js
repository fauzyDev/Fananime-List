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
                hostname: "platform-lookaside.fbsbx.com"
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
