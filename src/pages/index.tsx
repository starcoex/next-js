
import { fetchMovies } from '@/api'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import { isDarkState } from '@/recoil/atoms'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'


const inter = Inter({ subsets: ['latin'] })
interface MovieProps {
  page: number,
  results: ResultsProps[]
}
export interface ResultsProps {
  id: number
  backdrop_path: string
  title: string
  original_title: string;
}

export default function Home() {
  const { isLoading, data } = useQuery<MovieProps>("movies", fetchMovies)
  const router = useRouter()
  const onClick = (id: number, title: string) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title: title,
        id: id,
      },
    }, `/movies/${id}`)
  }
  return (
    <div className='container'>
      <Seo title="Home" />
      {isLoading ? <h1 style={{ textAlign: "center" }}>Loading...</h1> :
        <ul>{data?.results.map((movie) => <div
          onClick={() => onClick(movie.id, movie.title)}
          key={movie.id} className='movie'>
          <Link href={{
            pathname: `/movies/${movie.id}`,
            // query: {
            //   title: movie.original_title
            // }
          }}><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /></Link>
          <li >{movie.title}</li></div>)}</ul>
      }
      {/* <ul>{results.map((movie: ResultsProps) => <div key={movie.id} className='movie'><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /><li >{movie.title}</li></div>)}</ul> */}
      <style jsx>{`
        .container {

        }
        .container   ul{
       display: grid;
       grid-template-columns: 1fr 1fr;
       padding: 20px;
       gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 15px;
          transition: transform 0.2s ease-in-out;
           box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
     
        }
        .movie img:hover{
          transform: scale(1.05) translateY(-10px) ;
        }
        .movie li {
          font-size: 15px;
          text-align: center;
          padding-top: 5px;
        }
        `}

      </style>
    </div>
  )
}
// export async function getServerSideProps({ }: GetServerSideProps) {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();

//   return {
//     props: {
//       results,
//     },
//   };
// }


