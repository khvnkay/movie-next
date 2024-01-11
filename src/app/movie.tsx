import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


export default function Movie({title, id, poster_path, release_date}: any) {
    const imagePath  = `https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <div className='p-1'>
        <b className='text-ellisis overflow-hidden line-clamp-1'>{title}</b>
        <h2>{release_date}</h2>
        <Link href={`/movie/${id}`}>

        
        
            <Image 
    width={800}
    height={800}
    alt={id}
    src={imagePath}
    
    />
        </Link>



    </div>
  )
}