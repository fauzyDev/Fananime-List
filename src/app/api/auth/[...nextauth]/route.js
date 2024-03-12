import NextAuth from "next-auth/next";
import googleAuth from "next-auth/providers/google"
import githubAuth from "next-auth/providers/github"
import facebookAuth from "next-auth/providers/facebook"

export const optionAuth = {
    providers: [
        googleAuth({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
        }),

        githubAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET_ID
        }),

        facebookAuth({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_SECRET_ID
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(optionAuth)
export {handler as GET, handler as POST}