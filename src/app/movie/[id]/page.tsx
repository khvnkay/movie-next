import React from 'react'
import Image from 'next/image'
type Props = {
    params: any
}

export default async function MovieDetail({params}: Props) {
    const {id }= params
    console.log(id);
    
    const imagePath  = `https://image.tmdb.org/t/p/original/`
    const data:any =  await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=62ce2ef71b249dfd3cf7791753c18334`, 
    {next: {
        revalidate: 10
    }})
    const res = await data.json()
  
  return (
    <div>

        <h2 className='text-4xl'>{res.title} </h2>
        <h2 className='text-4xl'> Runtime {res.runtime} </h2>

        <Image 
    width={800}
    height={800}
    alt={res.title}
    className='my-12 w-full'
    src={imagePath+ res.backdrop_path}
priority   
    />
    <p>{res.overview}</p>

    </div>
  )
}