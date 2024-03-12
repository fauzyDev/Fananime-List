'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

const Page = () => {
    const router = useRouter()
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <Image src="/notfound.png" alt="..." width={180} height={180}></Image>
                <h3 className="text-2xl font-bold p-3">Tidak Ditemukan</h3>
                <button onClick={() => router.back()} className="hover:text-color-accent transition-all underline">Kembali</button>
            </div>
        </div>
    )
}

export default Page