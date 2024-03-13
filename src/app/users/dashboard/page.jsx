import { userSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"

const Page = async() => {
    const user = await userSession()
        return(
            <section className="mt-4 px-4 w-full">
            <Header title={"Dashboard"}/>
            <div className="mt-8 flex flex-col justify-center items-center">
                <h5 className="text-2xl font-bold py-3">Welcome, {user?.name}</h5>
                <Image src={user?.image} alt="..." width={150} height={150}
                className="border-2 border-color-accent rounded-full"/>

            <div className="flex flex-wrap gap-4 py-5 justify-center">
                <Link href="/users/dashboard/collection" className="bg-color-accent font-bold px-4 py-3 text-xl rounded">
                    My Collection</Link>
                <Link href="/users/dashboard/comment" className="bg-color-accent font-bold px-4 py-3 text-xl rounded">
                    My Comment</Link>
                </div>
            </div>
        </section>
    )
}

export default Page