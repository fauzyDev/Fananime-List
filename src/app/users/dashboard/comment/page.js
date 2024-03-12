import React from "react";
import prisma from "@/libs/prisma";
import { userSession } from "@/libs/auth-libs";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import Image from "next/image";

const Page = async () => {
    const user = await userSession();
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Comment"} />
            <div className="grid grid-cols-1 py-2 gap-4">
                {comments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-4">
                        <Image src="/not-comen.png" alt="" width={150} height={150}/>
                        <p className="text-center font-bold text-xl">Belum ada Komentar</p>
                        </div>  ) : 
                        (comments.map(comment => (
                        <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} 
                            className="bg-color-primer text-color-dark p-4 border-2 border-color-dark">
                            <p className="text-xl font-bold">Judul: {comment.anime_title}</p>
                            <p>Komentar: "{comment.comment}"</p>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
};

export default Page