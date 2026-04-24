/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "myanimelist.net"
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
        NEXTAUTH_URL: "https://fananime-list.vercel.app",
      }
}

module.exports = nextConfig
