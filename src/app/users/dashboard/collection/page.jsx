import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"
import { userSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async () => {
    const user = await userSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email }
    })

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            {collection.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-4">
                    <Image src="/not-collect.png" alt="" width={150} height={150}/>
                    <p className="text-center font-bold text-xl">Belum ada Koleksi</p>
                </div> ) : 
                ( <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {collection.map(collect => (
                        <Link key={collect.id} href={`/anime/${collect.anime_mal_id}`} className="relative border-2 border-color-accent">
                            <div className="relative">
                                <Image src={collect?.anime_image} alt={collect?.anime_image} 
                                className="w-full" width={100} height={100} />
                                <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                                    <h5 className="text-xl text-center">{collect?.anime_title}</h5>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Page
