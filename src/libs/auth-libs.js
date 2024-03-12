import { getServerSession } from "next-auth";
import { optionAuth } from "@/app/api/auth/[...nextauth]/route";

export const userSession = async() => {
    const session = await getServerSession(optionAuth)
    return session?.user
}