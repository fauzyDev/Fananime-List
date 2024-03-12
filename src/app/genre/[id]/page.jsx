'use client'

import Anime from "@/components/Anime"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnime } from "@/libs/api-call"

const Page = ({ params: { id } }) => {
    const [page, setPage] = useState(1)
    const [genreAnime, setGenreAnime] = useState([])
    const [genreName, setGenreName] = useState('')

    const fetchData = async () => {
        const data = await getAnime('anime', `genres=${id}&page=${page}`)
        setGenreAnime(data)

        const nameGenre = await getAnime(`genres/anime`)
        const genre = nameGenre.data?.find(genres => genres.mal_id === parseInt(id))
        if (genre) {
            setGenreName(genre.name)
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <section> 
                <HeaderMenu title={`Genre: ${genreName}`}/>
                <Anime api={genreAnime}/>
                <Pagination page={page} lastPage={genreAnime.pagination?.last_visible_page} setPage={setPage}/>
            </section>
        </>
    )
}

export default Page
