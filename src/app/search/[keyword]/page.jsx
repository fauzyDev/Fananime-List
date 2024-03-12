import Anime from "@/components/Anime"
import Header from "@/components/Header"
import { getAnime } from "@/libs/api-call"

  const Page = async ({ params }) => {
      const { keyword } = params  
      const decodeKeyword = decodeURI(keyword)
      const searchAnime = await getAnime('anime', `q=${decodeKeyword}`)

      return (
          <>
            <section>
              <Header title={`Pencarian dari ${decodeKeyword}`}/>
              <Anime api={searchAnime}/>
            </section>
          </>
        )
      }

export default Page
