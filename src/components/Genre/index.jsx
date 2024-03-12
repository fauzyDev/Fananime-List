import Link from "next/link"

const Genre = ({ api }) => {
    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 p-4 overflow-x-hidden border-2 border-sky-500 rounded">
            {api.data?.map((genre, index) => {
                return(
                    <Link key={index} href={`/genre/${genre.mal_id}`}>
                    <h3 className="font-bold md:text-xl sm:text-sm text-sm p-2 cursor-pointer hover:text-color-accent transition-all
                    overflow-hidden whitespace-nowrap max-w-xs">
                    {genre.name}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default Genre