import Anime from "@/components/Anime"
import Header from "@/components/Header"
import Genre from "@/components/Genre"
import { getAnime, getAnimeData, reproduce } from "@/libs/api-call"

  const Page = async () => {
      const topAnime = await getAnime('top/anime', 'limit=12')
      const newsAnime = await getAnime('seasons/now')
      const genresAnime = await getAnime('genres/anime')
      let recomenAnime = await getAnimeData('recommendations/anime', 'entry')
      recomenAnime = reproduce(recomenAnime, 5)
       
      return(
      <>
        {/* Populer */}
        <section>
          <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
          <Anime api={topAnime}/>
        </section>

         {/* Baru */}
        <section>
          <Header title="Paling Baru"/>
          <Anime api={newsAnime}/>
        </section>

        {/* Rekomendasi */}
        <section>
          <Header title="Rekomendasi"/>
          <Anime api={recomenAnime}/>
        </section>

        {/* Genre */}
        <section>
          <Header title="Genre"/>
          <Genre api={genresAnime}/>
        </section>

        {/* Footer */}
    <footer className="bg-blue-500 text-white p-4">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 NEKONIME List, FauzyDev.</p>
        </div>
      </footer>
    </>
  )
}

export default Page
