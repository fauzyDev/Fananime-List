import Link from "next/link"
import { userSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await userSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 mt-2">
            {
            user ? <Link href="/users/dashboard" className="bg-color-dark text-color-primer py-1 px-8 inline-block rounded">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-primer py-1 px-8 inline-block rounded">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton
