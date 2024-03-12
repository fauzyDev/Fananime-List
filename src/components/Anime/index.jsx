import Image from "next/image";
import Link from "next/link";

const Anime = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-4 px-4 overflow-x-hidden">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} 
                    className="cursor-pointer hover:text-color-accent transition-all border-2 border-sky-500 rounded"
                    key={index}>
                        <div className="border border-sky-500 rounded">
                            <Image src={anime.images.webp.image_url}
                                alt="..."
                                width={350}
                                height={350}
                                className="w-full max-h-64 object-cover rounded"/>
                            </div>
                        <h3 className="font-bold md:text-xl sm:text-sm text-sm p-4 overflow-hidden">{anime.title}</h3>
                        <h3 className="font-bold md:text-xl sm:text-sm text-sm p-2">Score ⭐{anime.score}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default Anime;
