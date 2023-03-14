
import { fetchMovies } from '@/api'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import { isDarkState } from '@/recoil/atoms'
import { Inter } from 'next/font/google'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'


const inter = Inter({ subsets: ['latin'] })
interface MovieProps {
  page: number,
  results: ResultsProps[]
}
interface ResultsProps {
  id: number
  backdrop_path: string
  title: string
}

export default function Home() {
  // const results = fetchMovies()
  const { isLoading, data } = useQuery<MovieProps>("movies", () => fetchMovies())

  return (
    <>
      <Seo title="Home" />
      <h1>Hello</h1>
      {data?.results.map((movie) => {
        <div key={movie.id}>{movie.title}</div>
      })}
    </>
  )
}
