import { getAnime } from "@/libs/api-call";
import Image from "next/image";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import ButtonCollection from "@/components/Anime/ButtonCollection";
import { userSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/Anime/CommentInput";
import BoxComment from "@/components/Anime/BoxComment";

const Page = async ({ params: {id} }) => {
        const anime = await getAnime(`anime/${id}`)
        const user = await userSession()
        const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email, anime_mal_id: id}
        });

        const comments = await prisma.comment.findMany({
            where: { anime_mal_id: id }
        });
    
        return(
            <>
                <div className="pt-4 px-4 flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{anime.data.title} - {anime.data.year}</h3>
                    {
                        !collection && user &&
                        <ButtonCollection anime_mal_id={id} user_email={user?.email} 
                        anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>
                    }
                </div>

            <div className="pt-4 px-4 overflow-x-auto sm:text-sm">
               <div className="flex flex-nowrap gap-2">
                 <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer font-bold">RANK</h3>
                    <p className="text-color-primer">🏆{anime.data.rank}</p>
                </div>
                <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">SCORE</h3>
                    <p className="text-color-primer">⭐{anime.data.score}</p>
                </div>
                <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">TYPE</h3>
                    <p className="text-color-primer">{anime.data.type}</p>
                </div>
                <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">EPISODE</h3>
                    <p className="text-color-primer">{anime.data.episodes}</p>
                </div>
                <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">DURASI</h3>
                    <p className="text-color-primer">{anime.data.duration}</p>
                </div>
                <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">SEASON</h3>
                    <p className="text-color-primer">{anime.data.season}</p>
                </div>
            <div className="flex-shrink-0 w-36 flex flex-col justify-center items-center rounded border bg-color-accent p-2">
                    <h3 className="text-color-primer">GENRE</h3>
                    {anime.data.genres?.map((genre, index) => (

                    <p key={index} className="text-color-primer">{genre.name},</p>
                    
                    ))}
                </div>
            </div>
        </div>

            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250}
                 className="w-full rounded object-cover"/>
                <div className="sinopsis-container">
                    <p className="text-xl font-bold mb-2">Sinopsis</p>
                    <p>{anime.data.synopsis}</p>
                 </div>
                </div>
                
                <div className="p-4">
                    <p className="font-bold text-xl mb-2">Komentar</p>
                    {comments.length === 0 && 
                        <div className="flex flex-col items-center justify-center mb-2">
                        <Image src="/not-comen.png" alt="" width={150} height={150}/>
                        <p className="text-center font-bold text-xl">Belum ada Komentar</p>
                        </div>
                    }

                    <BoxComment anime_mal_id={id}/>

                    {
                        user && <CommentInput anime_mal_id={id} user_email={user?.email} 
                        username={user?.name} anime_title={anime.data.title} user_image={user?.image}/>
                    }
                </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    );
};

export default Page