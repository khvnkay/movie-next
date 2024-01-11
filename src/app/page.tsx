import Image from 'next/image'
import Movie from './movie'

export default async function Home() {
  const data:any =  await fetch("https://api.themoviedb.org/3/movie/popular?api_key=62ce2ef71b249dfd3cf7791753c18334")
  const res = await data.json()


  return (
    <div>

      <div className="grid gap-2 grid-cols-fluid"> 

      {
        res.results.map((movie:any)=> <Movie

        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}

        
        
        />)
      }
      </div>

    </div>

  )
}
