'use client'

import { useEffect, useState } from "react"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import Anime from "@/components/Anime"
import { getAnime } from "@/libs/api-call"

    const Page = () => {
        const [page, setPage] = useState(1)
        const [topAnime, setTopAnime] = useState([])

        const fetchData = async () => {
        const data = await getAnime('top/anime', `page=${page}`)
        setTopAnime(data)
        }

        useEffect(() => {
        fetchData()
        },  [page])

        return(
            <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <Anime api={topAnime}/>
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
            </>
        )
    }

export default Page